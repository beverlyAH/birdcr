const express = require('express')
const path = require('path')
const parse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes.js')

const app = express()

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type'
}

app.use(parse.json())
app.use(cors(headers))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/../client/dist'));

app.use('/birds', routes)

let PORT = process.env.PORT || 3000
app.listen(PORT, (err) => {
  if (err) {
    console.log('ERROR connecting to server:', err)
  }
  console.log(`birdCR is listening on port ${PORT}!`)
})