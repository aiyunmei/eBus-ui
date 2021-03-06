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
    "onWhite": "rechargeDev",
    "whiteList": [
      '2088302427608644'
    ],
    "linkOldUrl": {
      "buscode": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=buscode",
      "other": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=carddetail"
    },
    "tipLabel": "乘车8折"
  },
  "card": {
    "image": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/enshi_card.jpg"
  },
  "openCard": {
    "bgImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/openCard_bg.jpg",
    "getCardBtnVal": "立即领卡",
    "getCardHref": "https://memberprod.alipay.com/account/openform/activecard.htm?app_id=2017120600411001&template_id=2017122310534768594459975&__webview_options__=canPullDown%3dNO%26transparentTitle%3dauto&callback=https://xmbus.i-xiaoma.com.cn:8080/2017120600411001/cardIn&biz_type=scard",
    "cardDescription": {
      "01": {
        "header": "先乘车、后付款",
        "footer": "无需充值即可使用，从您支付宝账户扣款"
      },
      "02": {
        "header": "先乘车、后付款",
        "footer": "无需充值即可使用，从您支付宝账户扣款"
      }
    },
    "popupList": [
      {
        "name": "《公交先享后付服务和芝麻服务等相关协议》",
        "href": "https://render.alipay.com/p/f/fd-j5c107e4/index.html"
      },
      {
        "name": "《恩施电子公交卡公交乘车码用户服务协议》",
        "href": "https://xmbus.i-xiaoma.com.cn:8080/2017120600411001#/protocol"
      }
    ]
  },
  "openCardEnd": {
    "busyImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/open_card_end_busy.png"
  },
  "protocol": {
    "company": "恩施市公共汽车",
    "companyShort": "恩施公交",
    "telephone": "0718-8247898"
  },
  "cardDetail": {
    "bgImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_bg.jpg",
    "noticeConfig": {
      "visible": true,
      "content": "恩施电子公交卡,欢迎您!",
      "width": "100%"
    },
    "bannerConfig": {
      "visible": true,
      "isAlipayMon": false,
      "href": "http://baidu.com",
      "src": "../../static/img/banner2.png",
      "adPid": "213213123123"
    },
    "useBtnVal": "立即使用",
    "cardCloseConfirm": {
      "okVal": "残忍退卡",
      "cancelVal": "我在想想",
      "image": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_card_close_alert.png",
      "content": "退卡后您将不能再享受刷手机乘公交<br/>的便捷服务"
    },
    "successAlertConfig": {
      "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_alert.png",
      "leftBtnVal": "查看卡片",
      "rightBtnVal": "立即使用"
    },
    "menuOptions": [
      {
        "label": "余额查询",
        "link": "/balance",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/balance_icon.png"
      },
      {
        "label": "卡片充值",
        "link": "/recharge",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_icon.png"
      },
      {
        "label": "自动充值",
        "link": "/rechargeAuto",
        "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/rechargeAuto_icon.png"
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
          "width": "2.5rem"
        }
      },
      {
        "label": "0.05元",
        "value": 0.05,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "立减25",
          "width": "2.5rem"
        }
      },
      {
        "label": "10元",
        "value": 10,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "享8.6折",
          "width": "2.5rem"
        }
      },
      {
        "label": "20元",
        "value": 20,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "享8折",
          "width": "2.5rem"
        }
      },
      {
        "label": "50元",
        "value": 50,
        "tipItem": {
          "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
          "label": "惠",
          "width": "2.5rem"
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
      "question": "现在已开通线路支持优惠换乘吗？",
      "answer": "支付宝扫码换乘优惠预计在近期推出，具体发布时间请以官方公告为准。"
    },
    {
      "question": "现在使用恩施公交一卡通乘车有优惠吗？",
      "answer": "使用恩施电子公交卡乘车暂时不支持优惠。优惠活动正在测试，后续优惠活动敬请期待。"
    },
    {
      "question": "恩施现在已开通刷码乘车的线路有哪些？",
      "answer": "恩施目前已开通2路和6路2条公交线路的移动支付试运营，后期随着新的设备更换，恩施市将在2018年2月中旬实现所有线路移动支付功能，覆盖恩施市所有线路和公交车。"
    },
    {
      "question": "恩施公交卡都有哪些智能服务和功能？",
      "answer": "恩施公交一卡通，包含了公交付款，乘车记录等众多功能，后续将开放更多新功能，尽请期待。"
    },
    {
      "question": "如何使用恩施公交车刷码乘车？",
      "answer": "首次使用，打开支付宝，选择“城市服务”，点击“电子公交卡”，按照领取步骤就可以领取到恩施公交一卡通啦！"
    },
    {
      "question": "恩施公交卡是如何刷码付款的？",
      "answer": "刷码上车后，，点击扫码，选择底部乘车码，对准刷卡机扫码框，听到扫码成功即为付款成功。稍后会从您的支付宝账户扣款，资金渠道以您的支付设置为准。"
    },
    {
      "question": "反馈建议通道有吗？",
      "answer": "为更好为恩施市民提供服务，您有任何反馈和建议，都可以通过恩施公交客服电话：0718-8247898或支付宝：95188或在线客服进行反馈。"
    },
    {
      "question": "电子公交卡有什么使用门槛吗？",
      "answer": "开通电子公交卡后完成实名认证，每个用户只可领取一张电子公交卡，该卡关联个人实名信息。"
    },
    {
      "question": "如果不想用了，可以退卡退款吗？",
      "answer": "如果不想用了，可以退卡退款吗？"
    },
    {
      "question": "使用电子公交卡/乘车码可以乘坐地铁吗？",
      "answer": "目前暂未开通地铁刷码乘车功能，后续可陆续关注哦。"
    },
    {
      "question": "电子公交卡有什么使用门槛吗？",
      "answer": "开通电子公交卡后完成实名认证，每个用户只可领取一张电子公交卡，该卡关联个人实名信息。"
    },
    {
      "question": "我遇到了支付问题，该怎么办？",
      "answer": "（1）确认用户手机的网络状况；（2）是否已经支付宝实名认证；（3）确认用户支付宝账户绑定银行卡或向您的支付宝“余额”或“余额宝”进行充值；（4）支付宝客服电话：96188【二维码空白/打不开】（1）建议升级支付宝到最新版本；（2）若升级后依旧不行，可尝试致电支付宝客服96188（3）可能为手机型号/版本问题，可联系支付宝【案例：账户提示前两笔款项处于等待付款状态，第三次开始无法刷码】（1）是否用户授信被冻结？导致不能生码。建议用户在给支付宝账户充钱或者还掉花呗、借呗等信贷产品（建议用户直接联系支付宝客服96188询问）   【刷码后提示乘车码无效】（1）确认用户手机时间与北京时间是否一致"
    },
    {
      "question": "学生卡和老年人等能否领卡/享受优惠？",
      "answer": "目前暂开通特殊卡优惠功能，学生/老年人乘车优惠目前只能通过实体卡享受。嘉兴公交支付宝正在积极解决该问题。后续将会同步相关优惠服务"
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
        "txt": "2A路",
        "start": "市公安局宿舍区",
        "end": "黄泥坝东方电器"
      },
      {
        "txt": "2B路",
        "start": "清江种业",
        "end": "朱家坳"
      },
      {
        "txt": "6路",
        "start": "火车站",
        "end": "东门医院"
      }
    ]
  }
}
