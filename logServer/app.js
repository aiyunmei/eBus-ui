const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')

const socket = require('./utils/socketIo.class')

const port = 8091

// 设置跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') res.send(200)
  else next();
});

socket.StartSocketIo(io)

app.use('/', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.end('socket server init')
})

// 404
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

http.listen(port, () => {
  console.log('【三位一次前端日志服务器开启】' + port)
})
