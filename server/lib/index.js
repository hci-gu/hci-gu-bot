const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const robot = require('./robot')

app.use(cors())
app.use(bodyParser.json({ limit: '10mb', extended: true }))

http.listen(4000)

app.get('/', (_, res) => res.send('hello'))
