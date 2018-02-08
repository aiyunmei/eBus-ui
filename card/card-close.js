new Vue({
  el: '#app',
  data: function () {
    return {
      loading: false,
      selectType: true, // true 开卡退卡 false 退款
      openCardDisabled: true, // 开卡按钮控制
      cardCloseDisabled: true, // 退卡按钮控制
      selectOptions: [
        { label: '小码测试卡', appId: '2017072107839707', cardType: 'TESTXMLC', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '420100' },
        // 旧
        { label: '南昌退卡', appId: '2017083108487558', cardType: 'T0360100', sign: 'RSA', url: 'https://ncxmkt.i-xiaoma.com.cn:8443/api/virtual/card/local/revoked' },
        { label: '泰安退卡', appId: '2017080908104940', cardType: 'T0370900', sign: 'RSA', url: 'https://ic.tabus.com.cn:8443/api/virtual/card/local/revoked' },
        { label: '武汉退卡', appId: '2017022705927164', cardType: 'T0420100', sign: 'RSA2', url: 'https://zf.wuhanbus.com:8443/api/virtual/card/local/revoked' },
        { label: '嘉兴退卡', appId: '2017081608219705', cardType: 'T0330400', sign: 'RSA', url: 'https://jxgjzfb.jiaxingbus.com:8443/api/virtual/card/local/revoked' },
        { label: '安阳退卡', appId: '2017090808612377', cardType: 'T0410500', sign: 'RSA', url: 'https://aybuscard.i-xiaoma.com.cn:8443/api/virtual/card/local/revoked' },
        { label: '青岛退卡', appId: '2017071807800853', cardType: 'T0370200', sign: 'RSA2', url: 'https://qd.zhenqingbus.com:8443/api/virtual/card/local/revoked' },
        { label: '石家庄退卡', appId: '2017091408726612', cardType: 'T0130100', sign: 'RSA', url: 'https://sjzgj.i-xiaoma.com.cn:8443/api/virtual/card/local/revoked' },
        // 新
        { label: '银川公交', appId: '2017101309285444', cardType: 'T0640100', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '640100' },
        { label: '嘉兴桐乡', appId: '2017110309697081', cardType: 'T0330483', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '330400' },
        { label: '定州公交', appId: '2017101009224333', cardType: 'T0130682', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '130600' },
        { label: '雄县公交', appId: '2017100909211979', cardType: 'T0130638', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '130600' },
        { label: '保定公交', appId: '2017092908990385', cardType: 'T0130600', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '130600' },
        { label: '抚州公交', appId: '2017092008832740', cardType: 'T0361000', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '361000' },
        { label: '德阳公交', appId: '2017112900250230', cardType: 'T0510600', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '510600' },
        { label: '菏泽公交', appId: '2017071907813571', cardType: 'T0371700', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '371700' },
        { label: '商丘公交', appId: '2017102409487707', cardType: 'T0411400', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '411400' },
        { label: '张家口公交', appId: '2017110209678973', cardType: 'T0130700', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '130700' },
        { label: '桐乡公交', appId: '2017110309697081', cardType: 'T0330483', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '330400' },
        { label: '天津公交', appId: '2017101909389604', cardType: 'T0120000', sign: 'RSA', url: 'https://heart.tjbus.com/card-management-provider/virtual/card/alipay/status', cityCode: '120000' },
        { label: '长兴公交', appId: '2017111009837123', cardType: 'T0330522', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '330500' },
        { label: '西安地铁', appId: '2017112100082202', cardType: 'S0610100', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '610100' },
        { label: '临汾公交', appId: '2018010401577323', cardType: 'T0141000', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '141000' },
        { label: '绍兴公交', appId: '2017102409485516', cardType: 'T0330600', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '330600' },
        { label: '平湖公交', appId: '2017102409492235', cardType: 'T0330482', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '330400' },
        { label: '恩施公交', appId: '2017120600411001', cardType: 'T0422801', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '422800' },
        { label: '十堰公交', appId: '2017121100564627', cardType: 'T0420300', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '420300' },
        { label: '九江公交', appId: '2017112300118905', cardType: 'T0360400', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '360400' },
        { label: '廊坊公交', appId: '2018010301557353', cardType: 'T0131000', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '131000' },
        { label: '临沂公交', appId: '2017110309695734', cardType: 'T0371300', sign: 'RSA', url: 'https://bus.i-xiaoma.com.cn/card-management-provider/virtual/card/alipay/status', cityCode: '371300' }
      ],
      ruleForm: {
        appId: '2017072107839707',
        userId: '',
        cardType: '',
        sign: '',
        url: '',
        action: 'revoke',
        cityCode: '',
        disabledTips: encodeURIComponent('系统统一退卡'),
        isStressTest: false,
        outTradeNo: '' // 外部订单 退款使用
      },
      rules: {
        appId: [
          { required: true, message: '请选择商户' }
        ],
        userId: [
          { required: true, message: '请输入支付宝用户uid' }
        ],
        outTradeNo: [
          { required: true, message: '请输入订单编号' }
        ]
      }
    }
  },
  methods: {
    submitOpenCardForm (formName) { // 开卡
      var that = this
      that.$refs[formName].validate(function (valid) {
        if (valid) {
          that.selectItem(that.ruleForm.appId)
          that.openCard()
        }
      })
    },
    submitCardCloseForm (formName) { // 退卡
      var that = this
      that.$refs[formName].validate(function (valid) {
        if (valid) {
          that.selectItem(that.ruleForm.appId)
          that.cardClose()
        }
      })
    },
    submitRefund (formName) { // 退款
      var that = this
      that.$refs[formName].validate(function (valid) {
        if (valid) {
          that.refund()
        }
      })
    },
    selectItem (appId) {
      this.selectOptions.forEach((item) => {
        if (appId === item.appId) {
          this.ruleForm.cardType = item.cardType
          this.ruleForm.sign = item.sign
          this.ruleForm.cityCode = item.cityCode ? item.cityCode : ''
          this.ruleForm.url = item.url
        }
      })
    },
    handleOptionChange (val) {
      const filter = this.selectOptions.filter(item => item.appId === val)
      console.log(filter)
      if (filter[0].label === '天津公交') {
        this.openCardDisabled = false
      } else {
        this.cardCloseDisabled = true
        this.openCardDisabled = true
      }
    },
    tianjinOpenCard (formName) { // 天津开卡
      var that = this
      that.$refs[formName].validate((valid) => {
        if (valid) {
          $.ajax({
            url: 'https://heart.tjbus.com/card-management-provider/virtual/card/alipay/status/sync/data?APPID=2017101909389604&isStressTest=false',
            type: 'get',
            data: { appId: 2017101909389604, cardType: 'T0120000', cityCode: '120000', sign: 'RSA', userId: that.ruleForm.userId, action: 'ISSUE' },
            dataType: 'json',
            success: function (data) {
              that.loading = false
              alert(typeof data === 'string' ? data : JSON.stringify(data))
            },
            error: function (error) {
              that.loading = false
              alert(typeof error === 'string' ? error : JSON.stringify(error))
            }
          })
        }
      })
    },
    openCard () { // 执行开卡
      var that = this
      that.loading = true
      that.ruleForm.action = 'ISSUE'
      $.ajax({
        url: that.ruleForm.url + '?APPID=' + that.ruleForm.appId,
        type: 'get',
        data: that.ruleForm,
        dataType: 'json',
        success: function (data) {
          that.loading = false
          alert(typeof data === 'string' ? data : JSON.stringify(data))
        },
        error: function (error) {
          that.loading = false
          alert(typeof error === 'string' ? error : JSON.stringify(error))
        }
      })
    },
    cardClose () { // 执行退卡
      var that = this
      that.loading = true
      that.ruleForm.action = 'revoke'
      $.ajax({
        url: that.ruleForm.url + '?APPID=' + that.ruleForm.appId,
        type: 'post',
        data: that.ruleForm,
        dataType: 'json',
        success: function (data) {
          that.loading = false
          alert(typeof data === 'string' ? data : JSON.stringify(data))
        },
        error: function (error) {
          that.loading = false
          alert(typeof error === 'string' ? error : JSON.stringify(error))
        }
      })
    },
    refund () { // 执行退款
      var that = this
      that.loading = true
      $.ajax({
        url: 'http://116.62.156.195:8083/report/aliPayRefunds/WhAliPayRefunds',
        type: 'get',
        data: {
          outTradeNo: that.ruleForm.outTradeNo
        },
        dataType: 'json',
        success: function (data) {
          that.loading = false
          alert(typeof data === 'string' ? data : JSON.stringify(data))
        },
        error: function (error) {
          that.loading = false
          alert(typeof error === 'string' ? error : JSON.stringify(error))
        }
      })
    }
  }
})
