(function(){
'use strict'

//==============================================================================
// external

var mersenne = require('mersenne')
  , _        = require('lodash')

//==============================================================================
// internal

var Grid = require('./modules/Grid')
var debugMaze = require('./modules/debugMaze')
var renderMaze = require('./modules/renderMaze')

//==============================================================================
// constants

var N = 1
  , S = 2
  , E = 4
  , W = 8

var DIRS     = ['N', 'S', 'E', 'W']
var DIRS_VAL = { N: N, S: S, E: E, W: W }
var DX       = { E: 1, W: -1, N:  0, S: 0 }
  , DY       = { E: 0, W:  0, N: -1, S: 1 }
  , OPPOSITE = { E: W, W:  E, N:  S, S: N }

//==============================================================================
// variables

//==============================================================================
// functions

function carvePassagesFrom(cx, cy, grid) {
  // create a list of directions that should be tried
  var directions = _.shuffle(DIRS)

  // for each direction
  for(var i=0; i < directions.length; i++) {
    var direction = directions[i]
    var nx = cx + DX[direction]
    var ny = cy + DY[direction]

    // if the ny value is within the grid
    // && the nx value is wthin the grid
    // && the [ny, nx] value is not set
    if( ny >= 0 && ny <= (grid.length - 1) &&
        nx >= 0 && nx <= (grid[ny].length - 1) &&
        grid[ny][nx] === 0) {
      grid[cy][cx] |= DIRS_VAL[direction]
      grid[ny][nx] |= OPPOSITE[direction]
      carvePassagesFrom(nx, ny, grid)
    }
  }
}

//==============================================================================
// run

var grid = new Grid(10, 20)
carvePassagesFrom(0, 0, grid.data)
renderMaze(grid)

//console.log(grid.data)
//debugMaze(grid.data)

}())
