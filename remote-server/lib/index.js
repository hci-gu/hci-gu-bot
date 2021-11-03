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

let serverConnection
io.on('connection', (socket) => {
  console.log('socket connected')
  socket.on('server-init', () => {
    console.log('a server connected!')
    serverConnection = socket
  })

  socket.on('client-init', () => {
    console.log('client connected!')
  })

  socket.on('mouse', (data) => {
    if (serverConnection) {
      serverConnection.emit('mouse', data)
    }
  })

  socket.on('click', (data) => {
    if (serverConnection) {
      serverConnection.emit('click', data)
    }
  })

  socket.on('key', (data) => {
    if (serverConnection) {
      serverConnection.emit('key', data)
    }
  })
})

app.use(cors())
app.use(bodyParser.json({ limit: '10mb', extended: true }))

http.listen(4000)

app.get('/', (_, res) => res.send('hello'))
