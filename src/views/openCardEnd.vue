<template>
  <div v-if="visible">

    <!--系统繁忙-->
    <div class="open-card-end-busy">
      <img :src="openCardEnd.busyImage" class="busy-img" />
      <div class="tips">
        系统繁忙,请稍后再试
      </div>
    </div>
   <!--重试-->
    <div class="try-again" v-if="tryAgainVisible">
      <zButton btnVal="立即重试" hollow></zButton>
    </div>

  </div>
</template>

<script>
  import zButton from '../components/Button/Button.vue'
  import { checkNull, toHash } from '../utils/public'
  import {
    getCardComponentUid,
    getEnjoyCardComponent,
    getMoreCardComponentUid,
    getYanTaiCardNo,
    getYanTaiRechargeCardComponent
  } from '../utils/http'
  import { alipayExitApp } from '../utils/alipayJsApi'

  const { appId, cardType, scene, subScene, openCardAction, openCardSource } = global.threeConfig.alipayCardInfo
  const { alipayTransitCardEntry } = global.threeConfig.api

  export default {
    components: { zButton },
    computed: {
      openCardEnd () { return global.threeConfig.openCardEnd }
    },
    data () {
      return {
        visible: false,
        tryAgainVisible: false
      }
    },
    mounted () {
      this.onReady()
      // this.normaEnjoylApplyCard(sessionStorage.getItem('userId'))
    },
    methods: {
      onReady () {
        // 没有auth_code 去开卡
        if (checkNull(localStorage.getItem('userInfo')) === 0) {
          this.$router.replace('/openCard')
          return false
        }
        const { auth_code, request_id  } = JSON.parse(localStorage.getItem('userInfo'))
        // 判断商户是否是正常领卡还是定制化领卡
        switch (appId) {
          case '2017121300671681': // 烟台领卡流程
            this.yanTaiGetMoreAlipayUid(auth_code, request_id)
            break;
          default: // 默认流程
            this.getAlipayUid(auth_code, request_id)
        }
        // 判断执行流程移除缓存的auth_code
        localStorage.removeItem('userInfo')
      },
      getAlipayUid (auth_code, request_id) { // 获取支付宝uid
        getCardComponentUid({
          auth_code: auth_code,
          request_id: request_id,
          Vue: this,
          cb: data => {
            sessionStorage.setItem('userId', data.userId)
            // 获取到uid去领卡
            this.normaEnjoylApplyCard(data.userId)
          }
        })
      },
      normaEnjoylApplyCard (userId) { // 正常先享后付领卡
        getEnjoyCardComponent({
          userId: userId,
          cb: (msg, data) => {
            if (msg && msg.code === '20000') this.successOpenCard(data.cardNo)
            else this.visible = true
          }
        })
      },
      yanTaiGetMoreAlipayUid (auth_code, request_id) { // 获取更多用户信息的uid 手机 身份证 电话
        getMoreCardComponentUid({
          auth_code: auth_code,
          request_id: request_id,
          Vue: this,
          cb: data1 => {
            const { userId, certNo, userName, mobilePhone } = data1
            sessionStorage.setItem('userId', userId)
            getYanTaiCardNo({
              userId: userId,
              certNo: certNo,
              userName: userName,
              mobilePhone: mobilePhone,
              Vue: this,
              cb: data2 => {
                this.yanTaiRechargeApplyCard(userId, data2.alipayCardNo)
              }
            })
          }
        })
      },
      yanTaiRechargeApplyCard (userId, cardNo) { // 烟台领取储值卡
        getYanTaiRechargeCardComponent({
          userId: userId,
          cardNo: cardNo,
          cb: (msg, data) => {
            if (msg && msg.code === '20000') this.successOpenCard(data.cardNo)
            else this.visible = true
          }
        })
      },
      successOpenCard (cardNo) { // 正常领卡成功流程
        const getAlipayBusCodeParams = { cardType: cardType, cardNo: cardNo, scene: scene, subScene: subScene, source: openCardSource, action: openCardAction }
        this.$store.dispatch('setAlipayCardInfo', { item: 'alipayCardNo', data: cardNo })
        this.$router.replace('/cardDetail?alipayCardNo=' + cardNo + '&successUrl=' + encodeURIComponent(alipayTransitCardEntry + toHash(getAlipayBusCodeParams)))
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/openCardEnd.styl';
</style>
