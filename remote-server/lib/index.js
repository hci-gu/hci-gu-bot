const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io-client')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

let serverConnection
let clients = []
io.on('connection', (socket) => {
  socket.on('server-init', () => {
    serverConnection = socket
  })

  socket.on('server-init', () => {
    serverConnection = socket
  })

  socket.on('mouse', (data) => {
    if (serverConnection) {
      serverConnection.emit('mouse', data)
    }
  })
})

app.use(cors())
app.use(bodyParser.json({ limit: '10mb', extended: true }))

http.listen(4000)

app.get('/', (_, res) => res.send('hello'))
