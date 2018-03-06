<template>
  <div class="recharge">

    <div class="recharge-info" v-if="visible">
      <div class="recharge-header" :style="{ backgroundImage: `url(${recharge.headerImage})` }">
        <div class="item cardNo">
          <span>卡号</span>
          <span>{{ cardInfo.alipayCardNo }}</span>
        </div>
        <Tag :val="global.tipLabel" type="warning" class="item tips" size="mini"></Tag>
      </div>

      <div class="recharge-item">请选择充值金额</div>

      <ul class="recharge-list">
        <li class="item" v-for="(item, index) in recharge.list">
          <div class="item-main" @click="goRecharge(item, index)" :class="[ index === rechargeListIndex ? 'on' : '' ]">
            <div class="label">{{ item.label }}</div>
            <div class="value">售价:{{ item.value + rechargeUnitName }}</div>
            <div class="tips" v-if="item.tipItem.label" :style="{ backgroundImage: `url(${item.tipItem.imgUrl})` }">
              <span class="tips-wrapper">{{ item.tipItem.label }}</span>
            </div>
          </div>
        </li>
      </ul>

      <div class="recharge-footer">
        <div class="item">
          <span @click="linkTo('/rechargeAuto')">自动充值</span>
          <em>|</em>
          <span @click="linkTo('/rechargeLog')">充值记录</span>
        </div>
        <div class="item check" @click="rechargeProtocolVisible = true">
          <i class="fa fa-check-square-o"></i>
          <span>协议内容</span>
        </div>
      </div>

      <!--充值协议-->
      <transition name="recharge-protocol">
        <div class="recharge-protocol" v-show="rechargeProtocolVisible">
          <div class="main">
            <div class="content" v-html="recharge.rechargeProtocol"></div>
            <div class="submit">
              <zButton btnVal="我知道了" type="transparent" class="btn" @click="rechargeProtocolVisible = false"></zButton>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
  import Tag from '../../components/Tag/Tag.vue'
  import zButton from '../../components/Button/Button'
  import { checkNull, showToast, isCardDetailMenu } from '../../utils/public'
  import { getCardInfo, showAlipayStore } from '../../utils/http'

  export default {
    components: { Tag, zButton },
    computed: {
      cardInfo () { return this.$store.state.alipayCardInfo },
      recharge () { return global.threeConfig.recharge },
      global () { return global.threeConfig.global },
      rechargeUnitName () { return global.threeConfig.alipayCardInfo.rechargeUnitName }
    },
    data () {
      return {
        visible: false,
        rechargeListIndex: null,
        rechargeProtocolVisible: false
      }
    },
    mounted () {
      this.onReady()
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
        getCardInfo({ cb: data => this.visible = true })
      },
      goRecharge (item, index) {
        this.rechargeListIndex = index
        const { cashBalance } = this.cardInfo
        // 超过金额不让充值
        if (cashBalance >= (this.recharge.RMBThreshold / 100) ) {
          showToast(`您的余额已达上限,暂不能充值`)
          return false
        }
        // 唤起收银台
        showAlipayStore({
          label: `充值${item.label}`,
          RMB: item.value,
          syncCallBackUrl: `payResult/${sessionStorage.getItem('userId')}/recharge`,
          cb: () => {}
        })
      },
      linkTo (path) {
        if (path === '/rechargeAuto') isCardDetailMenu(path) ? this.$router.push(path) : showToast('建设中')
        else this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/flexCss/recharge.styl';
</style>
