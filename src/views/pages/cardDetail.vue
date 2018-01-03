<template>
  <div class="card-detail" v-if="visible">

    <!--公告-->
    <div class="card-detail-notice">
      <NoticeBar
        v-if="cardDetail.noticeConfig.visible"
        :content="cardDetail.noticeConfig.content"
        :width="cardDetail.noticeConfig.width">
      </NoticeBar>
    </div>

    <!--卡片-->
    <div class="card-detail-card-img" v-lazy:background-image="cardDetail.bgImage">
      <div class="info">
        <Card :cardImage="card.image" :tipsImage="card.tipsImage"></Card>
      </div>
      <img src="https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/wave_bg.png" class="wave" />
    </div>

    <div class="body">
      <div class="card-detail-card-no">
        <img src="https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_no_icon.png" class="icon" />
        <span>卡号 {{ cardInfo.alipayCardNo }}</span>
      </div>
      <ul class="card-detail-menu">
        <li class="menu-item" v-for="(item, index) in cardDetail.menuOptions" v-if="!item.visible" @click="bindMenuList(item)">
          <div class="info">
            <div class="icon" v-if="item.icon">
              <img v-lazy="item.icon" />
            </div>
            <div class="label" v-if="item.label">{{ item.label }}</div>
          </div>
        </li>
      </ul>
    </div>



    <div class="footer">

      <!--广告位-->
      <div class="card-detail-banner" v-if="cardDetail.bannerConfig.visible">
        <a :href="cardDetail.bannerConfig.isAlipayMon ? alipayMomBanner.href : cardDetail.bannerConfig.href" target="_blank">
          <img v-lazy="cardDetail.bannerConfig.isAlipayMon ? alipayMomBanner.src : cardDetail.bannerConfig.src" />
        </a>
      </div>

     <!--立即使用按钮-->
      <div class="card-detail-btn">
        <div class="info">
          <a :href="useBtnHref" target="_blank">
            <zButton :btnVal="cardDetail.useBtnVal"></zButton>
          </a>
        </div>
      </div>
    </div>

    <!--领卡成功-->
    <div class="card-detail-success" v-if="openCardSuccessVisible">
      <div class="main">
        <img v-lazy="cardDetail.successAlertConfig.imgUrl" />
        <div class="btn-list">
          <span class="btn l" @click="openCardSuccessVisible = false">{{ cardDetail.successAlertConfig.leftBtnVal }}</span><span class="btn r" @click="bindUseSuccessAlertBtn(cardDetail.successAlertConfig.rightBtnVal)">{{ cardDetail.successAlertConfig.rightBtnVal }}</span>
        </div>
      </div>
    </div>

    <!--预加载退卡弹窗图片-->
    <img v-show="false" :src="cardDetail.cardCloseConfirm.image" style="width: 0;height: 0;opacity: 0; position: absolute;">


  </div>
</template>


<script>
  import Card from '../../components/Card/Card.vue'
  import zButton from '../../components/Button/Button.vue'
  import MessageBox from '../../components/MessageBox/index'
  import NoticeBar from '../../components/Notice/Notice.vue'
  import { checkNull, checkCardStatus, showToast, jsLink } from '../../utils/public'
  import { getCardInfo, applyCardClose, getAlipayMon } from '../../utils/http'

  const { onWhite, whiteList, linkOldUrl } = global.threeConfig.global
  const { busCode } = global.threeConfig.alipayCardInfo

  export default {
    components: { Card, zButton, NoticeBar },
    computed: {
      card () { return global.threeConfig.card },
      cardDetail () { return global.threeConfig.cardDetail },
      cardInfo () { return this.$store.state.alipayCardInfo }
    },
    data () {
      return {
        visible: false, // 容器页
        openCardSuccessVisible: false, // 是否显示第一领卡成功弹窗
        useBtnHref: '', // 乘车码链接
        alipayMomBanner: { // 阿里妈妈接入信息
          href: null,
          src: null
        }
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        const { userId, successUrl } = this.$route.query

        // 没有用户信息去授权
        if (checkNull(sessionStorage.getItem('userId')) === 0 && userId === undefined) {
          this.$router.replace('/Auth?redirectUrl=cardDetail')
          return false
        }

        // 外部进入先缓存uid
        if (userId) sessionStorage.setItem('userId', userId)

        // 写入乘车码链接
        if (successUrl) this.useBtnHref = successUrl
        else this.useBtnHref = busCode

        // 接入阿里妈妈
        if (this.cardDetail.bannerConfig.isAlipayMon) {
          getAlipayMon({
            adPid: this.cardDetail.bannerConfig.adPid,
            cb: (href, src) => {
              this.alipayMomBanner.href = href
              this.alipayMomBanner.src = src
            }
          })
        }

        // 是否打开了灰度
        if (onWhite) this.openWhite()
        else this.commonReady()
      },
      openWhite () {
        if (whiteList.indexOf(sessionStorage.getItem('userId')) === -1) this.outWhite() // 不在白名单执行事件
        else this.commonReady() // 在白名单执行事件
      },
      outWhite () {
        if (this.$route.query.buscode !== undefined) jsLink('replace', linkOldUrl.buscode)
        else jsLink('replace', linkOldUrl.other)
      },
      commonReady () { // 默认渲染
        const { successUrl, buscode } = this.$route.query
        getCardInfo({
          Vue: this,
          cb: data => {
            this.visible = true
            if (successUrl) {
              if (!sessionStorage.getItem('isAlert')) this.openCardSuccessVisible = true
              sessionStorage.setItem('isAlert', 'yes') // 防止重复弹出首次弹窗
            }
          }
        })
      },
      bindMenuList (item) {
        const { link, urlType } = item
        const { alipayCardStatus } = this.cardInfo
        const { okVal, cancelVal, content, image } = this.cardDetail.cardCloseConfirm

        // 充值
        if (link === '/recharge') {
          if (checkCardStatus(alipayCardStatus) === 'no') {
            showToast('您已申请退卡，暂时无法使用!')
            return false
          }
        }

        // 退卡
        if (link === '/cardClose') {
          if (checkCardStatus(alipayCardStatus) === 'yes') {
            MessageBox({type: 'confirm', imgUrl: image, content: content, okVal: okVal, cancelVal: cancelVal, callback: (action) => {
              if (action === 'ok') {
                applyCardClose({
                  status: alipayCardStatus,
                  cb: () => { this.$router.replace('/cardClose?first=yes') }
                })
              }
            }})
          } else {
            this.$router.replace('/cardClose?first=no')
          }
          return false
        }

        // 其他
        urlType ? jsLink('href', link) : this.$router.push(link)
      },
      bindUseSuccessAlertBtn (val) {
        this.openCardSuccessVisible = false
        val === '立即充值' ? this.$router.push('/recharge') : jsLink('href', decodeURIComponent(this.$route.query.successUrl) ? decodeURIComponent(this.$route.query.successUrl) : busCode)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/cardDetail.styl';
</style>
