/*
* 公共执行http请求
* */
import $Vue from '../main'
import api from './api'
import request from './request'
import { codeError } from './helper'
import { checkNull, goOpenCard, checkHasCard, checkCardData, formatRMBYuanDecimal, showToast, randomStr } from './public'

const { appId, sign, cardType, templateId, bizType, storeAppId, storeSign } = global.threeConfig.alipayCardInfo
const { cityCode, cardName } = global.threeConfig.global

const getAlipayCardStatusApi = { // 根据当前状态选择接口
  1: 'enjoyCardComponent',
  2: 'enjoyCardComponent',
  4: 'positiveCardComponent',
  5: 'positiveCardComponent',
  7: 'negativeCardComponent',
  8: 'negativeCardComponent'
}

const applyCardCloseAction = 'disable'
const cancelCardCloseAction = 'enable'
const revokeCardCloseAction = 'revoke'

const applyCardCloseTips = encodeURIComponent('您已申请退卡，卡片暂时无法使用')
const cancelCardCloseTips = encodeURIComponent('用户取消退卡')
const negativeCardCloseTips = encodeURIComponent('当前余额不足,请充值')
const revokeCardCloseTips = encodeURIComponent('系统统一退卡')

const SUCCESS_CODE = '20000'

/*
* 根据token 获取uid
* */
export async function getUser ({ auth_code, cb }) {
  const { msg, data } = await request.apiGet(api.getAlipayUid, {
    appId: appId,
    sign: sign,
    auth_code: auth_code
  })
  sessionStorage.setItem('isClose', 'yes')
  if (msg && msg.code === SUCCESS_CODE) cb(data)
  else codeError()
}

/*
* 开卡组件的根据token获取uid
* */
export async function getCardComponentUid ({ auth_code, request_id, cb }) {
  const { msg, data } = await request.apiGet(api.getAlipayCardComponentUid, {
    appId: appId,
    sign: sign,
    bizType: bizType,
    templateId: templateId,
    auth_code: auth_code,
    request_id: request_id
  })
  if (msg && msg.code === SUCCESS_CODE) cb(data)
  else goOpenCard()
}

/*
* 开卡组件根据token获取跟多用户信息
* */
export async function getMoreCardComponentUid ({ auth_code, request_id, cb }) {
  const { msg, data } = await request.apiGet(api.getMoreAlipayCardComponentUid, {
    appId: appId,
    sign: sign,
    bizType: bizType,
    templateId: templateId,
    auth_code: auth_code,
    request_id: request_id
  })
  if (msg && msg.code === SUCCESS_CODE) cb(data)
  else goOpenCard()
}

/*
* 开通先享后付卡
* */
export async function getEnjoyCardComponent ({ userId, cb }) {
  const { msg, data } = await request.apiGet(api.enjoyCardComponent, {
    appId: appId,
    sign: sign,
    cardType: cardType,
    cityCode: cityCode,
    templateId: templateId,
    bizType: bizType,
    userId: userId
  })
  cb(msg, data)
}

/*
* 烟台拿用户信息换卡号
* */
export async function getYanTaiCardNo ({ userId, certNo, userName, mobilePhone, cb }) {
  const { message, data } = await request.apiPost('http://cx.yantai.cn:8880/QRcode/opencard.jsp', {
    userId: userId,
    certNo: certNo,
    userName: userName,
    mobilePhone: mobilePhone,
    messageId: new Date().getTime() + `${randomStr(32)}` + userId
  })
  if (message && message.code === SUCCESS_CODE) cb(data)
  else goOpenCard()
}

/*
* 烟台开通储值卡
* */
export async function getYanTaiRechargeCardComponent ({ userId, cardNo, cb }) {
  const { msg, data } = await request.apiGet(api.applyRechargeCardComponent, {
    appId: appId,
    sign: sign,
    cardType: cardType,
    cityCode: cityCode,
    templateId: templateId,
    bizType: bizType,
    cardNo: cardNo,
    userId: userId
  })
  cb(msg, data)
}

/*
* 查询当前卡信息
* */
export async function getCardInfo ({ cb }) {
  const { msg, data } = await request.apiGet(api.searchCardInfo, {
    appId: appId,
    sign: sign,
    cardType: cardType,
    userId: sessionStorage.getItem('userId')
  })
  const dispatch = $Vue.$store.dispatch

  if (msg && msg.code === SUCCESS_CODE) {
    if (checkNull(data) === 0) {
      goOpenCard()
      return false
    }

    const { alipayCardData, alipayCardNo, alipayCardStatus, cashBalance } = data

    if (checkHasCard(alipayCardStatus) === 'no') {
      goOpenCard()
      return false
    }

    // 存在data 缓存下来
    sessionStorage.setItem('alipayCardInfo', typeof data === 'object' ? JSON.stringify(data) : data)
    // 写入卡信息
    dispatch('setAlipayCardInfo', { item: 'alipayCardData', data: checkCardData(alipayCardData) })
    dispatch('setAlipayCardInfo', { item: 'alipayCardNo', data: alipayCardNo })
    dispatch('setAlipayCardInfo', { item: 'alipayCardStatus', data: alipayCardStatus })
    dispatch('setAlipayCardInfo', { item: 'cashBalance', data: checkNull(cashBalance) === 0 ? '0.00' : formatRMBYuanDecimal(cashBalance) })

    cb(data)
  } else {
    goOpenCard()
  }
}

/*
* 申请退卡
* */
export async function applyCardClose ({ status, cb }) {
  const item = getAlipayCardStatusApi[status]
  const { msg } = await request.apiPost(api[item], {
    userId: sessionStorage.getItem('userId'),
    appId: appId,
    sign: sign,
    cardType: cardType,
    action: applyCardCloseAction,
    disabledTips: applyCardCloseTips
  })
  if (msg && msg.code === SUCCESS_CODE) cb(msg)
  else codeError()
}

/*
* 撤回退卡申请
* */
export async function cancelCardClose ({ status, cb }) {
  const item = getAlipayCardStatusApi[status]
  const { msg } = await request.apiPost(api[item], {
    userId: sessionStorage.getItem('userId'),
    appId: appId,
    sign: sign,
    cardType: cardType,
    action: cancelCardCloseAction,
    disabledTips: item === 'positiveCardComponent' ? cancelCardCloseTips : negativeCardCloseTips
  })
  if (msg && msg.code === SUCCESS_CODE) cb(msg)
  else codeError()
}

/*
* 销卡
* */
export async function revokeCardClose ({ status, cb }) {
  const item = getAlipayCardStatusApi[status]
  const { msg } = await request.apiPost(api[item], {
    userId: sessionStorage.getItem('userId'),
    appId: appId,
    sign: sign,
    cardType: cardType,
    action: revokeCardCloseAction,
    disabledTips: revokeCardCloseTips
  })
  if (msg && msg.code === SUCCESS_CODE) cb(msg)
  else codeError()
}

/*
* 唤起支付宝收银台
* */
export async function showAlipayStore ({ label, RMB, syncCallBackUrl, cb }) {
  const { msg, data } = await request.apiPost(api.alipayStore, {
    appId: storeAppId ? storeAppId : appId,
    sign: storeSign ? storeSign : sign,
    cardType: cardType,
    userId: sessionStorage.getItem('userId'),
    alipayCardNo: JSON.parse(sessionStorage.getItem('alipayCardInfo')).alipayCardNo,
    subject: `${cardName}${label}`,
    body: cardName,
    totalAmount: RMB,
    syncCallBackUrl: `${api.baseUrl}#/${syncCallBackUrl}`
  })
  if (msg && msg.code === SUCCESS_CODE) {
    const div = document.createElement('div') // 创建div
    div.innerHTML = data.body // 将返回的form 放入div
    document.body.appendChild(div)
    document.forms[0].submit()
    cb()
  } else {
    codeError()
  }
}

/*
* 退款
* */
export async function setRefund ({ cb }) {
  const { msg } = await request.apiPost(api.alipayRefund, {
    appId: storeAppId ? storeAppId : appId,
    sign: storeSign ? storeSign : sign,
    cardType: cardType,
    alipayCardNo: JSON.parse(sessionStorage.getItem('alipayCardInfo')).alipayCardNo
  })
  if (msg && msg.code) {
    cb()
  } else {
    showToast('部分订单退款失败,请再点击退款')
  }
}

/*
* 充值记录
* */
export async function getRechargeLog ({ pageSize, pageNum, cb }) {
}

/*
* 阿里妈妈接入
* @params ${adPid} 广告位id
* @params ${clickThroughUrl} 跳转地址
* @params ${imgUrl} 图片地址
* */
export async function getAlipayMon ({ adPid, cb }) {
  const { content } = await request.apiPost(api.alipayMom, {
    uid: sessionStorage.getItem('userId'),
    adPid: adPid
  })
  const { clickThroughUrl, imgUrl } = content.seat.ad
  cb(clickThroughUrl, imgUrl)
}
