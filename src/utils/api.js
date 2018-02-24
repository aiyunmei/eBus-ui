/*
* 接口地址
* */
const { baseUrl, alipayUserUrl, alipayCardManagementUrl, alipayCardPayProviderUrl, alipayMomUrl } = global.threeConfig.api

export default {
  baseUrl: baseUrl,
  getAlipayUid: `${alipayUserUrl}/alipay/user/auth/uid`, // 获取支付宝uid
  getAlipayCardComponentUid: `${alipayUserUrl}/card/activate/form`, // 开卡组件获取uid
  getAlipayCardComponentUidMore: `${alipayUserUrl}/card/activate/form/recharge`, // 开卡组件获取用户更多信息 例如 省份证 手机号 姓名
  searchCardInfo: `${alipayCardManagementUrl}/card/service/findBy`, // 查询当前卡信息
  enjoyCardComponent: `${alipayCardManagementUrl}/virtual/card/alipay/status`, // 对先享后付 卡状态的操作
  positiveCardComponent: `${alipayCardManagementUrl}/virtual/card/alipay/status/recharge`, // 余额正数 卡状态操作
  negativeCardComponent: `${alipayCardManagementUrl}/virtual/card/alipay/status/recharge/negative`, // 余额负数卡状态操作
  alipayStore: `${alipayCardPayProviderUrl}/card/pay/store`, // 消费
  alipayRefund: `${alipayCardPayProviderUrl}/card/pay/refund`, // 退款
  rechargeLog: `/aliapy/card/recharge/record`, // 充值记录
  alipayMom: `${alipayMomUrl}/categoryService/adx/query`, // 阿里妈妈广告接入
  // 天津定制化接口
  getAlipayCardComponentUidNewService: `${alipayUserUrl}/card/activate/form/sync/data`, // 部署到业主服务器需要调的开卡组件获取uid
  enjoyCardComponentNewService: `${alipayCardManagementUrl}/virtual/card/alipay/status/sync/data`, // 部署到业主服务器 开卡
  // 长安通定制化领卡接口
  changAnApplyCardMiddleware: `${alipayCardManagementUrl}/customer/open/account`, // 长安通的中间服务
  changAnEnjoyCardComponentMiddleware: `${alipayCardManagementUrl}/customer/virtual/card/alipay/status`, // 长安通中间服务的先享后付开卡
  // 烟台定制化领卡接口
  yanTaiApplyCardMiddleware: `${alipayCardManagementUrl}/user/info/exchange/card/info`, // 烟台的中间服务
  yanTaiEnjoyCardComponentMiddleware: `${alipayCardManagementUrl}/virtual/card/alipay/status/with/card` // 烟台中间服务的先享后付开卡
}
