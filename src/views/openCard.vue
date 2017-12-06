<template>
  <div>

    <div class="open-card-bg" :style="{ backgroundImage: `url(${openCard.bgImage})` }"></div>
    <!--卡片-->
    <div class="open-card-img">
      <Card :cardImage="card.image"></Card>
    </div>

   <!--支付宝领卡按钮-->
    <div class="open-card-btn">
      <a :href="openCard.getCardHref">
        <zButton :btnVal="openCard.getCardBtnVal"></zButton>
      </a>
    </div>

    <!--协议-->
    <div class="open-card-item">
      领取卡片并同意
      <em @click="popupVisible = true">协议</em>
    </div>

    <!--卡片说明-->
    <div class="open-card-desc" v-for="(item, index) in openCard.cardDescription">
      <div class="header">
        <em>一</em>
        <span v-html="item.header"></span>
        <em>一</em>
      </div>
      <div class="footer" v-html="item.footer"></div>
    </div>

    <!--底部服务商-->
    <div class="open-card-footer">
      该服务由{{ global.cardName }}提供
    </div>

    <!--底部弹窗-->
    <mt-popup position="bottom" v-model="popupVisible" class="open-card-popup">
      <ul>
        <li v-for="(item, index) in openCard.popupList" @click="alipayLinkTo(item)">
          <span>{{ item.name }}</span>
        </li>
        <li class="item-last" @click="popupVisible = false">取消</li>
      </ul>
    </mt-popup>

  </div>
</template>

<script>
  import Card from '../components/Card/Card.vue'
  import zButton from '../components/Button/Button.vue'
  import { alipayTransparent, alipayPushWindow } from '../utils/alipayJsApi'

  export default {
    components: { Card, zButton },
    computed: {
      openCard () { return global.threeConfig.openCard },
      card () { return global.threeConfig.card },
      global () { return global.threeConfig.global }
    },
    data () {
      return {
        popupVisible: false
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        alipayTransparent('auto')
      },
      alipayLinkTo ({ href }) {
        alipayPushWindow(href)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../assets/css/openCard.styl';
</style>
