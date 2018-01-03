<template>
  <div v-if="visible">

    <div class="balance-bg"></div>

    <div class="balance-header" :style="{ backgroundImage: `url(${balance.headerImage})` }">
      <div class="item title">
        <span>余额账户</span>
      </div>
      <div class="item cashBalance">
        <h3>{{ cardInfo.cashBalance + rechargeUnitName }}</h3>
      </div>
      <div class="item flex">
        <Tag val="乘车8折" type="warning" class="item-tag"></Tag>
        <span>余额用于支付车费</span>
      </div>
    </div>

    <router-link to="recharge" tag="div" class="balance-footer">
      <div class="main">
        <div class="rmb">
          <i class="fa fa-rmb rmb-main"></i>
          立即充值
        </div>
        <i class="fa fa-angle-right arrow"></i>
      </div>
    </router-link>

  </div>
</template>

<script>
  import { checkNull, formatRMBYuanDecimal } from '../../utils/public'
  import { getCardInfo } from '../../utils/http'
  import Tag from '../../components/Tag/Tag.vue'

  export default {
    components: { Tag },
    computed: {
      balance () { return global.threeConfig.balance },
      cardInfo () { return this.$store.state.alipayCardInfo },
      rechargeUnitName () { return global.threeConfig.alipayCardInfo.rechargeUnitName }
    },
    mounted () {
      this.onReady()
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      onReady () {
        const { userId } = this.$route.query
        // 没有用户信息去授权
        if (checkNull(sessionStorage.getItem('userId')) === 0 && userId === undefined) {
          this.$router.replace('/Auth?redirectUrl=recharge')
          return false
        }
        // 外部进入先缓存uid
        if (userId) sessionStorage.setItem('userId', userId)
        // 查询卡信息
        getCardInfo({
          Vue: this,
          cb: data => {
            this.visible = true
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/balance.styl';
</style>
