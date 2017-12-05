/*
* 公共执行http请求
* */
import api from './api'
import request from './request'
import { checkNull, goOpenCard, checkHasCard, checkCardData, formatRMBYuan, formatRMBYuanDecimal, showToast } from './public'
import { codeError } from './helper'
import Spinner from '../components/Spinner/index'

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

/*
* 根据token 获取uid
* */
export async function getUser ({ auth_code, cb }) {
  Spinner()
  const { msg, data } = await request.apiGet(api.getAlipayUid, {
    appId: appId,
    sign: sign,
    auth_code: auth_code
  })
  Spinner()
  sessionStorage.setItem('isClose', 'yes')
  if (msg && msg.code === 2000) cb(data)
  else codeError()
}

/*
* 开卡组件的根据token获取uid
* */
export async function getCardComponentUid ({ auth_code, request_id, cb }) {
  Spinner()
  const { msg, data } = await request.apiGet(api.getAlipayCardComponentUid, {
    appId: appId,
    sign: sign,
    bizType: bizType,
    templateId: templateId,
    auth_code: auth_code,
    request_id: request_id
  })
  Spinner()
  cb(msg, data)
}

/*
* 开通先享后付卡
* */
export async function getEnjoyCardComponent ({ userId, cb }) {
  Spinner()
  const { msg, data } = await request.apiGet(api.enjoyCardComponent, {
    appId: appId,
    sign: sign,
    cardType: cardType,
    cityCode: cityCode,
    templateId: templateId,
    bizType: bizType,
    userId: userId
  })
  Spinner()
  cb(msg, data)
}

/*
* 查询当前卡信息
* */
export async function getCardInfo ({ Vue, cb }) {
  Spinner()
  const { msg, data } = await request.apiGet(api.searchCardInfo, {
    appId: appId,
    sign: sign,
    cardType: cardType,
    userId: sessionStorage.getItem('userId')
  })
  Spinner()
  const dispatch = Vue.$store.dispatch
  if (msg && msg.code === '20000') {
    if (checkNull(data) === 0) {
      goOpenCard()
      return false
    }

    const { alipayCardData, alipayCardNo, alipayCardStatus, cashBalance } = data

    if (checkHasCard(alipayCardStatus) === 'no') {
      goOpenCard(Vue)
      return false
    }
    // 存在data 缓存下来
    sessionStorage.setItem('alipayCardInfo', typeof data === 'object' ? JSON.stringify(data) : data)

    dispatch('setAlipayCardInfo', { item: 'alipayCardData', data: checkCardData(alipayCardData) })
    dispatch('setAlipayCardInfo', { item: 'alipayCardNo', data: alipayCardNo })
    dispatch('setAlipayCardInfo', { item: 'alipayCardStatus', data: alipayCardStatus })
    dispatch('setAlipayCardInfo', { item: 'cashBalance', data: checkNull(cashBalance) === 0 ? 0 : formatRMBYuan(cashBalance) })

    // 写入卡信息
    cb(data)
  } else {
    goOpenCard(Vue)
  }
}

/*
* 申请退卡
* */
export async function applyCardClose ({ status, cb }) {
  Spinner()
  const item = getAlipayCardStatusApi[status]
  const { msg } = await request.apiPost(api[item], {
    userId: sessionStorage.getItem('userId'),
    appId: appId,
    sign: sign,
    cardType: cardType,
    action: applyCardCloseAction,
    disabledTips: applyCardCloseTips
  })
  Spinner()
  if (msg && msg.code === '20000') cb(msg)
  else codeError()
}

/*
* 撤回退卡申请
* */
export async function cancelCardClose ({ status, cb }) {
  Spinner()
  const item = getAlipayCardStatusApi[status]
  const { msg } = await request.apiPost(api[item], {
    userId: sessionStorage.getItem('userId'),
    appId: appId,
    sign: sign,
    cardType: cardType,
    action: cancelCardCloseAction,
    disabledTips: item === 'positiveCardComponent' ? cancelCardCloseTips : negativeCardCloseTips
  })
  Spinner()
  if (msg && msg.code === '20000') cb(msg)
  else codeError()
}

/*
* 销卡
* */
export async function revokeCardClose ({ status, cb }) {
  Spinner()
  const item = getAlipayCardStatusApi[status]
  const { msg } = await request.apiPost(api[item], {
    userId: sessionStorage.getItem('userId'),
    appId: appId,
    sign: sign,
    cardType: cardType,
    action: revokeCardCloseAction,
    disabledTips: revokeCardCloseTips
  })
  Spinner()
  if (msg && msg.code === '20000') cb(msg)
  else codeError()
}

/*
* 唤起支付宝收银台
* */
export async function showAlipayStore ({ label, RMB, syncCallBackUrl, cb }) {
  Spinner()
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
  Spinner()
  if (msg && msg.code === '20000') {
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
  Spinner()
  const { msg } = await request.apiPost(api.alipayRefund, {
    appId: storeAppId ? storeAppId : appId,
    sign: storeSign ? storeSign : sign,
    cardType: cardType,
    alipayCardNo: JSON.parse(sessionStorage.getItem('alipayCardInfo')).alipayCardNo
  })
  Spinner()
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
