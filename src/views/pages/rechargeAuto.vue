<template>
  <div class="recharge-auto" v-if="visible">

    <!--卡片-->
    <div class="card-info">
      <Card :cardImage="card.image"></Card>
    </div>

    <!--pick 按钮-->
    <ul class="card-list">
      <li class="card-list-item">
        <div class="card-list-label">卡号</div>
        <div class="card-list-value">{{ cardInfo.alipayCardNo }}</div>
      </li>
      <li class="card-list-item" @click="thresholdPopupVisible = true">
        <div class="card-list-label">金额少于</div>
        <div class="card-list-value">
          {{ thresholdAmount }}{{ alipayCardInfo.rechargeUnitName }}
          <i class="fa fa-angle-right arrow" aria-hidden="true"></i>
        </div>
      </li>
      <li class="card-list-item" @click="rechargePopupVisible = true">
        <div class="card-list-label">充值金额</div>
        <div class="card-list-value">
          {{ rechargeAmount }}{{ alipayCardInfo.rechargeUnitName }}
          <i class="fa fa-angle-right arrow" aria-hidden="true"></i>
        </div>
      </li>
    </ul>

    <!--底部按钮-->
    <div class="footer">
      <zButton :btnVal="btnVal" class="footer-btn" @click="applyRechargeAuto(applyRechargeLabel[btnVal])"></zButton>
    </div>

    <mt-popup position="bottom" v-model="thresholdPopupVisible" class="popup-item">
      <div class="slot-header">
        <div class="slot-header-item" @click="thresholdPopupVisible = false">取消</div>
        <div class="slot-header-item slot-ok">确认</div>
      </div>
      <div class="slot-body">
        <picker :slots="thresholdSlots" @change="slotValueChange"></picker>
      </div>
    </mt-popup>

    <mt-popup position="bottom" v-model="rechargePopupVisible" class="popup-item">
      <div class="slot-header">
        <div class="slot-header-item" @click="rechargePopupVisible = false">取消</div>
        <div class="slot-header-item slot-ok">确认</div>
      </div>
      <div class="slot-body">
        <picker :slots="rechargeSlots" @change="slotValueChange"></picker>
      </div>
    </mt-popup>

  </div>
</template>

<script>
  import Card from '../../components/Card/Card'
  import zButton from '../../components/Button/Button'
  import Picker from '../../components/Picker/Picker'
  import { checkNull } from '../../utils/public'
  import { getCardInfo } from '../../utils/http'

  export default {
    components: { Card, zButton, Picker },
    computed: {
      card () { return global.threeConfig.card },
      alipayCardInfo () { return global.threeConfig.alipayCardInfo },
      cardInfo () { return this.$store.state.alipayCardInfo }
    },
    data () {
      return {
        visible: false,
        thresholdAmount: 10,
        rechargeAmount: 20,
        btnVal: '确认开通',
        applyRechargeLabel: { '确认开通': 'apply', '编辑': 'update' },
        thresholdPopupVisible: false,
        rechargePopupVisible: false,
        thresholdSlots: [{
          flex: 2,
          values: [10, 20, 30, 40, 50],
          className: 'slot-item',
          textAlign: 'center'
        }],
        rechargeSlots: [{
          flex: 2,
          values: [10, 20, 30, 40, 50],
          className: 'slot-item',
          textAlign: 'center'
        }]
      }
    },
    mounted () {
      this.onReady()
    },
    methods: {
      onReady () {
        const { userId } = this
        // 没有用户信息去授权
        if (checkNull(sessionStorage.getItem('userId')) === 0 && userId === undefined) {
          this.$router.replace('/Auth?redirectUrl=cardDetail')
          return false
        }
        // 外部进入先缓存uid
        if (userId) sessionStorage.setItem('userId', userId)
        // 获取卡信息
        getCardInfo({
          Vue: this,
          cb: data => {
            this.visible = true
          }
        })
      },
      slotValueChange (picker, values) { // picker 监听
      },
      setThresholdAmount () { // 设置 金额阈值
      },
      setRechargeAmount () { // 设置 充值金额
      },
      applyRechargeAuto (type) { // 开通 / 编辑 自动充值
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../assets/flexCss/rechargeAuto.styl";
</style>
