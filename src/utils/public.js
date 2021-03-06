import $Vue from '../main'
import Toast from '../components/Toast/index'
import { alipaySetTitle } from './alipayJsApi'
import enums from './enums'

const { cardName } = global.threeConfig.global
const { appId, busCode } = global.threeConfig.alipayCardInfo
const { menuOptions } = global.threeConfig.cardDetail

const TITLE_LIST = {
  cardDetail: appId === enums.TIAN_JIN_APPID ? '客票详情' : '卡片详情', // 天津使用的票
  help: '使用帮助',
  openLine: '已开通线路',
  recharge: '卡片充值',
  rechargeLog: '充值记录',
  rechargeAuto: '自动充值',
  balance: '余额查询',
  cardClose: '退卡申请',
  protocol: `${cardName}用户协议`,
  lineInfo: '线路详情',
  other: cardName
}

/**
* 写入页面标题
* @params ${path} 当前页面path
* */
export function setTitle (path) {
  const name = TITLE_LIST[path] ? TITLE_LIST[path] : TITLE_LIST.other
  document.title = name
  alipaySetTitle(name)
}

/**
* 原生跳转
* @params ${type} replace && href 跳转方式
* @params url 目标链接
* */
export function jsLink (type, url) {
  if (type === 'replace') window.location.replace(url)
  else if (type === 'href') window.location.href = url
}

/*
* 去支付宝乘车码
* */
export function linkBusCode () {
  jsLink('href', busCode)
}

/**
* 去开卡页
 * @params ${Vue} 需要vue对象实现路由跳转
* */
export function goOpenCard () {
  if (appId === enums.WU_HAN_APPID) { // 武汉特殊不用开卡组件 故跳转乘车码去支付宝开卡页面
    linkBusCode()
    return false
  }
  // 使用了开卡组件的去自己的开卡页面
  $Vue.$router.replace('/openCard')
}

/**
* 拼接hash值并且转码
* @params ${params} 传入需要的对象
* */
export function toHash (obj) { // obj 拼接对象 enName 需要转码的对象
  let hash = '?'
  for (let item in obj) {
    hash += item + '=' + encodeURIComponent(obj[item]) + '&'
  }
  let newHash = hash.substr(0, hash.length - 1) // 删除字符串的最后一个字符
  return newHash
}

/**
* 对象值转码
* @params ${params} 传入需要的对象
* */
export function enCodeString (params) {
  for (let key in params) {
    params[key] = encodeURIComponent(params[key])
  }
  return params
}

/**
* 验证空值
* @params ${data} 需要验证的值
*
* 0 为空
* 1 不为空
* */
export function checkNull (data) {
  if (data === '' || data === null || data === undefined) return 0
  else return 1
}

/**
* 验证当前是否有卡
* @params {status} 当前卡状态
*
* yes 有卡
* no 没有卡
* */
export function checkHasCard (status) {
  const statusArr = [1, 2, 4, 5, 7, 8, '1', '2', '4', '5', '7', '8']
  let result = 'no'
  for (let i = 0; i < statusArr.length; i++) {
    if (status === statusArr[i]) result = 'yes'
  }
  return result
}

/**
* 当前是否有用户信息
* @params
*
* 0 没有
* 1 有
* */
export function checkUserInfo () {
  if (checkNull(sessionStorage.getItem('userId')) === 0) return 0
  else return 1
}

/**
* 判断用户当前的卡状态
* @params ${status}
*
* yes 使用中
* no 退卡申请中
* */
export function checkCardStatus (status) {
  const statusArr = [1, 4, 7, '1', '4', '7']
  let result = 'no'
  for (let i = 0; i < statusArr.length; i++) {
    if (status === statusArr[i]) result = 'yes'
  }
  return result
}

/**
* 判断用户的支付类型
* @params ${cardData}
*
* 0 先享后付
* 1 储值
* */
export function checkCardData (cardData) {
  const cardDataArr = [null, 'null', undefined, 'undefined', 0, '0']
  let result = 1
  for (let i = 0; i < cardDataArr.length; i++) {
    if (cardData === cardDataArr[i]) result = 0
  }
  return result
}

/**
* 判断退卡申请时间是否超过期限
* @params ${checkEndTime} 期限时间
*
* 0 没有超过期限
* 1 超过了期限
* */
export function checkCardCloseTime (checkEndTime) {
  if (checkNull(checkEndTime) === 0) {
    console.log('退卡截止时间信息异常强制默认没有超过7天')
    return 0
  }
  if (new Date().getTime() - checkEndTime < 0) return 0
  else return 1
}

/**
* 判断当前余额为正负
* @params ${balance} 当前余额
*
* + 为正
* - 未负
* */
export function checkBalance (balance) {
  if (checkNull(balance) === 0) {
    console.log('余额信息异常')
    return '-'
  }
  if (balance >=0) return '+'
  else return '-'
}

/**
* RMB分格式化
 * @params ${fen} 当前金额 单位分
* */
export function formatRMBYuan (fen) {
  const yuan = fen / 100
  const decimal = Math.abs(yuan - Math.floor(yuan))
  const equal = decimal < 1e-7

  if (equal) {
    return yuan
  } else {
    return yuan.toFixed(2)
  }
}

/**
* 分转字符串版本元
 * @params ${fen} 当前金额 单位分
* */
export function formatRMBYuanDecimal (fen) {
  const reFen = (fen / 100).toFixed(2)

  return reFen === 'NaN' ? '0.00' : reFen
}

/**
* Toast
* @params ${val} 内容
* */
export function showToast (val) {
  Toast(val)
}

/*
* 验证这个功能是否开启
* @params ${link} 需要验证的link
*
* false 关闭
* true 开启
* */
export function isCardDetailMenu (link) {
  let result = false
  menuOptions.forEach(item => {
    if (item.link === link) result = item.visible ? result = false : result = true
  })
  return result
}


