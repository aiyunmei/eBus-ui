/*
* alipay jsapi
* @params ${callback} 回调执行函数
* */
export function alipayOnReady (callback) {
  if (window.AlipayJSBridge) callback && callback()
  else document.addEventListener('AlipayJSBridgeReady', callback, false)
}

/*
* 退出当前应用
* */
export function alipayExitApp () {
  alipayOnReady(() => {
    AlipayJSBridge.call('exitApp')
  })
}

/*
* 设置支付宝标题名称
* */
export function alipaySetTitle (name) {
  alipayOnReady(() => {
    AlipayJSBridge.call('setTitle', { title: name })
  })
}

/*
* 头部标题是否透明
* */
export function alipayTransparent (type) {
  alipayOnReady(() => {
    AlipayJSBridge.call('setTransparentTitle', { transparentTitle: type })
  })
}

/*
* 隐藏右上角按钮属性
* */
export function alipayHideOptionMenu () {
  alipayOnReady(() => {
    AlipayJSBridge.call('hideOptionMenu')
  })
}

/*
* 支付宝端内部跳转
* */
export function alipayPushWindow (url) {
  alipayOnReady(() => {
    AlipayJSBridge.call('pushWindow', {
      url: url,
      param: { readTitle: true, showOptionMenu: false }
    })
  })
}

/*
* 支付宝app跳转
* */
export function alipayPostNotification ({ name, insPassBack, cardType, result, cb }) {
  alipayOnReady(() => {
    AlipayJSBridge.call('postNotification', {
      name: name,
      data: {
        insPassBack: insPassBack,
        cardType: cardType,
        result: result
      }
    }, (e) => { // 回调获取当前信息
      cb(e)
    })
  })
}
