const express = require('express')
const app = express()
const pug = require('pug')


app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
   res.render('index', { title: 'Hey', message: 'welpn' })
})

app.listen(5000, function () {
  console.log('Example app listening on port 8080!')
})