(function(){
'use strict'

var validMazeArea = require('./validMazeArea')
var findDeadEnds = require('./findDeadEnds')
var removeDeadEnds = require('./removeDeadEnds')

function sparsify(maze, sparseness) {
  // set default sparseness to 25%
  sparseness = sparseness !== undefined ? sparseness : 0.25

  var deadEnds = []

  // if sparseness is less than 1, treat it as a percentage
  if(sparseness < 1) {

    while(validMazeArea(maze) > 1 - sparseness) {
      deadEnds = findDeadEnds(maze)
      maze = removeDeadEnds(deadEnds, maze)
    }

  // if sparseness is more than 1, take away x number of tiles instead
  } else {

    // in case the user puts in a non-integer value, round it
    sparseness = Math.round(sparseness)

    for(var i=0; i < sparseness; i++) {
      deadEnds = findDeadEnds(maze)
      maze = removeDeadEnds(deadEnds, maze)
    }

  }
}

module.exports = sparsify
}())
