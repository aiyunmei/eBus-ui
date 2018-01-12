// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Popup } from 'mint-ui'

// 引入全局组件
import lazyLoad from 'vue-lazyload'

// 写入全局样式
import '@/assets/css/reset.css'

Vue.config.productionTip = false
Vue.component(Popup.name, Popup)
Vue.use(lazyLoad, {
  preLoad: 1, attempt: 2
})

/* eslint-disable no-new */
const $Vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

export default $Vue
