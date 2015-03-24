(function() {
'use strict'

function validMazeArea(maze) {
  var totalCells = maze.length * maze[0].length
  var validCells = 0
  for(var y=0; y < maze.length; y++) {
    for(var x=0; x < maze[y].length; x++) {
      if(maze[y][x] !== 0) {
        validCells++
      }
    }
  }
  return validCells / totalCells
}

module.exports = validMazeArea
}())
