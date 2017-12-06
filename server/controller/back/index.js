/*
*
* 回滚到相应的文件
* */
const fs = require('fs')

const path = './dist/data/'

exports.sendData = function (appId, jsonName, callback) {
  let data = {msg: null}
  let timeStr = new Date().getTime()
  // 先将 config 文件变成历史文件
  fs.rename(`${path}${appId}/config.json`, `${path}${appId}/config_${timeStr}.json`, function (err) { // old new callback
    if (err) {
      data.msg = {code: '90001', message: '回滚旧异常'}
    }
    // 将目标版本文件变成当前版本
    fs.rename(`${path}${appId}/${jsonName}.json`, `${path}${appId}/config.json`, function (err) {
      if (err) {
        data.msg = {code: '90001', message: '回滚目标版本失败'}
      }
      data.msg = {code: '20000', message: 'success'}
      callback(null, data)
    })
  })
}
