(function(){
'use strict'

//==============================================================================
// external

var mersenne = require('mersenne')
  , _        = require('lodash')

//==============================================================================
// internal

var Grid = require('./modules/Grid')

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

// height, width
var grid = new Grid(4, 4)

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

function print(data) {
  process.stdout.write(data)
}

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

// simple render function
function renderMaze(maze) {
  var grid = maze.data

  // draw top border
  console.log(' ' + '_'.repeat(maze.width * 2  - 1))

  // draw each line
  for(var y=0; y < maze.height; y++) {
    print('|')

    for(var x=0; x < maze.width; x++) {
      print((grid[y][x] & S !== 0) ? ' ' : '_')
      if(grid[y][x] & E !== 0) {
        print(((grid[y][x] | grid[y][x+1]) & S !== 0) ? ' ' : '_')
      } else {
        print('|')
      }
    }
    print('\n')
  }

}

//==============================================================================
// run

carvePassagesFrom(0, 0, grid.data)
console.log(grid.data)

debugMaze(grid.data)
renderMaze(grid)

}())
