(function() {
'use strict'

var isNSEW = require('./isNSEW')

function findDeadEnds(maze) {
  var deadEnds = []
  for(var y=0; y < maze.length; y++) {
    for(var x=0; x < maze[y].length; x++) {
      if(isNSEW(maze[y][x])) {
        deadEnds.push([y,x])
      }
    }
  }
  //console.log('deadEnds', deadEnds)
  return deadEnds
}

module.exports = findDeadEnds
}())
