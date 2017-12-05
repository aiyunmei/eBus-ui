window.threeConfig = {
  "api": {
    "baseUrl": "http://localhost:9000",
    "alipayAuthBaseUrl": "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm",
    "alipayTransitCardEntry": "https://render.alipay.com/p/f/public_transit/card_entry.html",
    "alipayUserUrl": "https://xmbus.i-xiaoma.com.cn:8088/api",
    "enjoyCardManagementUrl": "https://xmbus.i-xiaoma.com.cn:9191/api",
    "rechargeCardManagementUrl": "https://bus.i-xiaoma.com.cn/card-management-provider",
    "alipayCardPayProviderUrl": "https://bus.i-xiaoma.com.cn/card-pay-provider"
  },
  "alipayCardInfo": {
    "appId": "2017072107839707",
    "scope": "auth_base",
    "sign": "RSA",
    "cardType": "TESTXMLC",
    "bizType": "MEMBER_CARD",
    "templateId": "2017082915035002420195698",
    "subScene": "420100",
    "scene": "TRANSIT",
    "getCardAction": "sign",
    "openCardAction": "use",
    "getCardSource": "XMLC_TEST_CARD",
    "openCardSource": "XMLC_TEST_CARD",
    "useCardSource": "XMLC_TEST_CARD",
    "busCode": "alipays://platformapi/startapp?appId=60000098&url=%2Fwww%2Fcard_entry.html%3Fscene%3DTRANSIT%26subScene%3D420100%26cardType%3DTESTXMLC%26source%XMLC_TEST_CARD%26__webview_options__%3DcanPullDown%253DYES%2526pullRefresh%253DYES",
    "rechargeUnitName": "元",
    "storeAppId": "2017110209675937",
    "storeSign": "RSA"
  },
  "global": {
    "cardName": "小码公交测试卡",
    "cityName": "武汉",
    "cityCode": "420100",
    "showUrl": false,
    "onWhite": false,
    "whiteList": [],
    "linkOldUrl": {
      "buscode": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=buscode",
      "other": "https://zf.wuhanbus.com:8443/wuhan/index.html#user?url=carddetail",
    }
  },
  "card": {
    "image": "../../static/img/wuhan_card.png"
  },
  "openCard": {
    "bgImage": "../../static/img/openCard_bg.jpg",
    "getCardBtnVal": "立即领卡",
    "getCardHref": "https://memberprod.alipay.com/account/openform/activecard.htm?app_id=2017072107839707&template_id=2017082915035002420195698&__webview_options__=canPullDown%3dNO%26transparentTitle%3dauto&callback=http://recharge.i-xiaoma.com.cn:8081/2017072107839707/cardIn&biz_type=scard",
    "cardDescription": {
      "01": {
        "header": "先乘车、后付款",
        "footer": "无需充值即可使用，从您支付宝账户扣款"
      },
      "02": {
        "header": "充值使用",
        "footer": "充值后优先使用卡内余额付款"
      }
    },
    "popupList": [
      {
        "name": "《武汉电子公交卡协议》",
        "href": "http://recharge.i-xiaoma.com.cn:8081/2017072107839707#/protocol"
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
        "link": "/balance"
      },
      {
        "label": "卡片充值",
        "link": "/recharge",
        "icon": "../../static/img/card_detail_recharge_icon.png"
      },
      {
        "label": "自动充值",
        "link": "/rechargeAuto",
        "visible": true
      },
      {
        "label": "乘车记录",
        "link": "alipays://platformapi/startapp?appId=20000076&returnHome=NO&bizSubType=75&showSearch=false&title=%E4%B9%98%E8%BD%A6%E8%AE%B0%E5%BD%95",
        "urlType": "outside"
      },
      {
        "label": "开通线路",
        "link": "/openLine"
      },
      {
        "label": "使用帮助",
        "link": "/help"
      },
      {
        "label": "退卡申请",
        "link": "/cardClose"
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
    ]
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
      },
      {
        "txt": "4路",
        "start": "汉黄路岱家山",
        "end": "光华路湖边坊"
      },
      {
        "txt": "7路",
        "start": "民族路集家嘴",
        "end": "江大路九万方"
      },
      {
        "txt": "14路",
        "start": "临江大道汉阳门",
        "end": "环湖路东湖"
      },
      {
        "txt": "15路",
        "start": "楚平路武汉光谷职业学院",
        "end": "临江大道汉阳门"
      },
      {
        "txt": "16路",
        "start": "临江大道汉阳门",
        "end": "和平大道建设十路"
      },
      {
        "txt": "18路",
        "start": "珞雄路公交场站",
        "end": "碧桂园公交场站"
      },
      {
        "txt": "20路",
        "start": "武东路武东三村",
        "end": "红钢一街八街坊"
      }, {
        "txt": "23路",
        "start": "企业路苏家湾",
        "end": "和平大道建设二路"
      },
      {
        "txt": "24路",
        "start": "江大路九万方",
        "end": "阳新路公交停车场"
      },
      {
        "txt": "25路",
        "start": "鲁磨路光谷广场方",
        "end": "森林大道土吴路"
      },
      {
        "txt": "30路",
        "start": "阳新路公交停车场",
        "end": "发展大道红旗建材家居"
      },
      {
        "txt": "34路",
        "start": "友谊大道沙湖",
        "end": "丽水南路东澜岸"
      },
      {
        "txt": "40路",
        "start": "八吉府大街临江大道口",
        "end": "建设十路和平大道口"
      },
      {
        "txt": "46路",
        "start": "菱角湖路省新华医院",
        "end": "工农路舵落口"
      },
      {
        "txt": "53路",
        "start": "群力村",
        "end": "建设六路"
      },
      {
        "txt": "59路",
        "start": "鲁磨路南望山",
        "end": "南湖公交场站"
      },
      {
        "txt": "60路",
        "start": "台北路天门墩",
        "end": "沿江大道滨江苑"
      },
      {
        "txt": "66路",
        "start": "浅水湾路方家嘴",
        "end": "武昌火车站综合体"
      },
      {
        "txt": "72路",
        "start": "南湖公交场站",
        "end": "鲁磨路南望山"
      },
      {
        "txt": "74路",
        "start": "凤凰山停车场",
        "end": "武南铁路新村"
      },
      {
        "txt": "76路",
        "start": "黄孝河路竹叶山",
        "end": "和平大道建设一路"
      },
      {
        "txt": "102路",
        "start": "洪山广场地铁站",
        "end": "和平大道建设二路"
      },
      {
        "txt": "116路",
        "start": "高新六路康一路",
        "end": "光谷一路佛祖岭"
      },
      {
        "txt": "117路",
        "start": "高新六路康一路",
        "end": "藏龙大道宜家龙城"
      },
      {
        "txt": "118路",
        "start": "清正路大长山路",
        "end": "武汉火车站"
      },
      {
        "txt": "201路",
        "start": "青化路努力村",
        "end": "园林路怡江苑"
      },
      {
        "txt": "212路",
        "start": "民族路集家嘴",
        "end": "胜海大道江大文理学院站"
      },
      {
        "txt": "215路",
        "start": "园林路钢都花园",
        "end": "群力村"
      },
      {
        "txt": "216路",
        "start": "宏图路海洋世界",
        "end": "吴西路公交场站"
      },
      {
        "txt": "228路",
        "start": "横店大道粮库",
        "end": "发展大道红旗建材家居"
      },
      {
        "txt": "229路",
        "start": "汤云海路巢上城",
        "end": "黄浦大街分金街"
      }, {
        "txt": "230路",
        "start": "新十公路滠口中学",
        "end": "新生活摩尔城"
      },
      {
        "txt": "231路",
        "start": "群力村",
        "end": "平江大道阳逻客运站"
      },
      {
        "txt": "232路",
        "start": "平江大道阳逻客运站",
        "end": "后湖大道新荣村客运站"
      },
      {
        "txt": "233路",
        "start": "平江大道阳逻客运站",
        "end": "汉口北大道轨道一号线汉口北站"
      },
      {
        "txt": "248路",
        "start": "民族路集家嘴",
        "end": "汉口北大道汉口北"
      },
      {
        "txt": "265路",
        "start": "河清街",
        "end": "堤角前街公交场站"
      },
      {
        "txt": "287路",
        "start": "光明西路立山大道站",
        "end": "汉口北大道轨道1号线汉口北站"
      },
      {
        "txt": "293路",
        "start": "胜海大道江大文理学院",
        "end": "花桥一村停车场"
      },
      {
        "txt": "295路",
        "start": "金银潭大道地铁金银潭站",
        "end": "钓台道新客运中心"
      },
      {
        "txt": "297路",
        "start": "武汉火车站",
        "end": "汉口北大道家具CBD东"
      },
      {
        "txt": "301路",
        "start": "东山公交场站",
        "end": "聚贤路仁慧路"
      },
      {
        "txt": "307路",
        "start": "建阳二路南郊路",
        "end": "黄家湖大道武汉学院"
      },
      {
        "txt": "313路",
        "start": "新生活摩尔城",
        "end": "民生路黄陂街"
      },
      {
        "txt": "315路",
        "start": "徐东大街徐东一路",
        "end": "园林路怡江苑"
      },
      {
        "txt": "316路",
        "start": "工业二路26街坊",
        "end": "罗家港路井家墩"
      },
      {
        "txt": "319路",
        "start": "幸福路百步亭路口",
        "end": "韦桑路八十一中"
      },
      {
        "txt": "320路(3202路）",
        "start": "野芷湖西路保利心语公交场站",
        "end": "宝通寺路瑞景路口"
      },
      {
        "txt": "321路",
        "start": "百步亭路幸福路",
        "end": "新湾路新湾一路"
      },
      {
        "txt": "322路",
        "start": "堤角前街公交场站",
        "end": "金银潭大道银潭路"
      },
      {
        "txt": "323路",
        "start": "百步亭路十大家",
        "end": "解放大道新荣村"
      },
      {
        "txt": "324路",
        "start": "解放大道易家墩",
        "end": "南泥湾大道丰茂路"
      },
      {
        "txt": "327路",
        "start": "珞喻东路森林公园",
        "end": "南湖大道茶山刘"
      },
      {
        "txt": "328路",
        "start": "解放大道古田三路",
        "end": "丰顺路天顺园小区"
      },
      {
        "txt": "330路环线",
        "start": "常码头公交停车场",
        "end": "常码头公交停车场"
      },
      {
        "txt": "332路",
        "start": "建设大道地铁后湖大道站",
        "end": "黄浦大街分金街"
      },
      {
        "txt": "333路",
        "start": "生物园路神墩三路口",
        "end": "关山大道公交场站"
      },
      {
        "txt": "334环线",
        "start": "佛祖岭三路高新六路",
        "end": "佛祖岭三路高新六路"
      },
      {
        "txt": "341路环线",
        "start": "解放大道新荣村",
        "end": "解放大道新荣村"
      },
      {
        "txt": "343路环线",
        "start": "凤凰山停车场",
        "end": "凤凰山停车场"
      },
      {
        "txt": "346路环线",
        "start": "后湖大道汉口花园",
        "end": "黄浦大街一六一医院"
      },
      {
        "txt": "348路",
        "start": "友谊大道团结村路",
        "end": "梨园医院"
      },
      {
        "txt": "349路",
        "start": "南干渠路126街",
        "end": "信和路和平港路站"
      },
      {
        "txt": "350路",
        "start": "东湖落雁景区南门",
        "end": "武东路武东三村"
      },
      {
        "txt": "355路",
        "start": "旺盛街平安苑",
        "end": "解放大道堤角"
      },
      {
        "txt": "363路环线",
        "start": "百步亭路十大家",
        "end": "百步亭路十大家"
      },
      {
        "txt": "365路",
        "start": "临江大道和平公园",
        "end": "园林路怡江苑"
      },
      {
        "txt": "366路",
        "start": "华中农业大学西大门",
        "end": "湖北生物科技职业学院"
      },
      {
        "txt": "367路",
        "start": "青化路努力村",
        "end": "群力村"
      },
      {
        "txt": "368路",
        "start": "水泥一路公交场站",
        "end": "园林路余家头路"
      },
      {
        "txt": "371路环线",
        "start": "南湖公交场站",
        "end": "南湖公交场站"
      },
      {
        "txt": "372路",
        "start": "临江大道铁机路",
        "end": "南干渠路126街"
      },
      {
        "txt": "377路",
        "start": "金银湖南街华生城市广场",
        "end": "知音大道江汉桥"
      },
      {
        "txt": "378路",
        "start": "古田二路陈家墩",
        "end": "丰美路长顺路"
      },
      {
        "txt": "382路",
        "start": "德平路余家头水厂",
        "end": "武汉火车站"
      },
      {
        "txt": "386路",
        "start": "八一路东湖新村",
        "end": "楚康路南湖北路"
      },
      {
        "txt": "391路",
        "start": "工业二路市政侧街",
        "end": "南干渠路126街"
      },
      {
        "txt": "392路",
        "start": "友谊大道团结村路",
        "end": "武汉火车站"
      },
      {
        "txt": "401路",
        "start": "鲁磨路磨山",
        "end": "夹河街"
      },
      {
        "txt": "402路",
        "start": "武昌火车站综合体",
        "end": "鲁磨路磨山"
      },
      {
        "txt": "405路",
        "start": "民族大道光谷广场",
        "end": "东园西路佛祖岭"
      },
      {
        "txt": "407路",
        "start": "群力村",
        "end": "张公山寨风景区"
      },
      {
        "txt": "408路环线",
        "start": "二七路二七横路",
        "end": "二七路二七横路"
      },
      {
        "txt": "502路",
        "start": "硚口越秀财富中心站",
        "end": "黄州街108街坊"
      },
      {
        "txt": "506路",
        "start": "民意一路",
        "end": "金珠港湾"
      },
      {
        "txt": "508路",
        "start": "幸福路百步亭路口",
        "end": "工农路舵落口"
      },
      {
        "txt": "509路",
        "start": "汉口火车站",
        "end": "汉黄路岱家山"
      },
      {
        "txt": "510路",
        "start": "关山大道公交场站",
        "end": "鲇鱼套公交场站"
      },
      {
        "txt": "511路",
        "start": "武昌火车站综合体",
        "end": "和平大道建设十路"
      }, {
        "txt": "513路",
        "start": "武汉火车站",
        "end": "鲁磨路光谷广场"
      },
      {
        "txt": "514路",
        "start": "武金堤公路武泰闸",
        "end": "向阳路长青路"
      },
      {
        "txt": "515路",
        "start": "团结大道公交停车场",
        "end": "武东路武东"
      },
      {
        "txt": "516路",
        "start": "沿江大道滨江苑",
        "end": "新生活摩尔城"
      },
      {
        "txt": "518路",
        "start": "森林大道王家店",
        "end": "武昌火车站综合体"
      },
      {
        "txt": "521路",
        "start": "临江大道汉阳门",
        "end": "关山大道汽发社区"
      },
      {
        "txt": "522路",
        "start": "洪山侧路茶港小区",
        "end": "新湾路新湾一路"
      },
      {
        "txt": "524路",
        "start": "发展大道红旗建材家居",
        "end": "汉新大道公交停车场"
      },
      {
        "txt": "525路",
        "start": "群力村",
        "end": "武汉火车站"
      },
      {
        "txt": "530路环线",
        "start": "车家岭停车场",
        "end": "车家岭停车场"
      },
      {
        "txt": "531路",
        "start": "解放大道易家墩",
        "end": "汉南路汉南四村"
      },
      {
        "txt": "532路",
        "start": "后湖大道汉口花园",
        "end": "江堤中路生态园"
      },
      {
        "txt": "533路",
        "start": "民族路集家嘴",
        "end": "汉口火车站"
      },
      {
        "txt": "536路",
        "start": "九峰三路未来科技城",
        "end": "珞雄路公交场站"
      },
      {
        "txt": "538路",
        "start": "和平大道三角路",
        "end": "黄家湖西路黄家湖"
      },
      {
        "txt": "539路",
        "start": "南湖大道茶山刘",
        "end": "武昌火车站综合体"
      },
      {
        "txt": "540路",
        "start": "武汉火车站",
        "end": "武昌火车站东广场"
      },
      {
        "txt": "541路",
        "start": "江盛路长江紫都",
        "end": "长丰大道东风村"
      },
      {
        "txt": "542路",
        "start": "和平大道建设十路",
        "end": "龙灯路汉江大道口"
      },
      {
        "txt": "543路",
        "start": "后湖五路淌湖村",
        "end": "恒安路富安街"
      },
      {
        "txt": "545路",
        "start": "欢乐大道欢乐谷",
        "end": "汉口火车站"
      },
      {
        "txt": "548路",
        "start": "发展大道红旗建材家居",
        "end": "长丰大道东风村"
      },
      {
        "txt": "549路",
        "start": "和平大道建设二路",
        "end": "汉西路常码头"
      },
      {
        "txt": "550路",
        "start": "沿江大道滨江苑",
        "end": "丰茂路长升路"
      },
      {
        "txt": "551路",
        "start": "武汉火车站",
        "end": "解放大道黄浦大街"
      },
      {
        "txt": "552路",
        "start": "三眼桥路元辰世纪",
        "end": "八一路东湖新村"
      },
      {
        "txt": "554路",
        "start": "团结大道公交停车场",
        "end": "国际博览中心交通港"
      },
      {
        "txt": "555路",
        "start": "兴业路安居路口",
        "end": "建设十一路绿水花园"
      },
      {
        "txt": "558路",
        "start": "解放大道易家墩",
        "end": "汉新大道公交停车场"
      },
      {
        "txt": "559路",
        "start": "三眼桥路海虹景",
        "end": "汉阳大道公交停车场"
      },
      {
        "txt": "560路",
        "start": "慈惠农场",
        "end": "天门墩路香江新村"
      },
      {
        "txt": "564路",
        "start": "宝通寺路瑞景路口",
        "end": "武金堤公路公交场站"
      },
      {
        "txt": "566路",
        "start": "武金堤公路公交场站",
        "end": "欢乐大道欢乐谷"
      },
      {
        "txt": "567路环线",
        "start": "珞狮南路华中农大",
        "end": "珞狮南路华中农大"
      },
      {
        "txt": "568路",
        "start": "后湖大道体育中心",
        "end": "工农路舵落口"
      },
      {
        "txt": "570路",
        "start": "玉龙岛花园",
        "end": "武昌火车站东广场"
      },
      {
        "txt": "571路",
        "start": "硚口越秀财富中心",
        "end": "珞狮南路华中农大"
      },
      {
        "txt": "572路",
        "start": "南湖社区",
        "end": "临江大道平湖门"
      },
      {
        "txt": "573路",
        "start": "梨园广场",
        "end": "雅安街平安路"
      },
      {
        "txt": "575路",
        "start": "中环商贸城",
        "end": "玉龙路朱家亭"
      },
      {
        "txt": "576路",
        "start": "珞狮南路华中农大",
        "end": "中山路大堤口"
      },
      {
        "txt": "577路",
        "start": "武昌火车站综合体",
        "end": "汉黄路岱家山"
      },
      {
        "txt": "578路",
        "start": "梨园广场",
        "end": "中山路凤凰山"
      },
      {
        "txt": "581路",
        "start": "欢乐大道岳家嘴",
        "end": "民族路集家嘴"
      },
      {
        "txt": "582路",
        "start": "和平大道三层楼",
        "end": "发展大道红旗建材家居"
      },
      {
        "txt": "583路",
        "start": "南湖社区",
        "end": "二七路二七横路"
      },
      {
        "txt": "586路",
        "start": "珞珈山路劝业场",
        "end": "城花中心"
      },
      {
        "txt": "587路",
        "start": "南李路新余家湾",
        "end": "八一路东湖新村"
      },
      {
        "txt": "588路",
        "start": "中山大道三阳路",
        "end": "仁和路公交停车场"
      },
      {
        "txt": "590路",
        "start": "民族大道光谷广场",
        "end": "野芷湖西路保利心语公交场站"
      },
      {
        "txt": "591路",
        "start": "珞狮南路华中农大",
        "end": "光谷一路文豪路"
      },
      {
        "txt": "592路",
        "start": "京汉大道武商路",
        "end": "堤边路游湖"
      },
      {
        "txt": "593路",
        "start": "万科金色城市公交场站",
        "end": "武珞路街道口"
      },
      {
        "txt": "602路",
        "start": "金银湖公交枢纽站",
        "end": "建设大道双墩"
      },
      {
        "txt": "605路",
        "start": "梨园广场",
        "end": "金银湖路翠堤春晓"
      },
      {
        "txt": "606路",
        "start": "沿江大道四官殿",
        "end": "洪山侧路茶港小区"
      },
      {
        "txt": "608路",
        "start": "发展大道红旗建材家居",
        "end": "马鹦路邓甲村"
      },
      {
        "txt": "610路",
        "start": "武汉火车站",
        "end": "汉口火车站"
      },
      {
        "txt": "613路",
        "start": "珞喻路卓刀泉",
        "end": "保利公园九里公交场站"
      },
      {
        "txt": "616路",
        "start": "团结大道油料社区",
        "end": "水泥一路公交场站"
      },
      {
        "txt": "617路",
        "start": "地铁罗家港站",
        "end": "向阳路长青路"
      },
      {
        "txt": "618路",
        "start": "武丰村",
        "end": "楚康路南湖北路"
      },
      {
        "txt": "619路",
        "start": "沿江大道武汉港",
        "end": "长云路古田一路"
      },
      {
        "txt": "625路",
        "start": "武汉植物园",
        "end": "保利公园九里公交场站"
      },
      {
        "txt": "627路",
        "start": "中环商贸城",
        "end": "车家岭停车场"
      },
      {
        "txt": "632路",
        "start": "烽胜路复地悦城",
        "end": "文荟街幸福村"
      },
      {
        "txt": "634路",
        "start": "武汉火车站",
        "end": "后湖大道新荣村客运站"
      },
      {
        "txt": "636路",
        "start": "中南路中南二路",
        "end": "烽胜路复地悦城"
      },
      {
        "txt": "643路",
        "start": "落雁路雁中咀",
        "end": "武汉火车站"
      },
      {
        "txt": "657路",
        "start": "径河路远洋世界",
        "end": "长升路丰逸路"
      },
      {
        "txt": "702路",
        "start": "珞喻东路油篓口",
        "end": "和平大道建设二路"
      },
      {
        "txt": "703路",
        "start": "珞喻东路高坡店",
        "end": "汉口火车站"
      },
      {
        "txt": "706路",
        "start": "中环商贸城",
        "end": "武昌火车站东广场"
      },
      {
        "txt": "709路",
        "start": "武丰村",
        "end": "鲁磨路南望山"
      },
      {
        "txt": "710路",
        "start": "汉西路常码头",
        "end": "武珞路阅马场"
      },
      {
        "txt": "711路",
        "start": "动物园路公交停车场",
        "end": "塔子湖西路星悦城"
      },
      {
        "txt": "712路",
        "start": "丰顺路天顺园小区",
        "end": "翠柳街东亭路"
      },
      {
        "txt": "715路",
        "start": "东山公交场站",
        "end": "友谊大道沙湖"
      },
      {
        "txt": "716路",
        "start": "新生活摩尔城",
        "end": "解放大道中山公园"
      },
      {
        "txt": "717路",
        "start": "武金堤公路武泰闸",
        "end": "百步亭路十大家"
      },
      {
        "txt": "718路",
        "start": "珞喻路光谷广场",
        "end": "环岛路栗庙小学"
      },
      {
        "txt": "721路",
        "start": "常青公交枢纽站",
        "end": "沿江大道武汉港"
      },
      {
        "txt": "722路",
        "start": "龙阳湖东路陶家岭路",
        "end": "九通路公交场站"
      },
      {
        "txt": "723路",
        "start": "团结大道公交停车场",
        "end": "浅水湾路方家嘴"
      },
      {
        "txt": "725路",
        "start": "团结大道公交停车场",
        "end": "春兰街跃进嘉园"
      },
      {
        "txt": "727路",
        "start": "武胜路家乐福",
        "end": "堤边路游湖"
      },
      {
        "txt": "728路",
        "start": "邓甲村停车场",
        "end": "荣院路熊家咀"
      },
      {
        "txt": "729路",
        "start": "车家岭停车场",
        "end": "新湾二路新湾路"
      },
      {
        "txt": "732路",
        "start": "民族大道光谷广场",
        "end": "华农楚天学院"
      },
      {
        "txt": "734路",
        "start": "欢乐大道欢乐谷",
        "end": "和平大道地铁积玉桥站"
      },
      {
        "txt": "736路",
        "start": "汉口火车站",
        "end": "吴中街吴北路"
      },
      {
        "txt": "738路",
        "start": "楚康路南湖北路",
        "end": "创业街关东园五路"
      },
      {
        "txt": "739路",
        "start": "水蓝郡",
        "end": "珞雄路公交场站"
      },
      {
        "txt": "741路",
        "start": "四明路华星花园",
        "end": "常码头公交停车场"
      },
      {
        "txt": "751路",
        "start": "东湖保税区公交场站",
        "end": "东山公交场站"
      },
      {
        "txt": "755路",
        "start": "华农楚天学院",
        "end": "珞喻路湖北省中医院"
      },
      {
        "txt": "756路",
        "start": "鲁磨路光谷广场",
        "end": "高新二路湖口"
      },
      {
        "txt": "757路",
        "start": "民族大道光谷广场",
        "end": "佛祖岭三路高新六路"
      },
      {
        "txt": "758路",
        "start": "民族大道光谷广场",
        "end": "栗庙路江夏藏龙学校"
      },
      {
        "txt": "759路",
        "start": "鲁磨路光谷广场",
        "end": "武汉工程大学流芳校区"
      },
      {
        "txt": "777路",
        "start": "欢乐大道危家湾",
        "end": "野芷湖西路保利心语公交场站"
      },
      {
        "txt": "780路",
        "start": "黄塘湖停车场",
        "end": "汉西一路站"
      },
      {
        "txt": "782路",
        "start": "中北路车家岭",
        "end": "建设十路和平大道口"
      },
      {
        "txt": "785路",
        "start": "民族大道光谷广场",
        "end": "环岛路栗庙小学"
      },
      {
        "txt": "786路",
        "start": "神墩三路光谷七路",
        "end": "鲁磨路光谷广场"
      },
      {
        "txt": "788路",
        "start": "珞雄路公交场站",
        "end": "光谷一路流芳园南路"
      },
      {
        "txt": "789路",
        "start": "珞喻路光谷广场",
        "end": "东园西路佛祖岭"
      },
      {
        "txt": "790路",
        "start": "堤角前街公交场站",
        "end": "园博园东路园博园东门"
      },
      {
        "txt": "792路",
        "start": "荟聚中心西门",
        "end": "常青公交枢纽站"
      },
      {
        "txt": "795路",
        "start": "和平大道建设十路",
        "end": "紫沙路民主二路"
      },
      {
        "txt": "796路",
        "start": "常码头公交停车场",
        "end": "新湾二路新湾路"
      },
      {
        "txt": "810路",
        "start": "欢乐大道欢乐谷",
        "end": "华丽环保工业园"
      },
      {
        "txt": "电1",
        "start": "水果湖路水果湖",
        "end": "三民路"
      },
      {
        "txt": "电2",
        "start": "汉西路地铁太平洋站",
        "end": "解放大道解放公园"
      },
      {
        "txt": "电4",
        "start": "武昌火车站公交场站",
        "end": "硚口越秀财富中心站"
      },
      {
        "txt": "电8",
        "start": "武昌火车站公交场站",
        "end": "梨园广场"
      },
      {
        "txt": "BRT1",
        "start": "武昌火车站东广场",
        "end": "高新大道brt光谷大道站"
      },
      {
        "txt": "BRT",
        "start": "雄楚大道brt省荣军医院站",
        "end": "公交车站"
      },
      {
        "txt": "轮渡",
        "start": "中华路码头",
        "end": "武汉关码头"
      }
    ]
  }
}
