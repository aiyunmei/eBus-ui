window.threeConfig = {
  "api": {
    "baseUrl": "https://xmbus.i-xiaoma.com.cn:8080/2017121300671681",
    "alipayAuthBaseUrl": "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm",
    "alipayTransitCardEntry": "https://render.alipay.com/p/f/public_transit/card_entry.html",
    "alipayMomUrl": "https://categoryservicetest.alipay-eco.com",
    "alipayUserUrl": "https://bus.i-xiaoma.com.cn/user-center-provider",
    "alipayCardManagementUrl": "https://bus.i-xiaoma.com.cn/card-management-provider",
    "alipayCardPayProviderUrl": "https://bus.i-xiaoma.com.cn/card-pay-provider"
  },
  "alipayCardInfo": {
    "appId": "2017121300671681",
    "scope": "auth_base",
    "sign": "RSA2",
    "cardType": "T0370600",
    "bizType": "MEMBER_CARD",
    "templateId": "2018020821560428520683872",
    "subScene": "370600",
    "scene": "TRANSIT",
    "applyCardAction": "sign",
    "openCardAction": "use",
    "applyCardSource": "YANTAI_BUS_APPLY",
    "openCardSource": "YANTAI_CARD_USE",
    "useCardSource": "YANTAI_BUS_USE",
    "busCode": "alipays://platformapi/startapp?appId=60000098&url=/www/card_entry.html?scene=TRANSIT&subScene=370600&cardType=T0370600&source%YANTAI_BUS_USE&__webview_options__=canPullDown%3DYES%26pullRefresh%3DYES",
    "rechargeUnitName": "元",
    "storeAppId": "2017121300671681",
    "storeSign": "RSA2"
  },
  "global": {
    "cardName": "烟台市民卡",
    "cityName": "烟台",
    "cityCode": "370600",
    "showUrl": true,
    "onWhite": "rechargeProd",
    "whiteList": [],
    "linkOldUrl": {
      "buscode": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=buscode",
      "other": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=carddetail"
    }
  },
  "card": {
    "image": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/yantai_card.jpg"
  },
  "openCard": {
    "bgImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/openCard_bg.jpg",
    "getCardBtnVal": "立即领卡",
    "getCardHref": "https://memberprod.alipay.com/account/openform/activecard.htm?app_id=2017121300671681&template_id=2018020821560428520683872&__webview_options__=canPullDown=NO&transparentTitle=auto&callback=https://xmbus.i-xiaoma.com.cn:8080/2017121300671681/cardIn&biz_type=scard",
    "cardDescription": {
      "01": {
        "header": "请先充值再享受扫码乘车服务",
        "footer": ""
      }
    },
    "popupList": [{
      "name": "《烟台市民卡用户协议》",
      "href": "https://xmbus.i-xiaoma.com.cn:8080/2017121300671681#/protocol"
    }, {
      "name": "《公交先享后付服务和芝麻服务等相关协议》",
      "href": "https://render.alipay.com/p/f/fd-j5c107e4/index.html"
    }]
  },
  "openCardEnd": {
    "busyImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/open_card_end_busy.png"
  },
  "protocol": {
    "company": "烟台公共交通有限",
    "companyShort": "烟台公交",
    "telephone": "400-03164111"
  },
  "cardDetail": {
    "bgImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_bg.jpg",
    "noticeConfig": {
      "visible": false,
      "content": "烟台市民卡,欢迎您!",
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
      "cancelVal": "我再想想",
      "image": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_card_close_alert.png",
      "content": "退卡后您将不能再享受刷手机乘公交<br/>的便捷服务"
    },
    "successAlertConfig": {
      "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_detail_alert.png",
      "leftBtnVal": "查看卡片",
      "rightBtnVal": "立即充值"
    },
    "menuOptions": [{
      "label": "余额查询",
      "link": "/balance",
      "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/balance_icon.png"
    }, {
      "label": "卡片充值",
      "link": "/recharge",
      "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_icon.png"
    }, {
      "label": "自动充值",
      "link": "/rechargeAuto",
      "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/rechargeAuto_icon.png"
    }, {
      "label": "用户反馈",
      "link": "/userFeedBack",
      "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/userFeedBack_icon.png",
      "visible": true
    }, {
      "label": "乘车记录",
      "link": "alipays://platformapi/startapp?appId=20000076&returnHome=NO&bizSubType=75&showSearch=false&title=ä¹è½¦è®°å½",
      "urlType": "outside",
      "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/trafficLog_icon.png"
    }, {
      "label": "开通线路",
      "link": "/openLine",
      "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/openLine_icon.png",
      "visible": true
    }, {
      "label": "使用帮助",
      "link": "/help",
      "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/help_icon.png"
    }, {
      "label": "退卡申请",
      "link": "/cardClose",
      "icon": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/cardClose_icon.png",
      "visible": true
    }]
  },
  "cardClose": {
    "day": 7,
    "timeImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/card_close_time.jpg"
  },
  "recharge": {
    "headerImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/wh_recharge_header_bg.png",
    "RMBThreshold": 100000,
    "list": [{
      "label": "0.01元",
      "value": 0.01,
      "tipItem": {
        "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
        "label": "哈哈哈",
        "width": "1.6rem",
        "visible": true
      }
    }, {
      "label": "0.05元",
      "value": 0.05,
      "tipItem": {
        "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
        "label": "",
        "width": "1.6rem"
      }
    }, {
      "label": "1元",
      "value": "1",
      "tipItem": {
        "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
        "label": "",
        "width": "1.6rem"
      }
    }, {
      "label": "5元",
      "value": "5",
      "tipItem": {
        "imgUrl": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/recharge_list_body_tip.png",
        "label": "",
        "width": "1.6rem"
      }
    }],
    "rechargeProtocol": "<p>尊敬的客户，为保障您的合法权益，请您在点击“立即充值”按钮前，完整、仔细地阅读本充值协议。当您继续点击“立即充值”按钮，即视为您已阅读、理解本协议，并同意按本协议规定执行。</p><p><strong>1、充值方式</strong></p><p>本活动仅限市民对武汉电子公交卡充值；</p><p><strong>2、储值优惠</strong></p><p>储值用户可享受乘车8折优惠，及平台推出的不定时充值优惠活动，如，您充值100元，根据当时的充值优惠9折，则你实际付款90元，您的账户内显示的充值金额为100元，超出的10元即为充值赠送金额；</p><p>3、账户金额仅可用于武汉公交提供的支付宝公交刷码服务；</p><p>4、充值后，账户余额使用不设有效期，不能转移、转赠；</p><p>5、请您根据自己的消费情况充值，我们对充值次数不设限制，最高充值上限1000元；</p><p>6、如有疑问请咨询客服，客服热线027-84510000或QQ群523143023，反馈时间：周一至周五，AM9:00-PM17:00。</p>"
  },
  "balance": {
    "headerImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/balance_header_bg.jpg"
  },
  "payResult": {
    "alipayLogoImage": "https://t.alipayobjects.com/images/rmsweb/T1B8lgXi4iXXXXXXXX.png"
  },
  "help": [{
    "question": "烟台市民卡是什么？",
    "answer": "烟台市民卡是烟台公交、小码联城和支付宝共同推出的线上电子公交卡，乘客可在支付宝内领取“烟台市民卡”，乘车时只要打开支付宝的烟台市民卡公交刷码页面，即可刷码乘公交。"
  }, {
    "question": "如何领取“烟台市民卡”？",
    "answer": "（1）打开支付宝——选择烟台【城市服务】——选择【长安通乘车码】——按照领卡提示，点击【立即领卡】，即可领取您专属的“烟台市民卡”（2）或在支付宝内搜素“长安通”生活号，按提示领取专属公交卡"
  }, {
    "question": "领卡后如何使用？",
    "answer": "(1）打开支付宝——选择【卡包】——打开【烟台市民卡】——点击【去刷码】——将乘车码对准公交车上扫码窗口——听到【扫码成功】语音提示即可乘车(2）打开支付宝——选择烟台【城市服务】——点击【长安通乘车码】——将乘车码对准公交车上扫码窗口——听到【扫码成功】语音提示即可"
  }, {
    "question": "“烟台市民卡”是如何收费的？乘车票价是多少？",
    "answer": "“烟台市民卡”领取电子公交卡免费，乘车按照车费收取 “烟台市民卡”先开通的线路仅为试点线路，目前每次刷码按常规票价（投币票价）进行扣款；"
  }, {
    "question": "“烟台市民卡”是否有换乘优惠？是否有乘车优惠？",
    "answer": "目前，烟台公交仅开通部分线路作为试运营线路，暂无乘车优惠。 换乘优惠暂时未开通，尽请期待。"
  }, {
    "question": "使用“烟台市民卡”乘车发票怎么开？乘车记录有么？",
    "answer": "目前，烟台市民卡不支持乘车发票开具 您可通过支付宝——【卡包】——【烟台市民卡】——【使用记录】查询乘车记录"
  }, {
    "question": "哪些线路可以使用支付宝乘车？其他线路什么时候可以上线？",
    "answer": "您可通过支付宝——【卡包】——【烟台市民卡】——【开通线路】查询已开通乘车刷码功能的公交线路 其他线路的乘车刷码功能在逐步开通中"
  }, {
    "question": "还有哪些城市可以使用支付宝乘车？",
    "answer": "您可通过支付宝内【乘车码】-【切换卡片】-【领取新卡】来查看现有开通公交卡（及乘车码）业务的城市"
  }, {
    "question": "“烟台市民卡”可以充值实体公交卡么？",
    "answer": "目前，“烟台市民卡”仅支持乘车刷码功能，充值实体卡仍需要到公交充值点或使用长安通其他充值方式进行充值；"
  }, {
    "question": "为什么无法领取“烟台市民卡”",
    "answer": "（1）您在领卡时，同一用户只能领取一张公交卡，若该账号无法领取，请查看是否有其他支付宝账号领取“烟台市民卡” （2）您在领卡认证时，是否输错验证信息；（3）如上述问题不存在仍不可领卡，请在支付宝内发起咨询或支付宝客服电话：95188或添加QQ群：523143023进行咨询"
  }, {
    "question": "上车时不小心多刷了好几遍，扣款如何退回？",
    "answer": "若您在乘车时对刷码金额有疑问，均可在支付宝内发起客服咨询，待客服审核该笔交易无误后，多余费用将会在工作日内返还到您账户。 客服咨询流程：打开【烟台市民卡】——点击【使用记录】——找到有疑问的乘车记录并打开【账单详情】——从【对此订单有疑问】发起咨询"
  }, {
    "question": "使用乘车刷码刷码机没反应怎么办？",
    "answer": "(1）手机乘车码未对准刷码窗口，可稍微调整对准方向或距离（2）若您依然无法刷码，可能是因为机具问题或您的乘车码有问题，若是机具问题，请告知公交司机帮助；若是您乘车码有问题，可在支付宝内发起咨询或支付宝客服电话：95188或添加QQ群：523143023进行咨询"
  }, {
    "question": "不想用了，如何退卡？",
    "answer": "若用户不想使用线上公交卡后，乘车时不使用“烟台市民卡”即可，该卡不会产生任何扣费情况。 若用户希望直接退卡，则需通过【卡包】——点击卡名【烟台市民卡】——进入卡片详情页——【退卡申请】即可"
  }, {
    "question": "乘公交可以使用烟台市民卡帮朋友刷码么？",
    "answer": "根据有关规定，目前乘车码仅限本人使用。"
  }],
  "openLine": {
    "searchConfig": {
      "placeholder": "请输入您想查询的开通线路名称",
      "nullTips": "该线路未开通手机支付,敬请期待",
      "nullImage": "https://xm-cdn.oss-cn-hangzhou.aliyuncs.com/img/traffic_card/open_line_null.png"
    },
    "openLineOptions": [{
      "txt": " 试验线路",
      "start": " 起点",
      "end": " 终点"
    }]
  }
}
