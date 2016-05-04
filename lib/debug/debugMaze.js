(function() {
'use strict'

var intToDirection = require('../utils/intToDirection')

function debugMaze(maze) {
  for(var y=0; y < maze.length; y++) {
    var slots = []
    for(var x=0; x < maze[y].length; x++) {
      var slot = intToDirection(maze[y][x], true)
      slots.push(slot)
    }
    console.log(slots)
  }
}

module.exports = debugMaze
}())
