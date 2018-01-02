<template>
  <div>

    <div class="pay-result-bg"></div>

    <div class="pay-result-main">

      <div class="logo">
        <img :src="payResult.alipayLogoImage">
      </div>

      <div class="content">
        <h3>{{ payType === 'recharge' ? '充值' : '补缴' }}成功</h3>
        <div class="amount">{{ amount }}元</div>
        <div class="tips" v-if="payType === 'recharge' ? true : false">如未到账，请耐心等待一会</div>
      </div>

      <div class="footer" v-if="payType === 'recharge' ? true : false">
        <div class="main">
          <div class="l">
            <i class="fa fa-rmb money"></i>
            <h3>自动充值<br /><span>设置自动充值，无需担心余额不足</span></h3>
          </div>
          <div class="r">
            <zButton btnVal="去设置" hollow class="btn" @click="linkTo('rechargeAuto')"></zButton>
            <i class="fa fa-angle-right arrow"></i>
          </div>
        </div>
      </div>

    </div>

    <div class="return" v-if="payType === 'recharge' ? true : false">
      <zButton btnVal="完成" @click="bindReturn"></zButton>
    </div>

  </div>
</template>

<script>
  import zButton from '../components/Button/Button.vue'
  import { showToast } from '../utils/public'
  import { revokeCardClose } from '../utils/http'
  import { alipayExitApp } from '../utils/alipayJsApi'

  export default {
    components: { zButton },
    computed: {
      payResult () { return global.threeConfig.payResult }
    },
    data () {
      return {
        payType: null,
        amount: null
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        const { userId, type } = this.$route.params
        const { total_amount } = this.$route.query
        this.payType = type
        this.amount = total_amount
        sessionStorage.setItem('userId', userId)
        if (type === 'extra') {
          revokeCardClose({
            status: 8,
            cb: () => {
              alert('退卡成功')
              alipayExitApp()
            }
          })
        }
      },
      bindReturn () {
        this.$router.replace('/cardDetail')
      },
      linkTo (path) {
        showToast('建设中')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/payResult.styl';
</style>
