/*
*
*同步所有负载均衡的服务器配置文件
* */
const http = require('http')
const fs = require('fs')
const qs = require('querystring')

// const port = '8089' // 西安地铁同步全局数据
const port = '8081' // 武汉同步全局数据
const allJsonName = 'allChangeJsonDataUrlList.json' // 武汉ip 配置
// const allJsonName = 'allChangeJsonDataXianSubWay.json' // 西安地铁 ip配置

exports.allChangeJsonData = (appId, jsonName, content, callback) => {
  'use strict'
  let AjaxUrlList
  try {
    AjaxUrlList = JSON.parse(fs.readFileSync(`./utils/config/${allJsonName}`, 'utf-8'))
  } catch (e) {
    if (e) throw e
    callback(null, { msg: {code: '90001', message: 'http url 配置文件失败'} })
    return false
  }
  console.log(AjaxUrlList)
  const postData = qs.stringify({ appId: appId, jsonName: jsonName, content: content })
  // 闭包for循环请求
  for (let i = 0; i < AjaxUrlList.length; i++) {
    console.log(`当前第${i}次请求`)
    doHttp(AjaxUrlList[i], postData, callback)
  }
}

function doHttp (host, data, cb) {
  'use strict'
  const config = {
    host: host,
    port: port,
    path: '/changeJsonData',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }
  let resultData = {
    resData: [],
    host: []
  }
  const req = http.request(config, function (res) {
    let data = ''
    res.setEncoding('utf8')
    res.on('data', function (chunk) {
      data += chunk
    })
    res.on('end', function () {
      resultData.resData.push(data) // 写入返回数据
      resultData.host.push(host) // 写入请求到的host
      cb(null, { msg: { code: '20000', message: 'success' }, data: resultData })
    })
  })
  req.write(data)
  req.on('error', function (err) {
    console.log(err)
    cb(null, { msg: { code: '90001', message: err.message }, data: resultData })
  })
  req.end()
}
