/*
*
* 修改json文件内容
* */
const fs = require('fs')

const path = './dist/data/'

exports.changeJsonData = function (appId, jsonName, content, callback) {
  let resData = {msg: null}
  let timeStr = new Date().getTime()

  // 先检索是否修改的config
  if (jsonName === 'config') {
    fs.rename(`${path}${appId}/config.json`, `${path}${appId}/config_${timeStr}.json`, function (err) {
      if (err) {
        resData.msg = {code: '90001', message: '保存历史文件失败'}
        callback(null, resData)
      }
      // 生成修改后的配置文件
      fs.writeFile(`${path}${appId}/config.json`, content, function (err) {
        if (err) {
          resData.msg = {code: '90001', message: '修改文件内容失败'}
          callback(null, resData)
        } else {
          resData.msg = {code: '20000', message: 'success'}
          callback(null, resData)
        }
      })
    })
  } else { // 不是config
    fs.writeFile(`${path}${appId}/${jsonName}.json`, content, function (err) {
      if (err) {
        resData.msg = {code: '90001', message: '修改文件内容失败'}
        callback(null, resData)
      } else {
        resData.msg = {code: '20000', message: 'success'}
        callback(null, resData)
      }
    })
  }
}
