const LOGGER_ENUMS = {
  INFO: '【INFO】',
  ERROR: '【ERROR】',
  WARN: '【WARN】'
}

class SocketIo {

  constructor(io) {
    this.io = io
    this.socket = null
  }

  onJoin() {
    this.socket.on('join', ({ logId }) => {
      console.log(`【有用户进入】：${logId ? logId : '未知的logId'}`)
    })
  }

  onInfo() {
    this.socket.on('info', data => {
      console.log(`${LOGGER_ENUMS.INFO}：${this.checkData(data)}`)
    })
  }

  onWarn() {
    this.socket.on('warn', data => {
      console.log(`${LOGGER_ENUMS.WARN}：${this.checkData(data)}`)
    })
  }

  onError() {
    this.socket.on('error', data => {
      console.log(`${LOGGER_ENUMS.ERROR}：${this.checkData(data)}`)
    })
  }

  checkData(data) {
    return typeof data === 'object' ? JSON.stringify(data) : data
  }

  init() {
    this.io.on('connection', socket => {
      this.socket = socket
      // 监听用户进入
      this.onJoin()
      // 监听消息
      this.onInfo()
      this.onWarn()
      this.onError()
    })
  }
}

module.exports = {
  StartSocketIo (io) {
    new SocketIo(io).init()
  }
}
