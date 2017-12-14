const express = require('express')
const app = express()
const url = require('url')
const bodyParser = require('body-parser')
const qs = require('querystring')

const getJsonData = require('./controller/getJsonData/index')
const changeJsonData = require('./controller/changeJsonData/index')
const getMenuData = require('./controller/getMenu/index')
const back = require('./controller/back/index')
const allChangeJson = require('./controller/allChangeJsonData')

const port = 8089

/*
 * 设置跨域访问
 * */
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('ccess-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(bodyParser.urlencoded({extended: false}))

// 获取文件目录
app.get('/getMenuData', function (req, res) {
  getMenuData.getMenuData(function (err, data) {
    if (err) {
      console.log(err)
      res.json({msg: {code: '90001', message: '系统异常'}})
    }
    res.json(data)
  })
})

// 查看
app.get('/getJsonData', function (req, res) {
  let arg = qs.parse(url.parse(req.url).query)

  getJsonData.getData(arg.appId, arg.jsonName, function (err, data) {
    if (err) {
      console.log(err)
      res.json({msg: {code: '90001', message: '系统异常'}})
    }
    res.json(data)
  })
})

// 修改
app.post('/changeJsonData', function (req, res) {
  let arg = req.body

  changeJsonData.changeJsonData(arg.appId, arg.jsonName, arg.content, function (err, data) {
    if (err) {
      console.log(err)
      res.json({msg: {code: '90001', message: '系统异常'}})
    }
    res.json(data)
  })
})

// 同步修改全部
app.post('/allChangeJson', function (req, res) {
  let arg = req.body

  allChangeJson.allChangeJsonData(arg.appId, arg.jsonName, arg.content, function (err, data) {
    if (err) {
      console.log(err)
      res.json({msg: {code: '90001', message: '系统异常'}})
    }
    res.json(data)
  })
})

// 回退
app.get('/back', function (req, res) {
  let arg = qs.parse(url.parse(req.url).query)

  back.sendData(arg.appId, arg.jsonName, function (err, data) {
    if (err) {
      console.log(err)
      res.json({msg: {code: '90001', message: '系统异常'}})
    }
    res.json(data)
  })
})

// 404
app.get('*', function (req, res) {
  res.json({
    msg: {code: '40002', message: '参数错误'}
  })
})

// 构造server
app.listen(port, function () {
  console.log('server dev success back')
})
