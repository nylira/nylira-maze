(function(){
'use strict'

var MazeSettings = require('../MazeSettings')
var _ = require('lodash')

var M = new MazeSettings()

function recursiveBacktracker(grid, cx, cy) {
  // default parameters
  cx = cx !== undefined ? cx : 0
  cy = cy !== undefined ? cy : 0

  // create a list of directions that should be tried
  var directions = _.shuffle(M.dirs)

  // for each direction
  for(var i=0; i < directions.length; i++) {
    var direction = directions[i]
    var nx = cx + M.dx[direction]
    var ny = cy + M.dy[direction]

    // if the ny value is within the grid
    // && the nx value is wthin the grid
    // && the [ny, nx] value is not set
    if( ny >= 0 && ny <= (grid.length - 1) &&
        nx >= 0 && nx <= (grid[ny].length - 1) &&
        grid[ny][nx] === 0) {
      grid[cy][cx] |= M.dirsVal[direction]
      grid[ny][nx] |= M.opposite[direction]
      recursiveBacktracker(grid, nx, ny)
    }
  }
}

module.exports = recursiveBacktracker
}())
