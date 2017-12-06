window.threeConfig = {
  "api": {
    "baseUrl": "https://xiansubway.i-xiaoma.com.cn/2017112100082202",
    "alipayAuthBaseUrl": "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm",
    "alipayTransitCardEntry": "https://render.alipay.com/p/f/public_transit/card_entry.html",
    "alipayMomUrl": "https://categoryservicetest.alipay-eco.com",
    "alipayUserUrl": "https://bus.i-xiaoma.com.cn/user-center-provider",
    "alipayCardManagementUrl": "https://bus.i-xiaoma.com.cn/card-management-provider",
    "alipayCardPayProviderUrl": "https://bus.i-xiaoma.com.cn/card-pay-provider"
  },
  "alipayCardInfo": {
    "appId": "2017112100082202",
    "scope": "auth_base",
    "sign": "RSA",
    "cardType": "S0610100",
    "bizType": "MEMBER_CARD",
    "templateId": "2017120422413920254573894",
    "subScene": "610100",
    "scene": "TRANSIT",
    "applyCardAction": "sign",
    "openCardAction": "use",
    "applyCardSource": "XIAN_CARD_APPLY",
    "openCardSource": "XIAN_CARD_USE",
    "useCardSource": "XIAN_BUS_USE",
    "busCode": "alipays://platformapi/startapp?appId=60000098&url=%2Fwww%2Fcard_entry.html%3Fscene%3DTRANSIT%26subScene%3D610100%26cardType%3DS0610100%26source%XIAN_BUS_USE%26__webview_options__%3DcanPullDown%253DYES%2526pullRefresh%253DYES",
    "rechargeUnitName": "元",
    "storeAppId": "",
    "storeSign": ""
  },
  "global": {
    "cardName": "西安地铁电子卡",
    "cityName": "西安",
    "cityCode": "610100",
    "showUrl": false,
    "onWhite": false,
    "whiteList": [],
    "linkOldUrl": {
      "buscode": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=buscode",
      "other": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=carddetail"
    }
  },
  "card": {
    "image": "../../static/img/xian_subway_card.png"
  },
  "openCard": {
    "bgImage": "../../static/img/openCard_bg.jpg",
    "getCardBtnVal": "立即领卡",
    "getCardHref": "https://memberprod.alipay.com/account/openform/activecard.htm?app_id=2017112100082202&template_id=2017120422413920254573894&__webview_options__=canPullDown%3dNO%26transparentTitle%3dauto&callback=https://xiansubway.i-xiaoma.com.cn/2017112100082202/cardIn&biz_type=scard",
    "cardDescription": {
      "01": {
        "header": "先乘车、后付款",
        "footer": "无需充值即可使用，从您支付宝账户扣款"
      }
    },
    "popupList": [
      {
        "name": "《西安地铁电子卡协议》",
        "href": "https://xiansubway.i-xiaoma.com.cn/2017112100082202#/protocol"
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
    "company": "西安地铁有限",
    "companyShort": "西安地铁",
    "telephone": "xxxxx"
  },
  "cardDetail": {
    "bgImage": "../../static/img/card_detail_bg.jpg",
    "bannerConfig": {
      "visible": false,
      "href": "http://baidu.com",
      "src": "../../static/img/banner2.png"
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
      "rightBtnVal": "立即充值"
    },
    "menuOptions": [
      {
        "label": "余额查询",
        "link": "/balance",
        "visible": true,
        "icon": "../../static/img/balance_icon.png"
      },
      {
        "label": "卡片充值",
        "link": "/recharge",
        "visible": true,
        "icon": "../../static/img/recharge_icon.png"
      },
      {
        "label": "自动充值",
        "link": "/rechargeAuto",
        "visible": true,
        "icon": ""
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
        "icon": "../../static/img/trafficSearch_icon.png"
      },
      {
        "label": "使用帮助",
        "link": "/help",
        "icon": "../../static/img/userFeedBack_icon.png"
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
  "help": "[{\"question\":\"现在已开通线路支持优惠换乘吗？\",\"answer\":\"支付宝扫码换乘优惠预计在8月份正式推出，具体发布时间请以官方公告为准。\"},{\"question\":\"现在使用武汉电子公交卡乘车有优惠吗？\",\"answer\":\"使用武汉电子公交卡乘车现享8折优惠！后续更多优惠活动持续推出。\"},{\"question\":\"武汉现在已开通刷码乘车的线路有哪些？\",\"answer\":\"<a href='#/openLine'><font color='red'>武汉已开通线路</font></a>,未来会陆续开放其他公交线路。\"},{\"question\":\"武汉电子公交卡都有哪些智能服务和功能？\",\"answer\":\"武汉电子公交卡系全国首发，包含了公交付款，线路查询，收藏线路，线路提醒，乘车记录等众多功能。\"},{\"question\":\"如何使用武汉电子公交卡刷码乘车？\",\"answer\":\"首次使用，打开支付宝搜索公交付款，或搜索“武汉公交”生活号，领取“武汉电子公交卡”即可进行刷码付款；再次使用直接从支付宝首页“卡包”选择“武汉电子公交卡”进行刷码乘车。\"},{\"question\":\"BRT线如何使用武汉电子公交卡刷码乘车？\",\"answer\":\"进入BRT站，刷码专用进站通道，打开支付宝公交付款，刷码进站即可。公交线路上车处找到刷码机具，刷码乘车即可。\"},{\"question\":\"武汉电子公交卡是如何刷码付款的？\",\"answer\":\"刷码上车后，稍后会从您的支付宝账户扣款，资金渠道以您的支付设置为准。\"},{\"question\":\"反馈建议通道有吗？\",\"answer\":\"为更好为武汉市民提供服务，您有任何反馈和建议，都可以通过信息中心客服热线：027-84510000反馈或QQ群523143023咨询,反馈时间：周一到周五，早上9:00到下午5:00。\"}]",
  "openLine": {
    "searchConfig": {
      "placeholder": "请输入您想查询的开通线路名称",
      "nullTips": "该线路未开通手机支付,敬请期待",
      "nullImage": "../../static/img/open_line_null.png"
    },
    "openLineOptions": [
      {
        "txt": "1路",
        "start": "建设大道双墩",
        "end": "芦沟桥路"
      }
    ]
  }
}

