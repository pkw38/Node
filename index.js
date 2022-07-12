const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!!!!!!!!!!!!!!!')
})

app.get('/store', function (req, res){
    res.send('치킨!!!!!!!!!!!!!!!!!')
})

app.listen(3000)