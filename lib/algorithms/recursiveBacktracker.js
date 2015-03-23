(function(){
'use strict'

var shuffle = require('../utils/shuffle')

function recursiveBacktracker(settings, grid, cx, cy) {
  // default parameters
  cx = cx !== undefined ? cx : 0
  cy = cy !== undefined ? cy : 0

  // create a list of directions that should be tried
  // the shuffle directions are based on the maze seed
  var directions = shuffle(settings.dirs, settings.generator.random())

  // for each direction
  for(var i=0; i < directions.length; i++) {
    var direction = directions[i]
    var nx = cx + settings.dx[direction]
    var ny = cy + settings.dy[direction]

    // if the ny value is within the grid
    // && the nx value is wthin the grid
    // && the [ny, nx] value is not set
    if( ny >= 0 && ny <= (grid.length - 1) &&
        nx >= 0 && nx <= (grid[ny].length - 1) &&
        grid[ny][nx] === 0) {
      grid[cy][cx] |= settings.dirsVal[direction]
      grid[ny][nx] |= settings.opposite[direction]
      recursiveBacktracker(settings, grid, nx, ny)
    }
  }
}

module.exports = recursiveBacktracker
}())
