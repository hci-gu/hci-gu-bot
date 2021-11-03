var robot = require('robotjs')

// Speed up the mouse.
robot.setMouseDelay(2)
const screenSize = robot.getScreenSize()

const moveAcrossScreen = () => {
  var twoPI = Math.PI * 2.0
  var height = screenSize.height / 2 - 10
  var width = screenSize.width

  for (var x = 0; x < width; x++) {
    y = height * Math.sin((twoPI * x) / width) + height
    robot.moveMouse(x, y)
  }
}

module.exports = {
  key: (key) => {
    robot.keyTap(key)
  },
  move: (pos) => {
    const x = screenSize.width * pos.x
    const y = screenSize.height * pos.y
    robot.moveMouse(x, y)
  },
}
