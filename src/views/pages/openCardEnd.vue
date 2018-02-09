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
  import enums from '../../utils/enums'
  import {
    getCardComponentUid,
    getEnjoyCardComponent,
    getCardComponentUidNewService,
    getEnjoyCardComponentNewService,
    getCardComponentUidMore,
    changAnApplyCardMiddleware,
    getChangAnEnjoyCardComponentMiddleware
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
        tryAgainVisible: false
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
          case enums.TIAN_JIN_APPID: // 天津
            this.getAlipayUidNewService(auth_code, request_id);
            break;
          case enums.CHANG_AN_APPID: // 长安通
            this.changAnGetAlipayUid(auth_code, request_id)
            break;
          default: // 默认流程
            this.getAlipayUid(auth_code, request_id)
        }
        // 判断执行流程移除缓存的auth_code
        localStorage.removeItem('userInfo')
      },
      /*
      * 非定制化正常流程
      * */
      getAlipayUid (auth_code, request_id) { // 获取支付宝uid
        getCardComponentUid({ auth_code: auth_code, request_id: request_id, Vue: this, cb: data => this.normaEnjoylApplyCard(data.userId) })
      },
      normaEnjoylApplyCard (userId) { // 正常先享后付领卡
        getEnjoyCardComponent({ userId: userId, cb: (msg, data) => {
            if (msg && msg.code === enums.SUCCESS_CODE) this.successOpenCard(data.cardNo)
            else this.visible = true
          }
        })
      },
      /*
      * 业主服务器流程
      * */
      getAlipayUidNewService (auth_code, request_id) { // 获取支付宝uid 业主服务器端
        getCardComponentUidNewService({ auth_code: auth_code, request_id: request_id, Vue: this, cb: data => this.normaEnjoylApplyCardNewService(data.userId) })
      },
      normaEnjoylApplyCardNewService (userId) { // 正常先享后付领卡 业主服务端
        getEnjoyCardComponentNewService({ userId: userId, cb: (msg, data) => {
            if (msg && msg.code === enums.SUCCESS_CODE) this.successOpenCard(data.cardNo)
            else this.visible = true
          }
        })
      },
      /*
      * 长安通的领卡逻辑
      * */
      changAnGetAlipayUid (auth_code, request_id) { // 获取更多的用户信息
        getCardComponentUidMore({ auth_code: auth_code, request_id: request_id, Vue: this, cb: data => this.changAnGetApplyCardMiddleware(data) })
      },
      changAnGetApplyCardMiddleware ({ mobilePhone, certNo, userName, userId }) { // 中间数据转换服务
        changAnApplyCardMiddleware({ mobile: mobilePhone, identityCardNo: certNo, alipayUserName: userName, alipayUserId: userId, cb: data => this.changAnGetCardMiddlewareOpenCard(data) })
      },
      changAnGetCardMiddlewareOpenCard (data) { // 中间数据服务的长安通开卡
        getChangAnEnjoyCardComponentMiddleware({ middleWareData: data, cb: (msg, data) => {
            if (msg && msg.code === enums.SUCCESS_CODE) this.successOpenCard(data.cardNo)
            else this.visible = true
          }
        })
      },
      /*
      * 正常领卡成功执行事件
      * */
      successOpenCard (cardNo) {
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
