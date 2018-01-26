<template>
  <div class="open-card">
    <img :src="openCard.bgImage" class="open-card-bg" />

    <!--中间协议和按钮-->
    <div class="body">
      <div class="body-info">
        <div class="card clearfix">
          <Card :cardImage="card.image"></Card>
        </div>

        <div class="open-card-protocol">
          <p class="open-card-protocol-text">
            <span @click="setCheckedProtocol"><i :class="checkedProtocol ? 'fa fa-check-circle check-active' : 'fa fa-circle-thin'" aria-hidden="true" class="check-icon"></i> 我已阅读并同意</span>
            <span v-for="(item, index) in openCard.popupList" @click="alipayLinkTo(item.href)" :key="index" class="protocol-link">{{ item.name }}</span>
          </p>

          <div class="open-card-item-tip">
            <cell-tip content="请先阅读并同意协议" v-show="protocolTipVisible"></cell-tip>
          </div>
        </div>

        <!--支付宝领卡按钮-->
        <div @click="applyCard(openCard.getCardHref)" class="open-card-btn">
          <zButton :btnVal="openCard.getCardBtnVal"></zButton>
        </div>

        <div class="desc-info">
          <div class="open-card-desc" v-for="(item, index) in openCard.cardDescription" :key="index">
            <div class="header">
              <em>一</em>
              <span v-html="item.header"></span>
              <em>一</em>
            </div>
            <div class="footer" v-html="item.footer"></div>
          </div>
        </div>

        <!--底部服务商-->
        <div class="open-card-footer">该服务由{{ global.cardName }}提供</div>
      </div>
    </div>

  </div>
</template>

<script>
  import Card from '../../components/Card/Card.vue'
  import zButton from '../../components/Button/Button.vue'
  import CellTip from '../../components/CellTip/CellTip.vue'
  import { alipayTransparent, alipayPushWindow } from '../../utils/alipayJsApi'

  export default {
    components: { Card, zButton, CellTip },
    computed: {
      openCard () { return global.threeConfig.openCard },
      card () { return global.threeConfig.card },
      global () { return global.threeConfig.global },
      query () { return this.$route.query }
    },
    data () {
      return {
        checkedProtocol: false, // 用户是否同意协议
        protocolTipVisible: false, // 是否显示气泡
        timer: null,
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        alipayTransparent('auto')
      },
      alipayLinkTo (href) {
        alipayPushWindow(href)
      },
      applyCard (href) { // 申请开卡
        this.checkedProtocol ?  alipayPushWindow(href) : this.toggleProtocolTip('show')
      },
      setCheckedProtocol () {
        this.checkedProtocol = !this.checkedProtocol
        if (this.checkedProtocol) this.toggleProtocolTip('hide')
      },
      toggleProtocolTip (type) { // 显示/关闭 气泡
        if (type === 'show') {
          clearTimeout(this.timer)
          this.protocolTipVisible = true
          this.timer = setTimeout(() => {
            this.protocolTipVisible = false
          }, 3000)
        } else {
          clearTimeout(this.timer)
          this.protocolTipVisible = false
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/flexCss/openCard.styl";
</style>
