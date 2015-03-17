(function(){
'use strict'

//==============================================================================
// external

var mersenne = require('mersenne')
  , ndarray  = require('ndarray')
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

// kick off the worker function
function carvePassagesFrom(cx, cy, grid) {

  // create a list of directions that should be tried
  var directions = _.shuffle([N, S, E, W])

  // for each direction
  for(var i=0; i < directions.length; i++) {
    var direction = directions[i]
    //console.log('directions[i]', directions[i])

    // next X value
    var nx = cx + DX[direction]
    //console.log('nx', nx)

    // next Y value
    var ny = cy + DY[direction]
    //console.log('ny', ny)
    console.log('grid[ny]', grid[ny])

    var nyIsValid = _.contains(_.range(0, grid.length - 1), ny)
    var nxIsValid = _.contains(_.range(0, grid[ny].length - 1), nx)
    var cellIsEmpty = grid[ny][nx] === 0

    if(nyIsValid && nxIsValid && cellIsEmpty) {
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
