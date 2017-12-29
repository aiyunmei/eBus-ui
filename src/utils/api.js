/*
* 接口地址
* */
const { baseUrl, alipayUserUrl, alipayCardManagementUrl, alipayCardPayProviderUrl, alipayMomUrl } = global.threeConfig.api

export default {
  baseUrl: baseUrl,
  getAlipayUid: `${alipayUserUrl}/alipay/user/auth/uid`, // 获取支付宝uid
  getAlipayCardComponentUid: `${alipayUserUrl}/card/activate/form`, // 开卡组件获取uid
  searchCardInfo: `${alipayCardManagementUrl}/card/service/findBy`, // 查询当前卡信息
  enjoyCardComponent: `${alipayCardManagementUrl}/virtual/card/alipay/status`, // 对先享后付 卡状态的操作
  positiveCardComponent: `${alipayCardManagementUrl}/virtual/card/alipay/status/recharge`, // 余额正数 卡状态操作
  negativeCardComponent: `${alipayCardManagementUrl}/virtual/card/alipay/status/recharge/negative`, // 余额负数卡状态操作
  getMoreAlipayCardComponentUid: `http://192.168.137.234:8082/card/activate/form/recharge`, // 获取跟多信息的开卡组件获取用户信息 手机 身份证 姓名
  applyRechargeCardComponent: `http://192.168.137.234:8083/virtual/card/alipay/status/recharge`, // 储值卡开卡
  alipayStore: `${alipayCardPayProviderUrl}/card/pay/store`, // 消费
  alipayRefund: `${alipayCardPayProviderUrl}/card/pay/refund`, // 退款
  rechargeLog: `/aliapy/card/recharge/record`, // 充值记录
  alipayMom: `${alipayMomUrl}/categoryService/adx/query` // 阿里妈妈广告接入
}
