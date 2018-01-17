<template>
  <div v-if="visible" class="card-close">

    <!--bg-->
    <div class="card-close-bg"></div>

    <div class="card-close-wrapper">
      <div class="card-close-wrapper-info">
        <!--上面内容渲染-->
        <div class="card-close-main">
          <div class="card-close-time">
            <img :src="cardClose.timeImage" v-if="!timeImgVisible" class="success-time" />
            <div class="waring-time" v-if="timeImgVisible">
              <span>!</span>
            </div>
          </div>

          <div class="card-close-content">
            <h3 v-if="bodyHeaderVisible">退卡申请已提交</h3>
            <!--说明-->
            <div class="card-close-content-item" v-html="contentVal" v-if="contentVal"></div>
            <!--储值尾部说明渲染-->
            <div class="card-close-content-item gray" v-html="rechargeTipVal" v-if="rechargeTipVal"></div>
          </div>
        </div>

        <!--底部按钮渲染-->
        <div class="card-close-btn-list">
          <div class="item" v-if="returnBtnVisible">
            <router-link to="cardDetail" replace>
              <z-button btnVal="完成"></z-button>
            </router-link>
          </div>
          <div class="item" v-if="rechargeRefundBtnVisible">
            <z-button btnVal="退款并销卡" @click="bindRefund"></z-button>
          </div>
          <div class="item" v-if="rechargeExtraBtnVisible">
            <z-button btnVal="立即补缴" @click="bindExtra"></z-button>
          </div>
          <div class="item" v-if="cancelBtnVisible">
            <z-button btnVal="撤回申请" type="gray" hollow @click="bindCancelCardClose"></z-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import zButton from '../../components/Button/Button.vue'
  import { checkNull, checkCardCloseTime, checkBalance, showToast } from '../../utils/public'
  import { getCardInfo, cancelCardClose, revokeCardClose, setRefund, showAlipayStore } from '../../utils/http'
  import { alipayExitApp } from '../../utils/alipayJsApi'

  const { rechargeUnitName } = global.threeConfig.alipayCardInfo

  export default {
    components: { zButton },
    computed: {
      cardInfo () { return this.$store.state.alipayCardInfo },
      cardClose () { return global.threeConfig.cardClose },
      first () { return this.$route.query.first }
    },
    data () {
      return {
        visible: true, // 容器页
        timeImgVisible: false, // 顶部时间图标切换
        bodyHeaderVisible: true, // 是否显示标题
        returnBtnVisible: false, // 返回卡详情按钮
        cancelBtnVisible: false, // 撤回申请按钮
        rechargeRefundBtnVisible: false, // 储值卡退款按钮
        rechargeExtraBtnVisible: false, // 储值卡补缴按钮
        contentVal: '', // 不一样情况不一样说明
        rechargeTipVal: '' // 充值退卡tip
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
          this.$router.replace('/Auth?redirectUrl=cardDetail')
          return false
        }
        // 获取当前卡信息
        getCardInfo({
          Vue: this,
          cb: data => {
            const { alipayCardData } = this.cardInfo
            if (alipayCardData === 0) this.checkEnjoy(data)
            else this.checkRecharge(data)
          }
        })
      },
      checkEnjoy (data) { // 先享后付逻辑
        // console.log('enjoy')
        this.cardCloseIngEdit()
      },
      checkRecharge (data) { // 储值逻辑
        // console.log('recharge')
        if (checkCardCloseTime(data.checkEndTime) === 0) this.cardCloseIngEdit() // 没有超过审核天数
        else this.checkRechargeConfigMoreDay()
      },
      checkRechargeConfigMoreDay () { // 超过了审核天数
        const { cashBalance } = this.cardInfo
        if (checkBalance(cashBalance) === '-') this.plusBalanceEdit(cashBalance) // 余额为负数
        else this.minusBalanceEdit(cashBalance) // 余额为正数
      },
      cardCloseIngEdit () { // 退卡中渲染
        this.contentVal = `我们将在${this.cardClose.day}工作日审核您的申请`
        this.returnBtnVisible = true
        this.cancelBtnVisible = this.first === 'yes' ? false : true
      },
      plusBalanceEdit (cashBalance) { // 充值退卡正数渲染
        // console.log(`用户余额负数`)
        this.timeImgVisible = true
        this.contentVal = `检测到您当前账户处于欠费状态<br />欠费<font color="#FC8653">${cashBalance}</font>${rechargeUnitName}`
        this.rechargeTipVal = `请先补缴后，才能退卡`
        this.rechargeExtraBtnVisible = true
        this.cancelBtnVisible = true
        this.bodyHeaderVisible = false
      },
      minusBalanceEdit (cashBalance) { // 充值退卡负数渲染
        // console.log(`用户余额正数或0`)
        this.timeImgVisible = true
        this.contentVal = `检测到您当前账户还有余额<br /><font color="#108EE9">${cashBalance}</font>${rechargeUnitName}`
        this.rechargeRefundBtnVisible = true
        this.cancelBtnVisible = true
        this.bodyHeaderVisible = false
      },
      bindCancelCardClose () { // 撤回退卡
        const { alipayCardStatus } = this.cardInfo
        cancelCardClose({
          status: alipayCardStatus,
          cb: () => {
            // 再同步一次卡信息
            getCardInfo({
              Vue: this,
              cb: data => {
                showToast(`撤回成功,您可以继续使用公交服务`)
                this.$router.replace('/cardDetail')
              }
            })
          }
        })
      },
      bindRefund () { // 退款
        const { alipayCardStatus, cashBalance } = this.cardInfo
        // 余额为0直接退卡
        if (cashBalance === 0 || cashBalance === '0') {
          revokeCardClose({
            status: alipayCardStatus,
            cb: () => {
              alert('退卡成功')
              alipayExitApp()
            }
          })
          return false
        }
        // 不为0进行退款
        setRefund({
          cb: () => {
            revokeCardClose({
              status: alipayCardStatus,
              cb: () => {
                alert('退款并退卡成功')
                alipayExitApp()
              }
            })
          }
        })
      },
      bindExtra () { // 补缴
        const { cashBalance } = this.cardInfo
        showAlipayStore({
          label: `退卡欠款补缴${-1 * cashBalance}`,
          RMB: -1 * cashBalance,
          syncCallBackUrl: `payResult/${sessionStorage.getItem('userId')}/extra`,
          cb: () => {}
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/flexCss/cardClose.styl';
</style>
