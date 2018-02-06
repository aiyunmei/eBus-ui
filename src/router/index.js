import Vue from 'vue'
import Router from 'vue-router'

import {
  Auth,
  openCard,
  openCardEnd,
  cardDetail,
  cardClose,
  recharge,
  balance,
  rechargeLog,
  rechargeAuto,
  payResult,
  openLine,
  help,
  protocol,
  lineInfo
} from '../views'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: `/openCard` },
    { path: '/Auth', component: Auth }, // 授权
    { path: '/openCard', component: openCard }, // 领卡页
    { path: '/openCardEnd', component: openCardEnd }, // 领卡结果页
    { path: '/cardDetail', component: cardDetail }, // 卡片详情
    { path: '/cardClose', component: cardClose }, // 退卡
    { path: '/recharge', component: recharge }, // 充值
    { path: '/balance', component: balance }, // 余额
    { path: '/rechargeLog', component: rechargeLog }, // 充值记录
    { path: '/rechargeAuto', component: rechargeAuto }, // 自动充值
    { path: '/payResult/:userId/:type', component: payResult }, // 支付结果
    { path: '/openLine', component: openLine }, // 已开通线路
    { path: '/help', component: help }, // 使用帮助
    { path: '/protocol', component: protocol }, // 协议
    { path: '/lineInfo', component: lineInfo } // 线路详情
  ]
})
