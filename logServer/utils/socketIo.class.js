class SocketIo {

  constructor(io) {
    this.io = io
    this.socket = null
  }

  onJoin() {
    this.socket.on('join', ({ logId }) => {
      console.log(`【有用户进入】：${logId ? logId : '位置logId'}`)
    })
  }

  onMsg() {
    this.socket.on('msg', data => {
      console.log(`【当前日志】：${typeof data === 'object' ? JSON.stringify(data) : data}`)
    })
  }

  init() {
    this.io.on('connection', socket => {
      this.socket = socket

      this.onJoin()
      this.onMsg()
    })
  }
}

module.exports = {
  StartSocketIo (io) {
    new SocketIo(io).init()
  }
}
