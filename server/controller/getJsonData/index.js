/*
* 全局变量
* */
const fs = require('fs')

const path = './dist/data/'

exports.getData = function (appId, jsonName, callback) {
  const resData = {msg: null, data: null}
  fs.readFile(`${path}${appId}/${jsonName}.json`, 'utf-8', function (err, data) {
    if (err) {
      console.log(err)
      resData.msg = {code: '90001', message: '读取文件异常'}
      resData.data = {}
      callback(null, resData)
    } else {
      resData.msg = {code: '20000', message: 'success'}
      resData.data = data
      callback(null, resData)
    }
  })
}
