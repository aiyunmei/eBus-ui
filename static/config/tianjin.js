window.threeConfig = {
  "api": {
    "baseUrl": "https://ebus.tjbus.com/2017101909389604",
    "alipayAuthBaseUrl": "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm",
    "alipayTransitCardEntry": "https://render.alipay.com/p/f/public_transit/card_entry.html",
    "alipayMomUrl": "https://categoryservicetest.alipay-eco.com",
    "alipayUserUrl": "https://heart.tjbus.com/user-center-provider",
    "alipayCardManagementUrl": "https://heart.tjbus.com/card-management-provider",
    "alipayCardPayProviderUrl": "https://bus.i-xiaoma.com.cn/card-pay-provider"
  },
  "alipayCardInfo": {
    "appId": "2017101909389604",
    "scope": "auth_base",
    "sign": "RSA",
    "cardType": "T0120000",
    "bizType": "MEMBER_CARD",
    "templateId": "2017110316323118226335191",
    "subScene": "120000",
    "scene": "TRANSIT",
    "applyCardAction": "sign",
    "openCardAction": "use",
    "applyCardSource": "TIANJIN_BUS_APPLY",
    "openCardSource": "TIANJIN_CARD_USE",
    "useCardSource": "TIANJIN_BUS_USE",
    "busCode": "alipays://platformapi/startapp?appId=60000098&appClearTop=false&startMultApp=YES&url=%2Fwww%2Fcard_entry.html%3Fscene%3DTRANSIT%26subScene%3D120000%26cardType%3DT0120000%26source%TIANJIN_BUS_USE%26__webview_options__%3DcanPullDown%253DYES%2526pullRefresh%253DYES",
    "rechargeUnitName": "元",
    "storeAppId": "",
    "storeSign": ""
  },
  "global": {
    "cardName": "天津公交电子客票",
    "cityName": "天津",
    "cityCode": "120000",
    "showUrl": true,
    "onWhite": "enjoyProd",
    "whiteList": [
    ],
    "linkOldUrl": {
      "buscode": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=buscode",
      "other": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=carddetail"
    }
  },
  "card": {
    "image": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/tianjing1_card.jpg"
  },
  "openCard": {
    "bgImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/openCard_bg.jpg",
    "getCardBtnVal": "立即领票",
    "getCardHref": "https://memberprod.alipay.com/account/openform/activecard.htm?app_id=2017101909389604&template_id=2017110316323118226335191&__webview_options__=canPullDown%3dNO%26transparentTitle%3dauto&callback=https://ebus.tjbus.com/2017101909389604/cardIn&biz_type=scard",
    "cardDescription": {
      "01": {
        "header": "先乘车、后付款",
        "footer": "无需充值即可使用，从您支付宝账户扣款"
      }
    },
    "popupList": [
      {
        "name": "《天津公交电子客票用户协议》",
        "href": "https://ebus.tjbus.com/2017101909389604#/protocol"
      },
      {
        "name": "《公交先享后付服务和芝麻服务等相关协议》",
        "href": "https://render.alipay.com/p/f/fd-j5c107e4/index.html"
      }
    ]
  },
  "openCardEnd": {
    "busyImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/open_card_end_busy.png"
  },
  "protocol": {
    "company": "天津市公共交通总",
    "companyShort": "天津公交",
    "telephone": "0794-8296898"
  },
  "cardDetail": {
    "bgImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_bg.jpg",
    "noticeConfig": {
      "visible": false,
      "content": "天津公交电子客票,欢迎您!",
      "width": "100%"
    },
    "bannerConfig": {
      "visible": false,
      "isAlipayMon": false,
      "href": "http://baidu.com",
      "src": "../../static/img/banner2.png",
      "adPid": "213213123123"
    },
    "useBtnVal": "立即使用",
    "cardCloseConfirm": {
      "okVal": "残忍退票",
      "cancelVal": "我再想想",
      "image": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_card_close_alert.png",
      "content": "退卡后您将不能再享受刷手机乘公交<br/>的便捷服务"
    },
    "successAlertConfig": {
      "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_alert1.png",
      "leftBtnVal": "查看客票",
      "rightBtnVal": "立即使用"
    },
    "menuOptions": [
      {
        "label": "余额查询",
        "link": "/balance?__webview_options__%3DcanPullDown%3DNO%26transparentTitle%3Dauto",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/balance_icon.png",
        "visible": true
      },
      {
        "label": "卡片充值",
        "link": "/recharge",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_icon.png",
        "visible": true
      },
      {
        "label": "自动充值",
        "link": "/rechargeAuto",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/rechargeAuto_icon.png",
        "visible": true
      },
      {
        "label": "用户反馈",
        "link": "/userFeedBack",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/userFeedBack_icon.png",
        "visible": true
      },
      {
        "label": "乘车记录",
        "link": "alipays://platformapi/startapp?appId=20000076&returnHome=NO&bizSubType=75&showSearch=false&title=%E4%B9%98%E8%BD%A6%E8%AE%B0%E5%BD%95",
        "urlType": "outside",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/trafficLog_icon.png"
      },
      {
        "label": "开通线路",
        "link": "/openLine",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/openLine_icon.png"
      },
      {
        "label": "使用帮助",
        "link": "/help",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/help_icon.png"
      },
      {
        "label": "退卡申请",
        "link": "/cardClose",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/cardClose_icon.png"
      }
    ]
  },
  "cardClose": {
    "day": 7,
    "timeImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_close_time.jpg"
  },
  "recharge": {
    "headerImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/wh_recharge_header_bg.png",
    "RMBThreshold": 100000,
    "list": [
      {
        "label": "0.01元",
        "value": 0.01,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "立减25",
          "width": "1.6rem"
        }
      },
      {
        "label": "0.05元",
        "value": 0.05,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "立减25",
          "width": "1.6rem"
        }
      },
      {
        "label": "10元",
        "value": 10,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "享8.6折",
          "width": "1.6rem"
        }
      },
      {
        "label": "20元",
        "value": 20,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "享8折",
          "width": "1.6rem"
        }
      },
      {
        "label": "50元",
        "value": 50,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "惠",
          "width": "1.6rem"
        }
      }
    ],
    "rechargeProtocol": "<p>尊敬的客户，为保障您的合法权益，请您在点击“立即充值”按钮前，完整、仔细地阅读本充值协议。当您继续点击“立即充值”按钮，即视为您已阅读、理解本协议，并同意按本协议规定执行。</p><p><strong>1、充值方式</strong></p><p>本活动仅限市民对武汉电子公交卡充值；</p><p><strong>2、储值优惠</strong></p><p>储值用户可享受乘车8折优惠，及平台推出的不定时充值优惠活动，如，您充值100元，根据当时的充值优惠9折，则你实际付款90元，您的账户内显示的充值金额为100元，超出的10元即为充值赠送金额；</p><p>3、账户金额仅可用于武汉公交提供的支付宝公交刷码服务；</p><p>4、充值后，账户余额使用不设有效期，不能转移、转赠；</p><p>5、请您根据自己的消费情况充值，我们对充值次数不设限制，最高充值上限1000元；</p><p>6、如有疑问请咨询客服，客服热线027-84510000或QQ群523143023，反馈时间：周一至周五，AM9:00-PM17:00。</p>"
  },
  "balance": {
    "headerImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/balance_header_bg.jpg"
  },
  "payResult": {
    "alipayLogoImage": "https://t.alipayobjects.com/images/rmsweb/T1B8lgXi4iXXXXXXXX.png"
  },
  "help": [
    {
      "question": "天津公交电子客票是什么？",
      "answer": "天津公交电子客票是天津公交易通、小码联城和支付宝共同推出的线上电子公交客票，乘客可在支付宝内领取“天津公交电子客票”，乘车时只要打开支付宝的天津公交电子客票公交刷码页面，即可刷码乘车。"
    },
    {
      "question": "如何领取“天津公交电子客票”？",
      "answer": "（1）首次使用打开支付宝——选择【城市服务】——点击【乘车码】——自动添加到您支付宝付款底部<br/>（2）打开支付宝——选择【付款】——点击底部【乘车码】——按照领卡提示，即可领取您专属的“天津公交电子客票”<br/>（3）或在支付宝内搜素“天津公交易通科技有限公司”生活号，按提示领取专属公交客票"
    },
    {
      "question": "领卡后如何使用？",
      "answer": "打开支付宝——选择【付款】——点击底部【乘车码】——将乘车码对准公交车上扫码窗口——听到【扫码成功】语音提示即可"
    },
    {
      "question": "“天津公交电子客票”是如何收费的？乘车票价是多少？",
      "answer": "“天津公交电子客票”领取电子公交卡免费，乘车按照车费收取“天津公交电子客票”先开通的线路仅为试点线路，目前每次刷码按常规票价（投币票价）进行扣款"
    },
    {
      "question": "“天津公交电子客票”是否有换乘优惠？是否有乘车优惠？",
      "answer": "目前，天津公交电子客票仅开通部分线路作为试运营线路，暂无乘车优惠。换乘优惠暂时未开通，尽请期待。"
    },
    {
      "question": "使用“天津公交电子客票”乘车发票怎么开？乘车记录有么？",
      "answer": "目前，天津公交电子客票不支持乘车发票开具您可通过支付宝——【卡包】——【天津公交电子客票】——【使用记录】查询乘车记录"
    },
    {
      "question": "哪些线路可以使用支付宝乘车？其他线路什么时候可以上线？",
      "answer": "您可通过支付宝——【卡包】——【天津公交电子客票】——【开通线路】查询已开通乘车刷码功能的公交线路其他线路的乘车刷码功能在逐步开通中"
    },
    {
      "question": "还有哪些城市可以使用支付宝乘车？",
      "answer": "您可通过支付宝内【乘车码】-【切换卡片】-【领取新卡】来查看现有开通公交卡（及乘车码）业务的城市"
    },
    {
      "question": "“天津公交电子客票”可以充值实体公交卡么？",
      "answer": "目前，“天津公交电子客票”仅支持乘车刷码功能，充值实体卡仍需要到公交充值点进行充值"
    },
    {
      "question": "为什么无法领取“天津公交电子客票”",
      "answer": "（1）您在领卡时，同一用户只能领取一张公交客票，若该账号无法领取，请查看是否有其他支付宝账号领取“天津公交电子客票”<br/>（2）若依然无法领取“天津公交电子客票”，请查看是否有支付宝内芝麻信用是否达到550分，或在支付宝“花呗”是否有欠款，如信用分未达到550分或“花呗”“借呗”有违期情况均不可领取“天津公交电子客票”<br/>（3）如上述问题不存在仍不可领卡，请在支付宝内发起咨询或支付宝客服电话：95188或添加QQ群：523143023进行咨询"
    },
    {
      "question": "上车时不小心多刷了好几遍，扣款如何退回？",
      "answer": "若您在乘车时对刷码金额有疑问，均可在支付宝内发起客服咨询，待客服审核该笔交易无误后，多余费用将会在工作日内返还到您账户。客服咨询流程：打开【天津公交电子客票】——点击【使用记录】——找到有疑问的乘车记录并打开【账单详情】——从【对此订单有疑问】发起咨询"
    },
    {
      "question": "使用乘车刷码刷码机没反应怎么办？",
      "answer": "（1）手机乘车码未对准刷码窗口，可稍微调整对准方向或距离<br/>（2）若您依然无法刷码，可能是因为机具问题或您的乘车码被冻结（支付宝信用不够或花呗违期），若是机具问题，请告知公交司机帮助。"
    },
    {
      "question": "我遇到了支付问题，该怎么办？",
      "answer": "（1）确认用户手机的网络状况；<br/>（2）是否已经支付宝实名认证；<br/>（3）确认用户支付宝账户绑定银行卡或向您的支付宝“余额”或“余额宝”进行充值；<br/>（4）支付宝客服电话：95188<br/>【二维码空白/打不开】<br/>（1）建议升级支付宝到最新版本；<br/>（2）若升级后依旧不行，可尝试致电支付宝客服95188<br/>（3）可能为手机型号/版本问题，可联系支付宝<br/>【案例：账户提示前两笔款项处于等待付款状态，第三次开始无法刷码】<br/>（1）是否用户授信被冻结？导致不能生码。建议用户在给支付宝账户充钱或者还掉花呗、借呗等信贷产品（建议用户直接联系支付宝客服96188询问）<br/>【刷码后提示乘车码无效】<br/>请确认您是否是用支付宝城市乘车码服务，乘车码打开方式：支付宝【首页】—【付款】-切换至【乘车码】-刷码乘车"
    },
    {
      "question": "不想用了，如何退卡？",
      "answer": "若用户不想使用线上公交卡后，乘车时不使用“天津公交电子客票”即可，该卡不会产生任何扣费情况。若用户希望直接退卡，则需通过【乘车码】——点击卡名【天津公交电子客票】——进入卡片详情页——【退卡申请】即可"
    }
  ],
  "openLine": {
    "searchConfig": {
      "placeholder": "请输入您想查询的开通线路名称",
      "nullTips": "该线路未开通手机支付,敬请期待",
      "nullImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/open_line_null.png"
    },
    "openLineOptions": [
      {
        "txt": "1路",
        "start": "览桥里公交站",
        "end": "津塔公交站"
      },
      {
        "txt": "3路",
        "start": "下瓦房公交站",
        "end": "跃升里公交站"
      },
      {
        "txt": "5路",
        "start": "李七庄",
        "end": "北辰科技园北"
      },
      {
        "txt": "8路",
        "start": "天津站",
        "end": "体育中心公交站"
      },
      {
        "txt": "9路",
        "start": "理工大学主校区公交站",
        "end": "中心花园"
      },
      {
        "txt": "10路",
        "start": "引河北里公交站",
        "end": "西站公交站"
      },
      {
        "txt": "12路",
        "start": "宿纬路",
        "end": "动物园公交站"
      },
      {
        "txt": "13路",
        "start": "天津站公交站",
        "end": "体院北公交站"
      },
      {
        "txt": "15路",
        "start": "西站公交站",
        "end": "乌江北里"
      },
      {
        "txt": "18路",
        "start": "泰莱道公交站",
        "end": "金钢桥"
      },
      {
        "txt": "20路",
        "start": "津塔公交站",
        "end": "浯水道公交站"
      },
      {
        "txt": "22路",
        "start": "泰兴路公交站",
        "end": "龙洲道公交站"
      },
      {
        "txt": "24路",
        "start": "西站公交站",
        "end": "天津站"
      },
      {
        "txt": "27路",
        "start": "天津站公交站",
        "end": "淮河道公交站"
      },
      {
        "txt": "28路",
        "start": "明珠花园",
        "end": "天津站公交站"
      },
      {
        "txt": "30路",
        "start": "泗阳道公交站",
        "end": "崔家码头"
      },
      {
        "txt": "31路",
        "start": "中北公交站",
        "end": "西站公交站"
      },
      {
        "txt": "32路",
        "start": "北站",
        "end": "万新村南公交站"
      },
      {
        "txt": "34路",
        "start": "刘园公交站",
        "end": "通北路"
      },
      {
        "txt": "35路",
        "start": "丽苑小区公交站",
        "end": "水上公园东门"
      },
      {
        "txt": "37路",
        "start": "辰兴路公交站",
        "end": "中心公园"
      },
      {
        "txt": "42路",
        "start": "金钟河大街公交站",
        "end": "程盛道公交站"
      },
      {
        "txt": "45路",
        "start": "山西路",
        "end": "澄江路公交站"
      },
      {
        "txt": "50路",
        "start": "天津站",
        "end": "王顶堤北公交站"
      },
      {
        "txt": "52路",
        "start": "体育中心公交站",
        "end": "西站公交站"
      },
      {
        "txt": "92路",
        "start": "宁月花园",
        "end": "中心公园"
      },
      {
        "txt": "93路",
        "start": "中心公园",
        "end": "双马公交站"
      },
      {
        "txt": "95路",
        "start": "柳林",
        "end": "王顶堤北公交站"
      },
      {
        "txt": "96路",
        "start": "赛达新兴产业园公交站",
        "end": "天津站后广场"
      },
      {
        "txt": "97路",
        "start": "天津站",
        "end": "双水道公交站"
      },
      {
        "txt": "157路",
        "start": "东风里公交站",
        "end": "西城寝园"
      },
      {
        "txt": "161路",
        "start": "西站公交站",
        "end": "大港老客运站"
      },
      {
        "txt": "168路",
        "start": "西站公交站",
        "end": "陈寨庄村"
      },
      {
        "txt": "174路",
        "start": "龙洲道公交站",
        "end": "汊沽港科技谷公交站"
      },
      {
        "txt": "175路",
        "start": "下瓦房公交站",
        "end": "杨柳青公交站"
      },
      {
        "txt": "186路",
        "start": "天津站",
        "end": "大港老客运站"
      },
      {
        "txt": "203路",
        "start": "天津海河教育园二号公交站",
        "end": "天津海河教育园二号公交站"
      },
      {
        "txt": "205路",
        "start": "天南大新址公交站",
        "end": "海河科技园区公交站"
      },
      {
        "txt": "207路",
        "start": "东张庄公交站",
        "end": "星耀五洲展示厅"
      },
      {
        "txt": "209路",
        "start": "迎新村",
        "end": "小站公交站"
      },
      {
        "txt": "216路",
        "start": "复兴门",
        "end": "大孙庄村委会"
      },
      {
        "txt": "220路",
        "start": "商务学院",
        "end": "复兴门"
      },
      {
        "txt": "223路",
        "start": "天南大新址公交站",
        "end": "津南新城"
      },
      {
        "txt": "224路",
        "start": "仁恒滨河湾终点站",
        "end": "天南大新址公交站"
      },
      {
        "txt": "225路",
        "start": "南大新址西门",
        "end": "南大新址西门"
      },
      {
        "txt": "226路",
        "start": "海河科技园区公交站",
        "end": "海河科技园区公交站"
      },
      {
        "txt": "301路",
        "start": "体育中心公交站",
        "end": "侯台花园"
      },
      {
        "txt": "304路",
        "start": "华山里地铁站",
        "end": "双港新家园公交站"
      },
      {
        "txt": "305路",
        "start": "张贵庄公交站",
        "end": "张贵庄公交站"
      },
      {
        "txt": "306路",
        "start": "体育中心公交站",
        "end": "王姑娘庄"
      },
      {
        "txt": "308路",
        "start": "川府新村公交站",
        "end": "和苑公交站"
      },
      {
        "txt": "309路",
        "start": "天职师大公交站",
        "end": "双港新家园公交站"
      },
      {
        "txt": "310路",
        "start": "佟楼公交站",
        "end": "九连山公交站"
      },
      {
        "txt": "311路",
        "start": "师范大学",
        "end": "大学城地铁站"
      },
      {
        "txt": "314路",
        "start": "景瑞阳光尚城公交站",
        "end": "华北集团"
      },
      {
        "txt": "315路",
        "start": "顺驰桥地铁站",
        "end": "大众家园"
      },
      {
        "txt": "316路",
        "start": "胸科医院环湖医院公交站",
        "end": "富民路"
      },
      {
        "txt": "318路",
        "start": "刘园地铁站",
        "end": "引河里北道公交站"
      },
      {
        "txt": "321路",
        "start": "新胸科医院",
        "end": "复兴门"
      },
      {
        "txt": "323路",
        "start": "梅江西公交站",
        "end": "富力津门湖"
      },
      {
        "txt": "324路",
        "start": "北安桥",
        "end": "喜峰道"
      },
      {
        "txt": "326路",
        "start": "双马公交站",
        "end": "双水道公交站"
      },
      {
        "txt": "327路",
        "start": "公交四公司",
        "end": "井冈山路公交站"
      },
      {
        "txt": "330路",
        "start": "芥园西道公交站",
        "end": "澄江路公交站"
      },
      {
        "txt": "332路",
        "start": "韩家墅集团",
        "end": "双环村公交站"
      },
      {
        "txt": "336路",
        "start": "长湖路",
        "end": "渌水道公交站"
      },
      {
        "txt": "337路",
        "start": "梅江西公交站",
        "end": "双水道公交站"
      },
      {
        "txt": "338路",
        "start": "金钟河大街公交站",
        "end": "大桥道"
      },
      {
        "txt": "339路",
        "start": "康泽家园",
        "end": "万新村北公交站"
      },
      {
        "txt": "340路",
        "start": "新东方家园",
        "end": "泗阳道公交站"
      },
      {
        "txt": "341路",
        "start": "海明园",
        "end": "万新村北公交站"
      },
      {
        "txt": "342路",
        "start": "双港新家园公交站",
        "end": "财经大学"
      },
      {
        "txt": "343路",
        "start": "本溪路公交站",
        "end": "淮河道公交站"
      },
      {
        "txt": "347路",
        "start": "阳光100公交站",
        "end": "利海家园"
      },
      {
        "txt": "349路",
        "start": "中医一附院新院",
        "end": "体育中心公交站"
      },
      {
        "txt": "353路",
        "start": "文江美庭苑",
        "end": "东风立交桥"
      },
      {
        "txt": "354路",
        "start": "咸阳北路公交站",
        "end": "顺义道"
      },
      {
        "txt": "366路",
        "start": "曹庄子花卉市场",
        "end": "和苑公交站"
      },
      {
        "txt": "367路",
        "start": "子牙南里",
        "end": "和苑公交站"
      },
      {
        "txt": "368路",
        "start": "昆仑里",
        "end": "方山道跃进路口"
      },
      {
        "txt": "371路",
        "start": "万新村南公交站",
        "end": "军粮城示范镇"
      },
      {
        "txt": "372路",
        "start": "东丽湖公交站",
        "end": "恒大绿洲"
      },
      {
        "txt": "373路",
        "start": "天骥智谷",
        "end": "华明新家园北站"
      },
      {
        "txt": "374路",
        "start": "欣桃园",
        "end": "双水道公交站"
      },
      {
        "txt": "375路",
        "start": "华山里地铁站",
        "end": "林城佳苑"
      },
      {
        "txt": "379路",
        "start": "金钟新市镇",
        "end": "新中村公交站"
      },
      {
        "txt": "461路",
        "start": "西站北广场",
        "end": "汉沽中心站"
      },
      {
        "txt": "462路",
        "start": "天津站",
        "end": "汉沽中心站"
      },
      {
        "txt": "469路",
        "start": "兴家坨村",
        "end": "西站北广场"
      },
      {
        "txt": "570路",
        "start": "运河家园",
        "end": "天津站公交站"
      },
      {
        "txt": "574路",
        "start": "七里海镇",
        "end": "西站北广场"
      },
      {
        "txt": "602路",
        "start": "刘园公交站",
        "end": "太阳城公交站"
      },
      {
        "txt": "604路",
        "start": "大营门",
        "end": "梅江南公交站"
      },
      {
        "txt": "605路",
        "start": "国翔公寓",
        "end": "大胡同商贸中心"
      },
      {
        "txt": "606路",
        "start": "龙洲道公交站",
        "end": "文化中心公交站"
      },
      {
        "txt": "608路",
        "start": "文江美庭苑",
        "end": "华苑雅士道"
      },
      {
        "txt": "609路",
        "start": "雅士道公交站",
        "end": "文江美庭苑"
      },
      {
        "txt": "613路",
        "start": "天南大新址公交站",
        "end": "华山里地铁站"
      },
      {
        "txt": "616路",
        "start": "王顶堤公交站",
        "end": "曹庄子花卉市场"
      },
      {
        "txt": "619路",
        "start": "万科新城公交站",
        "end": "体院北公交站"
      },
      {
        "txt": "620路",
        "start": "曹庄子花卉市场",
        "end": "高新区地铁站"
      },
      {
        "txt": "621路",
        "start": "天津站",
        "end": "塘沽南站"
      },
      {
        "txt": "622路",
        "start": "水木天成公交站",
        "end": "空港经济区公交站"
      },
      {
        "txt": "623路",
        "start": "李明庄",
        "end": "双水道公交站"
      },
      {
        "txt": "628路",
        "start": "水木天成公交站",
        "end": "大寺龙居花园"
      },
      {
        "txt": "631路",
        "start": "双马公交站",
        "end": "水木天成公交站"
      },
      {
        "txt": "632路",
        "start": "九连山公交站",
        "end": "喜峰道"
      },
      {
        "txt": "633路",
        "start": "何兴庄公交站",
        "end": "航海道"
      },
      {
        "txt": "634路",
        "start": "刘园公交站",
        "end": "天津站"
      },
      {
        "txt": "635路",
        "start": "西站公交站",
        "end": "方山道公交站"
      },
      {
        "txt": "636路",
        "start": "赛达新兴产业园公交站",
        "end": "文化中心公交站"
      },
      {
        "txt": "639路",
        "start": "赵苑小区",
        "end": "增兴窑"
      },
      {
        "txt": "640路",
        "start": "丽苑小区",
        "end": "一中心医院"
      },
      {
        "txt": "641路",
        "start": "万科新城公交站",
        "end": "富力津门湖"
      },
      {
        "txt": "642路",
        "start": "中山门和睦道",
        "end": "龙洲道公交站"
      },
      {
        "txt": "643路",
        "start": "中山门和睦道",
        "end": "华苑小区公交站"
      },
      {
        "txt": "645路",
        "start": "天津站",
        "end": "曹庄子花卉市场"
      },
      {
        "txt": "646路",
        "start": "康桥里",
        "end": "澄江路公交站"
      },
      {
        "txt": "649路",
        "start": "河北工大分院东区",
        "end": "丁字沽公交站"
      },
      {
        "txt": "651路",
        "start": "西站",
        "end": "开发区科技大学"
      },
      {
        "txt": "653路",
        "start": "明珠花园",
        "end": "本溪路公交站"
      },
      {
        "txt": "654路",
        "start": "天安智慧港公交站",
        "end": "华明商贸中心公交站"
      },
      {
        "txt": "655路",
        "start": "文化中心公交站",
        "end": "天津海河教育园一号公交站"
      },
      {
        "txt": "656路",
        "start": "浯水道",
        "end": "金钟河大街公交站"
      },
      {
        "txt": "657路",
        "start": "中嘉东道",
        "end": "泗水道公交站"
      },
      {
        "txt": "658路",
        "start": "纪明家园",
        "end": "龙洲道公交站"
      },
      {
        "txt": "659路",
        "start": "大港老客运站",
        "end": "白庙公交站"
      },
      {
        "txt": "660路",
        "start": "天津站",
        "end": "华明新家园北站"
      },
      {
        "txt": "661路",
        "start": "红光农场",
        "end": "西站公交站"
      },
      {
        "txt": "662路",
        "start": "双马公交站",
        "end": "芥园西道公交站"
      },
      {
        "txt": "663路",
        "start": "东丽湖公交站",
        "end": "天津站"
      },
      {
        "txt": "664路",
        "start": "东丽湖鹏展道公交站",
        "end": "金钟新市镇"
      },
      {
        "txt": "665路",
        "start": "天职师大公交站",
        "end": "凤凰路"
      },
      {
        "txt": "666路",
        "start": "民航大学",
        "end": "天津站"
      },
      {
        "txt": "668路",
        "start": "水上公园东门",
        "end": "丽苑小区公交站"
      },
      {
        "txt": "669路",
        "start": "山西路",
        "end": "杨柳青公交站"
      },
      {
        "txt": "672路",
        "start": "杨柳青客运站",
        "end": "天津站"
      },
      {
        "txt": "673路",
        "start": "商业大学",
        "end": "万新村东"
      },
      {
        "txt": "675路",
        "start": "天津文化中心公交站",
        "end": "田园小区"
      },
      {
        "txt": "676路",
        "start": "商业大学",
        "end": "天职师大公交站"
      },
      {
        "txt": "678路",
        "start": "机场货运区",
        "end": "嘉陵南里公交站"
      },
      {
        "txt": "679路",
        "start": "泗阳道",
        "end": "丰年村公交站"
      },
      {
        "txt": "681路",
        "start": "天山南路(南)",
        "end": "侯台公交站"
      },
      {
        "txt": "682路",
        "start": "双港新家园公交站",
        "end": "体院北公交站"
      },
      {
        "txt": "685路",
        "start": "太阳城公交站",
        "end": "王顶堤北公交站"
      },
      {
        "txt": "686路",
        "start": "雲锦世家公交站",
        "end": "双马公交站"
      },
      {
        "txt": "687路",
        "start": "精武镇公交站",
        "end": "西站公交站"
      },
      {
        "txt": "688路",
        "start": "西站公交站",
        "end": "大港桃园小区"
      },
      {
        "txt": "689路",
        "start": "天津站",
        "end": "空港经济区公交站"
      },
      {
        "txt": "690路",
        "start": "华明新家园北站",
        "end": "崔家码头"
      },
      {
        "txt": "691路",
        "start": "空港经济区公交站",
        "end": "空港地铁公交站"
      },
      {
        "txt": "692路",
        "start": "空港地铁公交站",
        "end": "空港经济区公交站"
      },
      {
        "txt": "693路",
        "start": "沂山路公交站",
        "end": "鼓楼"
      },
      {
        "txt": "694路",
        "start": "华明商贸中心公交站",
        "end": "东丽湖公交站"
      },
      {
        "txt": "695路",
        "start": "空港地铁公交站",
        "end": "华明新家园南站"
      },
      {
        "txt": "696路",
        "start": "恒大绿洲",
        "end": "空港地铁公交站"
      },
      {
        "txt": "697路",
        "start": "丽苑小区公交站",
        "end": "体院北公交站"
      },
      {
        "txt": "698路",
        "start": "雅士道公交站",
        "end": "渌水道人人乐"
      },
      {
        "txt": "700路",
        "start": "辰兴路公交站",
        "end": "海泰北公交站"
      },
      {
        "txt": "701路",
        "start": "金钟新市镇",
        "end": "天津站后广场"
      },
      {
        "txt": "702路",
        "start": "金钟新市镇",
        "end": "通北路"
      },
      {
        "txt": "703路",
        "start": "双港新家园公交站",
        "end": "王顶堤北公交站"
      },
      {
        "txt": "705路",
        "start": "双港新家园公交站",
        "end": "西关西"
      },
      {
        "txt": "706路",
        "start": "西青开发区公交站",
        "end": "第六大道公交站"
      },
      {
        "txt": "707路",
        "start": "张家窝家泰里",
        "end": "海光寺公交站"
      },
      {
        "txt": "710路",
        "start": "华北石油大学",
        "end": "海光寺公交站"
      },
      {
        "txt": "711路",
        "start": "王村公交站",
        "end": "嘉陵南里公交站"
      },
      {
        "txt": "712路",
        "start": "东风里公交站",
        "end": "天安数码城公交站"
      },
      {
        "txt": "713路",
        "start": "中医一附院新院",
        "end": "嘉陵南里公交站"
      },
      {
        "txt": "715路",
        "start": "金钟新市镇",
        "end": "万科魅力城"
      },
      {
        "txt": "716路",
        "start": "胸科医院环湖医院公交站",
        "end": "军粮城示范镇"
      },
      {
        "txt": "717路",
        "start": "和顺家园六区",
        "end": "军粮城示范镇"
      },
      {
        "txt": "720路",
        "start": "军粮城示范镇",
        "end": "东丽湖鹏展道"
      },
      {
        "txt": "732路",
        "start": "双青新家园荣居园",
        "end": "丁字沽公交站"
      },
      {
        "txt": "735路",
        "start": "龙洲道公交站",
        "end": "龙洲道公交站"
      },
      {
        "txt": "743路",
        "start": "双青新家园荣居园",
        "end": "淮河道公交站"
      },
      {
        "txt": "746路",
        "start": "西站公交站",
        "end": "金威创展园"
      },
      {
        "txt": "749路",
        "start": "天津站后广场",
        "end": "逸仙园"
      },
      {
        "txt": "750路",
        "start": "赵北村村委会",
        "end": "张贵庄公交站"
      },
      {
        "txt": "751路",
        "start": "华明新家园北站",
        "end": "万科魅力城站"
      },
      {
        "txt": "753路",
        "start": "天职师大公交站",
        "end": "中医一附院新院"
      },
      {
        "txt": "760路",
        "start": "天津站",
        "end": "胸科医院环湖医院公交站"
      },
      {
        "txt": "764路",
        "start": "花香漫城",
        "end": "双青新家园荣居园"
      },
      {
        "txt": "766路",
        "start": "清水源公交站",
        "end": "龙洲道公交站"
      },
      {
        "txt": "773路",
        "start": "黄花店",
        "end": "汊沽港科技谷公交站"
      },
      {
        "txt": "800路",
        "start": "渌水道公交站",
        "end": "本溪路公交站"
      },
      {
        "txt": "801路",
        "start": "新华路百货大楼",
        "end": "金威创展园"
      },
      {
        "txt": "806路",
        "start": "大胡同商贸中心",
        "end": "万科魅力城"
      },
      {
        "txt": "811路",
        "start": "南车宿舍",
        "end": "淮河道公交站"
      },
      {
        "txt": "813路",
        "start": "天津站后广场",
        "end": "天津职业大学"
      },
      {
        "txt": "817路",
        "start": "李明庄",
        "end": "万新村南公交站"
      },
      {
        "txt": "818路",
        "start": "南市站",
        "end": "华明新家园北站"
      },
      {
        "txt": "819路",
        "start": "胸科医院环湖医院公交站",
        "end": "万新村南"
      },
      {
        "txt": "826路",
        "start": "中心公园",
        "end": "大寺新家园公交站"
      },
      {
        "txt": "827路",
        "start": "太阳城公交站",
        "end": "中心公园"
      },
      {
        "txt": "829路",
        "start": "西站公交站",
        "end": "理工大学主校区公交站"
      },
      {
        "txt": "830路",
        "start": "中心公园",
        "end": "万科魅力城"
      },
      {
        "txt": "831路",
        "start": "海泰北",
        "end": "中心公园"
      },
      {
        "txt": "832路",
        "start": "天津站",
        "end": "大寺村"
      },
      {
        "txt": "835路",
        "start": "王顶堤商贸城",
        "end": "开发区科技大学"
      },
      {
        "txt": "836路",
        "start": "万新村北公交站",
        "end": "东姜井公交站"
      },
      {
        "txt": "837路",
        "start": "双环村公交站",
        "end": "中心公园"
      },
      {
        "txt": "838路",
        "start": "中心公园",
        "end": "西青开发区公交站"
      },
      {
        "txt": "840路",
        "start": "西站公交站",
        "end": "贵环小区"
      },
      {
        "txt": "841路",
        "start": "中北公交站",
        "end": "大众家园终点站"
      },
      {
        "txt": "845路",
        "start": "侯台公交站",
        "end": "六纬路六经路"
      },
      {
        "txt": "846路",
        "start": "浯水道公交站",
        "end": "大胡同商贸中心"
      },
      {
        "txt": "847路",
        "start": "丽苑小区公交站",
        "end": "王顶堤北公交站"
      },
      {
        "txt": "849路",
        "start": "师范大学",
        "end": "世纪天乐"
      },
      {
        "txt": "850路",
        "start": "天津公交新能源基地公交站",
        "end": "天华里"
      },
      {
        "txt": "851路",
        "start": "中心公园",
        "end": "中北公交站"
      },
      {
        "txt": "852路",
        "start": "川府新村公交站",
        "end": "宜兴阜花园"
      },
      {
        "txt": "855路",
        "start": "双港新家园公交站",
        "end": "白庙公交站"
      },
      {
        "txt": "856路",
        "start": "水木天成公交站",
        "end": "万科魅力城"
      },
      {
        "txt": "857路",
        "start": "阳光100公交站",
        "end": "张贵庄公交站"
      },
      {
        "txt": "858路",
        "start": "雲锦世家公交站",
        "end": "通达尚城"
      },
      {
        "txt": "859路",
        "start": "浯水道公交站",
        "end": "本溪路公交站"
      },
      {
        "txt": "860路",
        "start": "方山道",
        "end": "本溪路公交站"
      },
      {
        "txt": "861路",
        "start": "第三石油化工厂",
        "end": "秋水苑"
      },
      {
        "txt": "863路",
        "start": "东姜井公交站",
        "end": "圣贤道"
      },
      {
        "txt": "865路",
        "start": "人民公园",
        "end": "青翠园公交站"
      },
      {
        "txt": "866路",
        "start": "澄江路公交站",
        "end": "太阳城公交站"
      },
      {
        "txt": "867路",
        "start": "李家园",
        "end": "富民路公交站"
      },
      {
        "txt": "868路",
        "start": "徐庄子公交站",
        "end": "富力津门湖公交站"
      },
      {
        "txt": "869路",
        "start": "何兴庄公交站",
        "end": "航海道"
      },
      {
        "txt": "870路",
        "start": "新中村公交站",
        "end": "凌奥创意产业园"
      },
      {
        "txt": "871路",
        "start": "天津工业大学新校区公交站",
        "end": "文江美庭苑"
      },
      {
        "txt": "872路",
        "start": "雅士道公交站",
        "end": "东丽开发区"
      },
      {
        "txt": "878路",
        "start": "蓝海商贸城公交站",
        "end": "金谷园公交站"
      },
      {
        "txt": "879路",
        "start": "水上公园东门",
        "end": "集贤道"
      },
      {
        "txt": "901路",
        "start": "圣贤道",
        "end": "动物园公交站"
      },
      {
        "txt": "903路",
        "start": "泗阳道公交站",
        "end": "华苑小区公交站"
      },
      {
        "txt": "904路",
        "start": "雅士道公交站",
        "end": "西站公交站"
      },
      {
        "txt": "905路",
        "start": "中山门虎丘路",
        "end": "东姜井公交站"
      },
      {
        "txt": "906路",
        "start": "龙门东道公交站",
        "end": "梅江南公交站"
      },
      {
        "txt": "907路",
        "start": "咸阳北路公交站",
        "end": "天山南路"
      },
      {
        "txt": "908路",
        "start": "万科新城公交站",
        "end": "富民路公交站"
      },
      {
        "txt": "909路",
        "start": "中北公交站",
        "end": "龙门东道公交站"
      },
      {
        "txt": "910路",
        "start": "西站公交站",
        "end": "淮河道公交站"
      },
      {
        "txt": "911路",
        "start": "文江东里",
        "end": "侯台公交站"
      },
      {
        "txt": "912路",
        "start": "文化中心公交站",
        "end": "青翠园"
      },
      {
        "txt": "916路",
        "start": "喜峰道",
        "end": "方山道公交站"
      },
      {
        "txt": "950路",
        "start": "SM城市广场公交站",
        "end": "SM城市广场公交站"
      },
      {
        "txt": "951路",
        "start": "天津站",
        "end": "师范大学"
      },
      {
        "txt": "952路",
        "start": "富力津门湖公交站",
        "end": "龙门东道"
      },
      {
        "txt": "953路",
        "start": "天津站",
        "end": "理工大学主校区公交站"
      },
      {
        "txt": "954路",
        "start": "渌水道公交站",
        "end": "世纪天乐"
      },
      {
        "txt": "961路",
        "start": "天津站",
        "end": "城际美景"
      },
      {
        "txt": "962路",
        "start": "辰兴路公交站",
        "end": "第六大道公交站"
      },
      {
        "txt": "963路",
        "start": "师范大学",
        "end": "万东路"
      },
      {
        "txt": "968路",
        "start": "天津文化中心",
        "end": "师范大学"
      },
      {
        "txt": "319路",
        "start": "西横堤地铁站",
        "end": "河北工大分院东区"
      },
      {
        "txt": "334路",
        "start": "淮河道公交站",
        "end": "万达轮胎集团"
      },
      {
        "txt": "600路",
        "start": "丁字沽公交站",
        "end": "丁字沽公交站"
      },
      {
        "txt": "610路",
        "start": "唐山道",
        "end": "柴楼新庄园公交站"
      },
      {
        "txt": "670路",
        "start": "景瑞阳光尚城",
        "end": "新华路百货大楼"
      },
      {
        "txt": "671路",
        "start": "蓝湖郡公交总站",
        "end": "新华路百货大楼"
      },
      {
        "txt": "725路",
        "start": "本溪路公交站",
        "end": "小街"
      },
      {
        "txt": "733路",
        "start": "天津职业大学",
        "end": "丁字沽"
      },
      {
        "txt": "740路",
        "start": "东赵庄新家园",
        "end": "淮河道公交站"
      },
      {
        "txt": "802路",
        "start": "天津站",
        "end": "泰莱道公交站"
      },
      {
        "txt": "803路",
        "start": "天津文化中心站",
        "end": "淮河道公交站"
      },
      {
        "txt": "810路",
        "start": "柴楼新庄园公交站",
        "end": "西站公交站"
      },
      {
        "txt": "812路",
        "start": "天津职业大学",
        "end": "城际美景"
      },
      {
        "txt": "828路",
        "start": "中心公园",
        "end": "大江里"
      },
      {
        "txt": "842路",
        "start": "泰兴路公交站",
        "end": "嘉陵南里公交站"
      },
      {
        "txt": "902路",
        "start": "王顶堤公交站",
        "end": "大江里"
      },
      {
        "txt": "4013路",
        "start": "白庙",
        "end": "柴楼新庄园"
      },
      {
        "txt": "4014路",
        "start": "刘园地铁站",
        "end": "小街新苑"
      },
      {
        "txt": "4015路",
        "start": "西横堤地铁站",
        "end": "双青新家园"
      },
      {
        "txt": "611快路",
        "start": "中心公园",
        "end": "逸仙园"
      },
      {
        "txt": "612快路",
        "start": "天南大新址公交站",
        "end": "南开大学"
      },
      {
        "txt": "612普路",
        "start": "天南大新址公交站",
        "end": "南开大学"
      },
      {
        "txt": "615快路",
        "start": "天津大学",
        "end": "天南大新址公交站"
      },
      {
        "txt": "615普路",
        "start": "天津大学",
        "end": "天南大新址公交站"
      },
      {
        "txt": "677区间路",
        "start": "天山路",
        "end": "空港经济区公交站"
      },
      {
        "txt": "690区间路",
        "start": "华明新家园北站",
        "end": "东丽湖公交站"
      },
      {
        "txt": "单层47、48路",
        "start": "咸阳北路公交站",
        "end": "咸阳北路公交站"
      },
      {
        "txt": "观1路",
        "start": "富民路公交站",
        "end": "滦河道"
      },
      {
        "txt": "观2路",
        "start": "华苑小区公交站",
        "end": "第三医院终点站"
      },
      {
        "txt": "观光3路",
        "start": "程盛道公交站",
        "end": "天津青旅公司"
      },
      {
        "txt": "快1路",
        "start": "动物园公交站",
        "end": "丽苑小区公交站"
      },
      {
        "txt": "快2路",
        "start": "刘园公交站",
        "end": "动物园公交站"
      },
      {
        "txt": "双层47、48路",
        "start": "咸阳北路",
        "end": "咸阳北路"
      },
      {
        "txt": "通勤10路",
        "start": "青翠园",
        "end": "文化中心公交站"
      },
      {
        "txt": "通勤11路",
        "start": "文江东里",
        "end": "侯台公交站"
      },
      {
        "txt": "通勤12路",
        "start": "丽苑公交站",
        "end": "华天道"
      },
      {
        "txt": "通勤9路",
        "start": "刘园公交站",
        "end": "动物园公交站"
      },
      {
        "txt": "通勤快1路",
        "start": "动物园公交站",
        "end": "丽苑小区公交站"
      },
      {
        "txt": "专4路",
        "start": "天津滨海国际机场",
        "end": "唐山道"
      },
      {
        "txt": "612路",
        "start": "天南大新址公交站",
        "end": "南开大学"
      },
      {
        "txt": "620路",
        "start": "曹庄子花卉市场",
        "end": "高新区地铁站"
      },
      {
        "txt": "通勤5路",
        "start": "王顶堤公交站",
        "end": "太阳城公交站"
      },
      {
        "txt": "通勤6路",
        "start": "大寺村",
        "end": "天津站公交站"
      },
      {
        "txt": "通勤8路",
        "start": "雅士道公交站",
        "end": "东丽开发区"
      },
      {
        "txt": "通勤19路",
        "start": "金钟河大街公交站",
        "end": "汇海北里"
      },
      {
        "txt": "4022路",
        "start": "雅士道公交站",
        "end": "天津公交新能源基地"
      },
      {
        "txt": "4052路",
        "start": "金钟新市镇",
        "end": "万科魅力城"
      },
      {
        "txt": "4058路",
        "start": "东丽湖公交站",
        "end": "栖霞道"
      },
      {
        "txt": "4059路",
        "start": "金威创展园",
        "end": "本溪路地铁站"
      },
      {
        "txt": "638路",
        "start": "天津站",
        "end": "海泰南"
      },
      {
        "txt": "700路",
        "start": "辰兴路公交站",
        "end": "海泰北公交站"
      },
      {
        "txt": "824路",
        "start": "天安数码城公交站",
        "end": "天津站公交站"
      },
      {
        "txt": "862路",
        "start": "第六大道",
        "end": "海泰南"
      }
    ]
  }
}
