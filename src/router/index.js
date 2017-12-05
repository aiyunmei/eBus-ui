import Vue from 'vue'
import Router from 'vue-router'

import Auth from '../views/Auth.vue'
import openCard from '../views/openCard.vue'
import openCardEnd from '../views/openCardEnd.vue'
import cardDetail from '../views/cardDetail.vue'
import cardClose from '../views/cardClose.vue'
import recharge from '../views/recharge.vue'
import balance from '../views/balance.vue'
import rechargeLog from '../views/rechargeLog.vue'
import payResult from '../views/payResult.vue'
import openLine from '../views/openLine.vue'
import help from '../views/help.vue'

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
    { path: '/payResult/:userId/:type', component: payResult }, // 支付结果
    { path: '/openLine', component: openLine }, // 已开通线路
    { path: '/help', component: help } // 使用帮助
  ]
})
