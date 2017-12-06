/*
* 获取文件目录
* */
const fs = require('fs')

const path = './dist/data/'

exports.getMenuData = function (callback) {
  let data = {data: null, msg: null}
  let pMenu = []

  fs.readdir(path, function (err, files) {
    if (err) {
      data.msg = { code: '90001', message: '获取文件列表失败' }
      callback(null, data)
    }
    // 获取父目录
    for (let i = 0; i < files.length; i++) {
      let obj = {}
      obj.value = files[i]
      obj.label = files[i]
      pMenu.push(obj)
    }
    // 获取子目录
    for (let j = 0; j < pMenu.length; j++) {
      let menuName = pMenu[j].value
      pMenu[j].children = []
      let _files = fs.readdirSync(`${path}${menuName}`) // 获取到相应的目录列表
      for (let z = 0; z < _files.length; z++) { // 遍历目录
        let obj = {}
        let list = _files[z].split('.')[0]
        obj.value = list
        obj.label = list
        pMenu[j].children.push(obj)
      }
    }
    data.data = pMenu
    data.msg = {code: '20000', message: 'success'}
    callback(null, data)
  })
}


