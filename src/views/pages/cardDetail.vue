<template>
  <div class="card-detail">

    <div class="card-detail-info" v-if="visible">
      <!--公告-->
      <div class="card-detail-notice">
        <NoticeBar
          v-if="cardDetail.noticeConfig.visible"
          :content="cardDetail.noticeConfig.content"
          :width="cardDetail.noticeConfig.width">
        </NoticeBar>
      </div>

      <!--卡片-->
      <div class="card-detail-card-img" :style="{ backgroundImage: `url(${cardDetail.bgImage})` }">
        <div class="info">
          <Card :cardImage="card.image" :tipsImage="card.tipsImage"></Card>
        </div>
        <img src="https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/wave_bg.png" class="wave" />
      </div>

      <div class="body">
        <div class="card-detail-card-no">
          <img src="https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_no_icon.png" class="icon" />
          <span>{{ appId === enums.TIAN_JIN_APPID ? '票' : '卡' }}号 {{ cardInfo.alipayCardNo }}</span>
        </div>

        <ul class="card-detail-menu">
          <li class="menu-item"
              v-for="(item, index) in cardDetail.menuOptions"
              v-if="setMenuVisible(item, index)"
              @click="bindMenuList(item)">
            <div class="info">
              <div class="icon" v-if="item.icon">
                <img :src="item.icon" />
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
            <img :src="cardDetail.bannerConfig.isAlipayMon ? alipayMomBanner.src : cardDetail.bannerConfig.src" />
          </a>
        </div>
        <!--立即使用按钮-->
        <div class="card-detail-btn">
          <div class="info">
            <zButton :btnVal="cardDetail.useBtnVal" @click="userBusCode"></zButton>
          </div>
        </div>
      </div>

      <!--领卡成功-->
      <div class="card-detail-success" v-if="openCardSuccessVisible">
        <div class="main">
          <img :src="cardDetail.successAlertConfig.imgUrl" />
          <div class="btn-list">
            <span class="btn l" @click="openCardSuccessVisible = false">{{ cardDetail.successAlertConfig.leftBtnVal }}</span><span class="btn r" @click="bindUseSuccessAlertBtn(cardDetail.successAlertConfig.rightBtnVal)">{{ cardDetail.successAlertConfig.rightBtnVal }}</span>
          </div>
        </div>
      </div>
      <!--预加载退卡弹窗图片-->
      <img v-show="false" :src="cardDetail.cardCloseConfirm.image" style="width: 0;height: 0;opacity: 0; position: absolute;">
    </div>
  </div>
</template>


<script>
  import Card from '../../components/Card/Card.vue'
  import zButton from '../../components/Button/Button.vue'
  import MessageBox from '../../components/MessageBox/index'
  import NoticeBar from '../../components/Notice/Notice.vue'
  import { linkBusCode, checkNull, checkCardStatus, showToast, jsLink } from '../../utils/public'
  import { getCardInfo, applyCardClose, getAlipayMon } from '../../utils/http'
  import enums from '../../utils/enums'

  const { onWhite, whiteList, linkOldUrl } = global.threeConfig.global

  export default {
    components: { Card, zButton, NoticeBar },
    computed: {
      card () { return global.threeConfig.card },
      cardDetail () { return global.threeConfig.cardDetail },
      cardInfo () { return this.$store.state.alipayCardInfo },
      appId () { return global.threeConfig.alipayCardInfo.appId },
      enums () { return enums }
    },
    data () {
      return {
        visible: false, // 容器页
        openCardSuccessVisible: false, // 是否显示第一领卡成功弹窗
        rechargeVisible: false, // 是否显示储值卡功能
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
        /*
        * 由于业务 复杂 牵扯到支付宝 牵扯到公交白名单相对复杂
        * @params onWhite {string}
         * 'enjoyProd' ==> '先享后付全量环境' ||
         * 'rechargeProd' ==> '储值卡全量环境' ||
         * 'rechargeDev' ==> '储值预发环境' ||
         * 'oldRechargeDev' ==> '兼容旧先享后付的预发环境'
        * */
        switch (onWhite) {
          case 'enjoyProd':
            this.commonReady();
            break;
          case 'rechargeProd':
            this.rechargeProdType();
            break;
          case 'rechargeDev':
            this.devRechargeWhiteType();
            break;
          case 'oldRechargeDev':
            this.oldDevRechargeWhiteType();
            break;
          default:
            this.commonReady();
        }
      },
      oldDevRechargeWhiteType () { // 兼容老的储值灰度
        if (whiteList.indexOf(sessionStorage.getItem('userId')) === -1) this.$route.query.buscode ? jsLink('replace', linkOldUrl.buscode) : jsLink('replace', linkOldUrl.other) // 不在白名单
        else this.rechargeProdType()
      },
      devRechargeWhiteType () { // 自己代码储值灰度
        if (whiteList.indexOf(sessionStorage.getItem('userId')) === -1) { // 不在白名单渲染先享后付
          this.commonReady()
          return false
        }

        this.rechargeProdType() // 开启储值
      },
      rechargeProdType () { // 储值生产
        this.rechargeVisible = true
        this.commonReady()
      },
      commonReady () { // 默认渲染
        getCardInfo({ Vue: this,  cb: data => this.createdReady(data) })
      },
      createdReady (data) { // 渲染完毕卡详情执行的事件
        const { successUrl, buscode } = this.$route.query

        this.visible = true

        if (successUrl) {
          if (!sessionStorage.getItem('isAlert')) this.openCardSuccessVisible = true
          sessionStorage.setItem('isAlert', 'yes') // 防止重复弹出首次弹窗
        }
      },
      setMenuVisible (item, index) { // 菜单渲染事件
        const { link, visible } = item
        // 不开启的功能默认关闭
        if (visible) return false
        // 菜单储值功能白名单
        if (link === '/recharge' || link === '/balance' || link === '/rechargeAuto') return this.rechargeVisible
        // 其他菜单默认显示
        return true
      },
      bindMenuList (item) { // 菜单点击事件
        const { link, urlType } = item
        const { alipayCardStatus } = this.cardInfo
        const { okVal, cancelVal, content, image } = this.cardDetail.cardCloseConfirm
        /*
        * 充值如果是在退卡申请中拦截
        * */
        // if (link === '/recharge') {
        //   if (checkCardStatus(alipayCardStatus) === 'no') {
        //     showToast('您已申请退卡，暂时无法使用!')
        //     return false
        //   }
        // }
        /*
        * 退卡如果是退卡申请中不进行确认弹窗
        * */
        if (link === '/cardClose') {
          if (checkCardStatus(alipayCardStatus) === 'yes') {
            MessageBox({type: 'confirm', imgUrl: image, content: content, okVal: okVal, cancelVal: cancelVal, callback: (action) => {
                if (action === 'ok') applyCardClose({ status: alipayCardStatus, cb: () => this.$router.replace('/cardClose?first=yes') })
              }})
          } else this.$router.replace('/cardClose?first=no')
          return false
        }
        /*
        * 其他的菜单跳转逻辑 外部 使用原生 内部使用hash跳转
        * */
        urlType ? jsLink('href', link) : this.$router.push(link)
      },
      userBusCode () { // 去乘车码
        linkBusCode()
      },
      bindUseSuccessAlertBtn (val) { // 立即充值跳转充值 立即使用跳转乘车码
        this.openCardSuccessVisible = false
        val === '立即充值' ? this.$router.push('/recharge') : linkBusCode()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/flexCss/cardDetail.styl';
</style>
