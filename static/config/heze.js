window.threeConfig = {
  "api": {
    "baseUrl": "https://xmbus.i-xiaoma.com.cn:8080/2017071907813571",
    "alipayAuthBaseUrl": "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm",
    "alipayTransitCardEntry": "https://render.alipay.com/p/f/public_transit/card_entry.html",
    "alipayMomUrl": "https://categoryservicetest.alipay-eco.com",
    "alipayUserUrl": "https://xmbus.i-xiaoma.com.cn:8088/api",
    "alipayCardManagementUrl": "https://xmbus.i-xiaoma.com.cn:9191/api",
    "alipayCardPayProviderUrl": "https://bus.i-xiaoma.com.cn/card-pay-provider"
  },
  "alipayCardInfo": {
    "appId": "2017071907813571",
    "scope": "auth_base",
    "sign": "RSA",
    "cardType": "T0371700",
    "bizType": "MEMBER_CARD",
    "templateId": "2017122721055377275583179",
    "subScene": "371700",
    "scene": "TRANSIT",
    "applyCardAction": "sign",
    "openCardAction": "use",
    "applyCardSource": "HEZE_BUS_APPLY",
    "openCardSource": "HEZE_CARD_USE",
    "useCardSource": "HEZE_BUS_USE",
    "busCode": "alipays://platformapi/startapp?appId=60000098&url=%2Fwww%2Fcard_entry.html%3Fscene%3DTRANSIT%26subScene%3D371700%26cardType%3DT0371700%26source%HEZE_BUS_USE%26__webview_options__%3DcanPullDown%253DYES%2526pullRefresh%253DYES",
    "rechargeUnitName": "元",
    "storeAppId": "",
    "storeSign": ""
  },
  "global": {
    "cardName": "菏泽电子公交卡",
    "cityName": "菏泽",
    "cityCode": "371700",
    "showUrl": true,
    "onWhite": false,
    "whiteList": [],
    "linkOldUrl": {
      "buscode": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=buscode",
      "other": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=carddetail"
    }
  },
  "card": {
    "image": "../../static/img/heze_card.jpg"
  },
  "openCard": {
    "bgImage": "../../static/img/openCard_bg.jpg",
    "getCardBtnVal": "立即领卡",
    "getCardHref": "https://memberprod.alipay.com/account/openform/activecard.htm?app_id=2017071907813571&template_id=2017122721055377275583179&__webview_options__=canPullDown%3dNO%26transparentTitle%3dauto&callback=https://xmbus.i-xiaoma.com.cn:8080/2017071907813571/cardIn&biz_type=scard",
    "cardDescription": {
      "01": {
        "header": "先乘车、后付款",
        "footer": "无需充值即可使用，从您支付宝账户扣款"
      }
    },
    "popupList": [
      {
        "name": "《菏泽电子公交卡用户协议》",
        "href": "https://xmbus.i-xiaoma.com.cn:8080/2017071907813571#/protocol"
      },
      {
        "name": "《芝麻服务及支付宝公交付款协议》",
        "href": "https://render.alipay.com/p/f/fd-j5c107e4/index.html"
      }
    ]
  },
  "openCardEnd": {
    "busyImage": "../../static/img/open_card_end_busy.png"
  },
  "protocol": {
    "company": "菏泽市公共汽车",
    "companyShort": "菏泽公交",
    "telephone": "0530-5700369"
  },
  "cardDetail": {
    "bgImage": "../../static/img/card_detail_bg.jpg",
    "noticeConfig": {
      "visible": false,
      "content": "菏泽电子公交卡,欢迎您!",
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
      "okVal": "残忍退卡",
      "cancelVal": "我在想想",
      "image": "../../../static/img/card_detail_card_close_alert.png",
      "content": "退卡后您将不能再享受刷手机乘公交<br/>的便捷服务"
    },
    "successAlertConfig": {
      "imgUrl": "../../static/img/card_detail_alert.png",
      "leftBtnVal": "查看卡片",
      "rightBtnVal": "立即使用"
    },
    "menuOptions": [
      {
        "label": "余额查询",
        "link": "/balance",
        "icon": "../../static/img/balance_icon.png",
        "visible": true
      },
      {
        "label": "卡片充值",
        "link": "/recharge",
        "icon": "../../static/img/recharge_icon.png",
        "visible": true
      },
      {
        "label": "自动充值",
        "link": "/rechargeAuto",
        "icon": "../../static/img/rechargeAuto_icon.png",
        "visible": true
      },
      {
        "label": "用户反馈",
        "link": "/userFeedBack",
        "icon": "../../static/img/userFeedBack_icon.png",
        "visible": true
      },
      {
        "label": "乘车记录",
        "link": "alipays://platformapi/startapp?appId=20000076&returnHome=NO&bizSubType=75&showSearch=false&title=%E4%B9%98%E8%BD%A6%E8%AE%B0%E5%BD%95",
        "urlType": "outside",
        "icon": "../../static/img/trafficLog_icon.png"
      },
      {
        "label": "开通线路",
        "link": "/openLine",
        "icon": "../../static/img/openLine_icon.png"
      },
      {
        "label": "使用帮助",
        "link": "/help",
        "icon": "../../static/img/help_icon.png"
      },
      {
        "label": "退卡申请",
        "link": "/cardClose",
        "icon": "../../static/img/cardClose_icon.png"
      }
    ]
  },
  "cardClose": {
    "day": 7,
    "timeImage": "../../static/img/card_close_time.jpg"
  },
  "recharge": {
    "headerImage": "../../static/img/wh_recharge_header_bg.png",
    "RMBThreshold": 100000,
    "list": [
      {
        "label": "0.01元",
        "value": 0.01,
        "tipItem": {
          "imgUrl": "../../static/img/recharge_list_body_tip.png",
          "label": "立减25",
          "width": "1.6rem"
        }
      },
      {
        "label": "0.05元",
        "value": 0.05,
        "tipItem": {
          "imgUrl": "../../static/img/recharge_list_body_tip.png",
          "label": "立减25",
          "width": "1.6rem"
        }
      },
      {
        "label": "10元",
        "value": 10,
        "tipItem": {
          "imgUrl": "../../static/img/recharge_list_body_tip.png",
          "label": "享8.6折",
          "width": "1.6rem"
        }
      },
      {
        "label": "20元",
        "value": 20,
        "tipItem": {
          "imgUrl": "../../static/img/recharge_list_body_tip.png",
          "label": "享8折",
          "width": "1.6rem"
        }
      },
      {
        "label": "50元",
        "value": 50,
        "tipItem": {
          "imgUrl": "../../static/img/recharge_list_body_tip.png",
          "label": "惠",
          "width": "1.6rem"
        }
      }
    ],
    "rechargeProtocol": "<p>尊敬的客户，为保障您的合法权益，请您在点击“立即充值”按钮前，完整、仔细地阅读本充值协议。当您继续点击“立即充值”按钮，即视为您已阅读、理解本协议，并同意按本协议规定执行。</p><p><strong>1、充值方式</strong></p><p>本活动仅限市民对武汉电子公交卡充值；</p><p><strong>2、储值优惠</strong></p><p>储值用户可享受乘车8折优惠，及平台推出的不定时充值优惠活动，如，您充值100元，根据当时的充值优惠9折，则你实际付款90元，您的账户内显示的充值金额为100元，超出的10元即为充值赠送金额；</p><p>3、账户金额仅可用于武汉公交提供的支付宝公交刷码服务；</p><p>4、充值后，账户余额使用不设有效期，不能转移、转赠；</p><p>5、请您根据自己的消费情况充值，我们对充值次数不设限制，最高充值上限1000元；</p><p>6、如有疑问请咨询客服，客服热线027-84510000或QQ群523143023，反馈时间：周一至周五，AM9:00-PM17:00。</p>"
  },
  "balance": {
    "headerImage": "../../static/img/balance_header_bg.jpg"
  },
  "payResult": {
    "alipayLogoImage": "https://t.alipayobjects.com/images/rmsweb/T1B8lgXi4iXXXXXXXX.png"
  },
  "help": [
    {
      "question": "菏泽电子公交卡是什么？",
      "answer": "菏泽电子公交卡是菏泽公交、小码联城和支付宝共同推出的线上电子公交卡，乘客可在支付宝内领取“菏泽电子公交卡”，乘车时只要打开支付宝的菏泽公交刷码页面，即可刷码乘车。"
    },
    {
      "question": "如何领取“菏泽电子公交卡”？",
      "answer": "（1）打开支付宝——选择【付款】——点击底部【乘车码】——按照领卡提示，即可领取您专属的“菏泽电子公交卡”（2）或在支付宝内搜素“菏泽公交”生活号，按提示领取专属公交卡"
    },
    {
      "question": "领卡后如何使用？",
      "answer": "打开支付宝——选择【付款】——点击底部【乘车码】——将乘车码对准公交车上扫码窗口——听到【扫码成功】语音提示即可"
    },
    {
      "question": "“菏泽电子公交卡”是如何收费的？乘车票价是多少？",
      "answer": "“菏泽电子公交卡”领取电子公交卡免费，乘车按照车费收取“菏泽电子公交卡”先开通的线路仅为试点线路，目前每次刷码按常规票价（投币票价）进行扣款；"
    },
    {
      "question": "“菏泽电子公交卡”是否有换乘优惠？是否有乘车优惠？",
      "answer": "目前，菏泽仅开通部分线路作为试运营线路，暂无乘车优惠。换乘优惠暂时未开通，尽请期待。"
    },
    {
      "question": "使用“菏泽电子公交卡”乘车发票怎么开？乘车记录有么？",
      "answer": "目前，菏泽电子公交卡不支持乘车发票开具您可通过支付宝——【卡包】——【菏泽电子公交卡】——【使用记录】查询乘车记录"
    },
    {
      "question": "哪些线路可以使用支付宝乘车？其他线路什么时候可以上线？",
      "answer": "您可通过支付宝——【卡包】——【菏泽电子公交卡】——【开通线路】查询已开通乘车刷码功能的公交线路其他线路的乘车刷码功能在逐步开通中"
    },
    {
      "question": "还有哪些城市可以使用支付宝乘车？",
      "answer": "您可通过支付宝内【乘车码】-【切换卡片】-【领取新卡】来查看现有开通公交卡（及乘车码）业务的城市"
    },
    {
      "question": "“菏泽电子公交卡”可以充值实体公交卡么？",
      "answer": "目前，“菏泽电子公交卡”仅支持乘车刷码功能，充值实体卡仍需要到公交充值点进行充值；"
    },
    {
      "question": "为什么无法领取“菏泽电子公交卡”",
      "answer": "（1）您在领卡时，同一用户只能领取一张公交卡，若该账号无法领取，请查看是否有其他支付宝账号领取“菏泽电子公交卡”（2）若依然无法领取“菏泽电子公交卡”，请查看是否有支付宝内芝麻信用是否达到550分，或在支付宝“花呗”是否有欠款，如信用分未达到550分或“花呗”“借呗”有违期情况均不可领取“一卡通”（3）如上述问题不存在仍不可领卡，请在支付宝内发起咨询或支付宝客服电话：95188或添加QQ群：523143023进行咨询"
    },
    {
      "question": "上车时不小心多刷了好几遍，扣款如何退回？",
      "answer": "若您在乘车时对刷码金额有疑问，均可在支付宝内发起客服咨询，待客服审核该笔交易无误后，多余费用将会在工作日内返还到您账户。客服咨询流程：打开【菏泽电子公交卡】——点击【使用记录】——找到有疑问的乘车记录并打开【账单详情】——从【对此订单有疑问】发起咨询"
    },
    {
      "question": "使用乘车刷码刷码机没反应怎么办？",
      "answer": "（1）手机乘车码未对准刷码窗口，可稍微调整对准方向或距离（2）若您依然无法刷码，可能是因为机具问题或您的乘车码被冻结（支付宝信用不够或花呗违期），若是机具问题，请告知公交司机帮助。"
    },
    {
      "question": "我遇到了支付问题，该怎么办？",
      "answer": "（1）确认用户手机的网络状况；（2）是否已经支付宝实名认证；（3）确认用户支付宝账户绑定银行卡或向您的支付宝“余额”或“余额宝”进行充值；（4）支付宝客服电话：96188【二维码空白/打不开】（1）建议升级支付宝到最新版本；（2）若升级后依旧不行，可尝试致电支付宝客服96188（3）可能为手机型号/版本问题，可联系支付宝【案例：账户提示前两笔款项处于等待付款状态，第三次开始无法刷码】（1）是否用户授信被冻结？导致不能生码。建议用户在给支付宝账户充钱或者还掉花呗、借呗等信贷产品（建议用户直接联系支付宝客服96188询问）【刷码后提示乘车码无效】请确认您是否是用支付宝城市乘车码服务，乘车码打开方式：支付宝【首页】—【付款】-切换至【乘车码】-刷码乘车"
    },
    {
      "question": "不想用了，如何退卡？",
      "answer": "若用户不想使用线上公交卡后，乘车时不使用“菏泽电子公交卡”即可，该卡不会产生任何扣费情况。若用户希望直接退卡，则需通过【乘车码】——点击卡名【菏泽电子公交卡】——进入卡片详情页——【退卡申请】即可"
    }
  ],
  "openLine": {
    "searchConfig": {
      "placeholder": "请输入您想查询的开通线路名称",
      "nullTips": "该线路未开通手机支付,敬请期待",
      "nullImage": "../../static/img/open_line_null.png"
    },
    "openLineOptions": [
      {
        "end": "齐鲁工业大学",
        "start": "菏泽站",
        "txt": "2路"
      }
    ]
  }
}
