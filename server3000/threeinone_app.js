const express = require('express')
const path = require('path')
const app = express()

const getCityData = require('./utils/getCityData/index')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', express.static(path.join(__dirname, 'dist'))) // 静态呈现页面

app.get('/:appId', function (req, res) {
  const appId = req.params.appId
  getCityData.sendData(appId, function (err, data) {
    if (err) {
      res.json(err)
    } else {
      res.render('index', {
        data: JSON.stringify(data)
      })
    }
  })
})

app.get('/:appId/cardIn', function (req, res) {
  const appId = req.params.appId
  getCityData.sendData(appId, function (err, data) {
    if (err) {
      res.json(err)
    } else {
      res.render('cardIn', {
        data: JSON.stringify(data)
      })
    }
  })
})

app.get('/:appId/:path', function (req, res) {
  res.render('link', {
    appId: req.params.appId,
    path: req.params.path
  })
})

app.listen(3000, function () {
  console.log('server dev success')
})
