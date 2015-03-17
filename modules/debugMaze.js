(function() {
'use strict'

function debugMaze(maze) {
  for(var y=0; y < maze.length; y++) {
    var slots = []
    for(var x=0; x < maze[y].length; x++) {
      var slot = ''
      switch(maze[y][x]) {
        case 0: slot  = '*ERR'; break
        case 1: slot  = '   N'; break
        case 2: slot  = '   S'; break
        case 3: slot  = '  NS'; break
        case 4: slot  = '   E'; break
        case 5: slot  = '  NE'; break
        case 6: slot  = '  SE'; break
        case 7: slot  = ' NSE'; break
        case 8: slot  = '   W'; break
        case 9: slot  = '  NW'; break
        case 10: slot = '  SW'; break
        case 11: slot = ' NSW'; break
        case 12: slot = '  EW'; break
        case 13: slot = ' NEW'; break
        case 14: slot = ' SEW'; break
        case 15: slot = 'NSEW'; break
      }
      slots.push(slot)
    }
    console.log(slots)
  }
}

module.exports = debugMaze

}())

