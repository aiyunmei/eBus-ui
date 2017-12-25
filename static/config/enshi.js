window.threeConfig = {
  "api": {
    "baseUrl": "https://xmbus.i-xiaoma.com.cn:8080/2017120600411001",
    "alipayAuthBaseUrl": "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm",
    "alipayTransitCardEntry": "https://render.alipay.com/p/f/public_transit/card_entry.html",
    "alipayMomUrl": "https://categoryservicetest.alipay-eco.com",
    "alipayUserUrl": "https://bus.i-xiaoma.com.cn/user-center-provider",
    "alipayCardManagementUrl": "https://bus.i-xiaoma.com.cn/card-management-provider",
    "alipayCardPayProviderUrl": "https://bus.i-xiaoma.com.cn/card-pay-provider"
  },
  "alipayCardInfo": {
    "appId": "2017120600411001",
    "scope": "auth_base",
    "sign": "RSA",
    "cardType": "T0422801",
    "bizType": "MEMBER_CARD",
    "templateId": "2017122310534768594459975",
    "subScene": "422800",
    "scene": "TRANSIT",
    "applyCardAction": "sign",
    "openCardAction": "use",
    "applyCardSource": "ENSHI_BUS_APPLY",
    "openCardSource": "ENSHI_CARD_USE",
    "useCardSource": "ENSHI_BUS_USE",
    "busCode": "alipays://platformapi/startapp?appId=60000098&url=%2Fwww%2Fcard_entry.html%3Fscene%3DTRANSIT%26subScene%3D422800%26cardType%3DT0422801%26source%ENSHI_BUS_USE%26__webview_options__%3DcanPullDown%253DYES%2526pullRefresh%253DYES",
    "rechargeUnitName": "元",
    "storeAppId": "",
    "storeSign": ""
  },
  "global": {
    "cardName": "恩施电子公交卡",
    "cityName": "恩施",
    "cityCode": "422800",
    "showUrl": true,
    "onWhite": false,
    "whiteList": [],
    "linkOldUrl": {
      "buscode": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=buscode",
      "other": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=carddetail"
    }
  },
  "card": {
    "image": "../../static/img/enshi_card.jpg"
  },
  "openCard": {
    "bgImage": "../../static/img/openCard_bg.jpg",
    "getCardBtnVal": "立即领卡",
    "getCardHref": "https://memberprod.alipay.com/account/openform/activecard.htm?app_id=2017120600411001&template_id=2017122310534768594459975&__webview_options__=canPullDown%3dNO%26transparentTitle%3dauto&callback=https://xmbus.i-xiaoma.com.cn:8080/2017120600411001/cardIn&biz_type=scard",
    "cardDescription": {
      "01": {
        "header": "先乘车、后付款",
        "footer": "无需充值即可使用，从您支付宝账户扣款"
      }
    },
    "popupList": [
      {
        "name": "《恩施电子公交卡用户协议》",
        "href": "https://xmbus.i-xiaoma.com.cn:8080/2017120600411001#/protocol"
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
    "company": "恩施公共交通有限",
    "companyShort": "恩施公交",
    "telephone": "xxx"
  },
  "cardDetail": {
    "bgImage": "../../static/img/card_detail_bg.jpg",
    "noticeConfig": {
      "visible": false,
      "content": "恩施电子公交卡,欢迎您!",
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
        "link": "/openCard",
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
      "question": "现在使用恩施电子公交卡乘车有优惠吗？",
      "answer": "使用恩施电子公交卡乘车暂时不支持优惠。优惠活动预计近期退出，具体发布时间请以官方公告为准。"
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
        "txt": "1路",
        "start": "111",
        "end": "222"
      }
    ]
  }
}
