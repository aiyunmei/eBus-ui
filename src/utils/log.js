/*
* 日志监控
* */
const { cardName } = global.threeConfig.global

class Logger {
  constructor() {
    this.logId = `${cardName}__${new Date().getTime()}` // 用户唯一标识
    this.isLogin = false // 用户是否连接进来
    this.socket = null // 长连接对象
    this.logUrl = 'https://www.i-xiaoma.cn'
    // this.logUrl = 'http://127.0.0.1:8091'
  }

  initLog () {
    if (!this.isLogin) {
      this.socket = io.connect(this.logUrl)
      this.socket.emit('join', { logId: this.logId })
      this.isLogin = true
    }
  }

  loggerInfo (data) { // 普通日志
    this.socket.emit('info', data)
  }

  loggerWarn (data) { // 警告日志
    this.socket.emit('warn', data)
  }

  loggerError (data) { // 错误日志
    this.socket.emit('error', data)
  }
}

export default Logger
