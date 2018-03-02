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
      <zButton :btnVal="applyRechargeLabel[btnType]" class="footer-btn" @click="applyRechargeAuto(btnType)"></zButton>
    </div>

    <mt-popup position="bottom" v-model="thresholdPopupVisible" class="popup-item">
      <div class="slot-header">
        <!--<div class="slot-header-item" @click="thresholdPopupVisible = false">取消</div>-->
        <div class="slot-header-item">金额少于</div>
        <!--<div class="slot-header-item slot-ok">确认</div>-->
      </div>
      <div class="slot-body">
        <picker :slots="thresholdSlots" @change="thresholdSlotValueChange" valueKey="label"></picker>
      </div>
    </mt-popup>

    <mt-popup position="bottom" v-model="rechargePopupVisible" class="popup-item">
      <div class="slot-header">
        <!--<div class="slot-header-item" @click="rechargePopupVisible = false">取消</div>-->
        <div class="slot-header-item">充值金额</div>
        <!--<div class="slot-header-item slot-ok">确认</div>-->
      </div>
      <div class="slot-body">
        <picker :slots="rechargeSlots" @change="rechargeSlotValueChange" valueKey="label"></picker>
      </div>
    </mt-popup>

  </div>
</template>

<script>
  import Card from '../../components/Card/Card'
  import zButton from '../../components/Button/Button'
  import Picker from '../../components/Picker/Picker'
  import { MessageBox } from 'mint-ui'
  import {checkNull, showToast} from '../../utils/public'
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
        thresholdAmount: null, // 阈值默认展示 金额
        rechargeAmount: null, // 充值金额默认展示 金额
        btnType: 'apply',
        applyRechargeLabel: { 'apply': '确认开通', 'cancel': '取消自动充值' },
        thresholdPopupVisible: false, // 阈值
        rechargePopupVisible: false, // 充值金额弹窗
        thresholdSlots: [{ // 阈值 pick 配置
          flex: 2,
          defaultIndex: 0,
          values: [
            {label: '1元', value: 1},
            {label: '20元', value: 20},
            {label: '30元', value: 30},
            {label: '40元', value: 40},
            {label: '50元', value: 50},
            {label: '100元', value: 100}
          ],
          className: 'slot-item',
          textAlign: 'center',
        }],
        rechargeSlots: [{ // 充值 pick 配置
          flex: 2,
          defaultIndex: 0,
          values: [
            {label: '0.05元', value: 0.05},
            {label: '20元', value: 20},
            {label: '30元', value: 30},
            {label: '40元', value: 40},
            {label: '50元', value: 50},
            {label: '100元', value: 100}
          ],
          className: 'slot-item',
          textAlign: 'center',
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
        getCardInfo({ Vue: this, cb: data => this.visible = true })
      },
      rechargeSlotValueChange (picker, values) { //  充值变化
        this.rechargeAmount = values[0].value
      },
      thresholdSlotValueChange (picker, values) { // 阈值变化
        this.thresholdAmount = values[0].value
      },
      setThresholdAmount () { // 设置 金额阈值
      },
      setRechargeAmount () { // 设置 充值金额
      },
      applyRechargeAuto (type) { // apply update cancel 申请 编辑 取消
        if (type === 'apply') this.doRechargeAutoApply()
        else if (type === 'cancel') this.doCancelRechargeAuto()
      },
      doRechargeAutoApply () { // 执行 自动充值
        MessageBox.confirm('确定执行此操作?').then(action => {
          showToast('开通成功')
          this.btnType = 'cancel'
        }).catch(() => {})
      },
      doCancelRechargeAuto () { // 执行 取消自动充值
        MessageBox.confirm('确定执行此操作?').then(action => {
          showToast('取消成功')
          this.btnType = 'apply'
        }).catch(() => {})
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../assets/flexCss/rechargeAuto.styl";
</style>
