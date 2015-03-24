(function() {
'use strict'

var move = require('./move')
var healCellWithHole = require('./healCellWithHole')

function removeDeadEnds(deadEnds, maze) {
  // for each dead end
  for(var i=0; i < deadEnds.length; i++) {
    // save the dead end direction
    var deadEnd = deadEnds[i]
    var deadEndDir =  maze[deadEnds[i][0]][deadEnds[i][1]]

    // set the dead end direction to zero to remove it
    maze[deadEnd[0]][deadEnd[1]] = 0

    // heal the gaping hole
    var cellWithHole = move(deadEnd, deadEndDir)

    //console.log('____________________________________________')
    //console.log('deadEnd:', deadEnd, 'direction:', intToDirection(deadEndDir))
    //console.log('cellWithHole', cellWithHole)

    maze = healCellWithHole(cellWithHole, deadEndDir, maze)
  }
  return maze
}

module.exports = removeDeadEnds
}())
