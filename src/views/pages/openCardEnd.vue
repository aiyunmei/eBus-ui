<template>
  <div v-if="visible">
    <!--系统繁忙-->
    <div class="open-card-end-busy">
      <img :src="openCardEnd.busyImage" class="busy-img" />
      <div class="tips">系统繁忙,请稍后再试</div>
    </div>
   <!--重试-->
    <div class="try-again" v-if="tryAgainVisible"><zButton btnVal="立即重试" hollow></zButton></div>
  </div>
</template>

<script>
  import zButton from '../../components/Button/Button.vue'
  import { checkNull, toHash } from '../../utils/public'
  import {
    getCardComponentUid,
    getEnjoyCardComponent,
    getCardComponentUidNewService,
    getEnjoyCardComponentNewService,
  } from '../../utils/http'
  import { alipayExitApp } from '../../utils/alipayJsApi'

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
        tryAgainVisible: false,
        successCode: '20000'
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        // 没有auth_code 去开卡
        if (checkNull(localStorage.getItem('userInfo')) === 0) {
          this.$router.replace('/openCard')
          return false
        }
        const { auth_code, request_id } = JSON.parse(localStorage.getItem('userInfo'))
        // 判断商户是否是正常领卡还是定制化领卡
        switch (appId) {
          case '2017101909389604':
            this.getAlipayUidNewService(auth_code, request_id);
            break;
          default: // 默认流程
            this.getAlipayUid(auth_code, request_id)
        }
        // 判断执行流程移除缓存的auth_code
        localStorage.removeItem('userInfo')
      },
      getAlipayUid (auth_code, request_id) { // 获取支付宝uid
        getCardComponentUid({ auth_code: auth_code, request_id: request_id, Vue: this, cb: data => this.normaEnjoylApplyCard(data.userId) })
      },
      normaEnjoylApplyCard (userId) { // 正常先享后付领卡
        getEnjoyCardComponent({ userId: userId, cb: (msg, data) => {
            if (msg && msg.code === this.successCode) this.successOpenCard(data.cardNo)
            else this.visible = true
          }
        })
      },
      getAlipayUidNewService (auth_code, request_id) { // 获取支付宝uid 业主服务器端
        getCardComponentUidNewService({ auth_code: auth_code, request_id: request_id, Vue: this, cb: data => this.normaEnjoylApplyCardNewService(data.userId) })
      },
      normaEnjoylApplyCardNewService (userId) { // 正常先享后付领卡 业主服务端
        getEnjoyCardComponentNewService({ userId: userId, cb: (msg, data) => {
            if (msg && msg.code === this.successCode) this.successOpenCard(data.cardNo)
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
  @import '../../assets/flexCss/openCardEnd.styl';
</style>
