(function(){
'use strict'

var opposite = require('./opposite')

function healCellWithHole(cell, dir, maze) {
  var cellValue = maze[cell[0]][cell[1]]
  var newCellValue = 0

  // remove the hole by replacing the hole with its opposite
  newCellValue = cellValue - opposite(dir)

  // set the maze cell to the healed value
  maze[cell[0]][cell[1]] = newCellValue

  //console.log('cell pre:', intToDirection(cellValue))
  //console.log('cell post:', intToDirection(newCellValue))

  return maze
}

module.exports = healCellWithHole
}())
