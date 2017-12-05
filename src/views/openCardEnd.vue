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
  import { toHash } from '../utils/public'
  import { getCardComponentUid, getEnjoyCardComponent } from '../utils/http'

  const { cardType, scene, subScene, openCardAction, openCardSource } = global.threeConfig.alipayCardInfo
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
    },
    methods: {
      onReady () {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (userInfo) {
          const { auth_code, request_id } = userInfo
          localStorage.removeItem('userInfo')
          getCardComponentUid({
            params: { auth_code: auth_code, request_id: request_id },
            cb: (msg, data) => {
              if (msg && msg.code === '20000') {
                sessionStorage.setItem('userId', data.userId)
                this.openCard(data.userId)
              } else {
                this.visible = true
              }
            }
          })
        }
        else this.$router.push('/openCard')
      },
      openCard (uid) {
        getEnjoyCardComponent({
          userId: uid,
          cb: (msg, data) => {
            if (msg && msg.code === '20000') {
              const { cardNo } = data
              sessionStorage.setItem('alipayCardNo', cardNo)
              this.$store.dispatch('setAlipayCardInfo', { item: 'alipayCardNo', data: cardNo })
              const getAlipayBusCodeParams = { cardType: cardType, cardNo: cardNo, scene: scene, subScene: subScene, source: openCardSource, action: openCardAction }
              this.$router.replace('/cardDetail?alipayCardNo=' + cardNo + '&successUrl=' + encodeURIComponent(alipayTransitCardEntry + toHash(getAlipayBusCodeParams)))
            } else {
              this.visible = true
              this.tryAgainVisible = true
            }
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/openCardEnd.styl';
</style>
