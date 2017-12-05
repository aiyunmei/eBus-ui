const express = require('express')
const app = express()
const path = require('path')

const port = 3000


app.use('/', express.static(path.join(__dirname, 'dist'))) // 静态呈现页面

app.listen(port, () => {
  console.log(`server on localhost:${port}`)
})
