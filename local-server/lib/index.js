const { io } = require('socket.io-client')
const socket = io('http://localhost:4000')
const robot = require('./robot')

socket.on('connect', () => {
  console.log('Im connected!')
  socket.emit('server-init')
})

socket.on('mouse', (pos) => {
  robot.move(pos)
})

socket.on('click', () => {
  robot.click()
})

socket.on('key', (pos) => {
  robot.key(pos)
})
