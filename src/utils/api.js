/*
* 接口地址
* */
const { baseUrl, alipayUserUrl, enjoyCardManagementUrl, rechargeCardManagementUrl, alipayCardPayProviderUrl } = global.threeConfig.api

export default {
  baseUrl: baseUrl,
  getAlipayUid: `${alipayUserUrl}/alipay/user/auth/uid`, // 获取支付宝uid
  getAlipayCardComponentUid: `${alipayUserUrl}/card/activate/form`, // 开卡组件获取uid
  searchCardInfo: `${enjoyCardManagementUrl}/card/service/findBy`, // 查询当前卡信息
  enjoyCardComponent: `${enjoyCardManagementUrl}/virtual/card/alipay/status`, // 对先享后付 卡状态的操作
  positiveCardComponent: `${rechargeCardManagementUrl}/virtual/card/alipay/status/recharge`, // 余额正数 卡状态操作
  negativeCardComponent: `${rechargeCardManagementUrl}/virtual/card/alipay/status/recharge/negative`, // 余额负数卡状态操作
  alipayStore: `${alipayCardPayProviderUrl}/card/pay/store`, // 消费
  alipayRefund: `${alipayCardPayProviderUrl}/card/pay/refund` // 退款
}
