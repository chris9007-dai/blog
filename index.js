const express = require('express')
/* const http = require('http') */
const https = require('https')
const fs = require('fs')
const app = express()
/* 配置https */
const privatekey = fs.readFileSync('./cert/privatekey.pem', 'utf8')
const certificate = fs.readFileSync('./cert/certificate.pem', 'utf8')
const options = { key: privatekey, cert: certificate }
const httpsServer = https.createServer(options, app)
/* 引入路由 */
const login = require('./routers/login')
const register = require('./routers/register')
const bodyParser = require('body-parser')
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/register', register)
app.post('/login', login)
app.get('/', (req, res) => {
  res.send('aaa')
})

httpsServer.listen(3001, () => console.log('服务器运行中...'))
