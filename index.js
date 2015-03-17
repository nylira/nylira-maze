(function(){
'use strict'

//==============================================================================
// external

var mersenne = require('mersenne')
  , _        = require('lodash')

//==============================================================================
// internal

var twodarray = require('./modules/twodarray')

//==============================================================================
// constants

var N = 1
  , S = 2
  , E = 4
  , W = 8

var DX       = { 4: 1, 8: -1, 1:  0, 2: 0 }
  , DY       = { 4: 0, 8:  0, 1: -1, 2: 1 }
  , OPPOSITE = { 4: W, W:  E, N:  S, S: N }


//==============================================================================
// variables

var x = 10
var y = 10

// create a new grid
var grid = twodarray(y, x)
//console.log(grid)

//==============================================================================
// functions

function within(value, rangeMin, rangeMax) {
  return  _.contains(_.range(rangeMin, rangeMax), value)
}

// kick off the worker function
function carvePassagesFrom(cx, cy, grid) {

  // create a list of directions that should be tried
  var directions = _.shuffle([N, S, E, W])

  // for each direction
  for(var i=0; i < directions.length; i++) {
    var direction = directions[i]
    var nx = cx + DX[direction]
    var ny = cy + DY[direction]

    // if the nx value is within the grid
    // && the ny value is wthin the grid
    // && the [nx, ny] value is not set
    if( within(ny, 0, grid.length) &&
        within(nx, 0, grid[ny].length) &&
        grid[ny][nx] === 0) {
      grid[cy][cx] |= direction
      grid[ny][nx] |= OPPOSITE[direction]
      carvePassagesFrom(nx, ny, grid)
    }
  }
}

//==============================================================================
// run

carvePassagesFrom(0, 0, grid)

console.log(grid)


}())
