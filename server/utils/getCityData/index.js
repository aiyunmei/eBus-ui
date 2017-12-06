const fs = require('fs')

const path = './dist/data'

exports.sendData = (appId, callback) => {
  fs.readFile(path + `/${appId}/config.json`, 'utf-8', (err, data) => {
    if (err) {
      callback(null, err)
    } else {
      callback(null, JSON.parse(data))
    }
  })
}
