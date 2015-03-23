(function(){
'use strict'

// TODO: growing tree options

//==============================================================================
// external

var MersenneTwister = require('mersenne-twister')
var TwoDimensionalArray = require('nylira-2d-array')
var _ = require('lodash')

//==============================================================================
// internal

//var debugMaze = require('./lib/debugMaze')
var renderMaze = require('./lib/debug/renderMaze')
var renderValues = require('./lib/debug/renderValues')
var recursiveBacktracker = require('./lib/algorithms/recursiveBacktracker')
var growingTree = require('./lib/algorithms/growingTree')
var MazeSettings = require('./lib/MazeSettings')
var intToDirection = require('./lib/utils/intToDirection')

var settings = new MazeSettings()

//==============================================================================
// functions

function maze(width, height, algorithm, sparseness, seed, debug) {
  width = width !== undefined ? width : 10
  height = height !== undefined ? height : width
  algorithm = algorithm !== undefined ? algorithm : 'growingtree:newest'
  seed = seed !== undefined ? seed : Math.floor(Math.random() * 1000)

  var generator = new MersenneTwister(seed)

  // NOTE: height and width are swapped here due to the structure of 2d arrays
  // [ [x1, y1], [x2, y1], [x3, y1] ]
  // [ [x1, y2], [x2, y2], [x3, y2] ]
  // [ [x1, y3], [x2, y3], [x3, y3] ]
  var grid = new TwoDimensionalArray(height, width)

  switch(algorithm) {
    case 'backtracker':
      recursiveBacktracker(generator, grid)
      break
    case 'growingtree':
      growingTree(settings, generator, grid)
      break
    case 'growingtree:random':
      growingTree(settings, generator, grid, 'random')
      break
    case 'growingtree:newest':
      growingTree(settings, generator, grid, 'newest')
      break
    case 'growingtree:middle':
      growingTree(settings, generator, grid, 'middle')
      break
    case 'growingtree:oldest':
      growingTree(settings, generator, grid, 'oldest')
      break
  }

  if(sparseness > 0) {
    sparsify(grid, sparseness)
  }

  if(debug) {
    renderMaze(grid)
    //renderValues(grid)
  }

  return grid
}

function isNSEW(cell) {
  return _.includes([1, 2, 4, 8], cell)
}

function dx(dir) {
  var output
  if(dir === 4 || dir === 5 || dir === 6) {
    output = 1
  } else if(dir === 8 || dir === 9 || dir === 10) {
    output = -1
  } else {
    output = 0
  }
  return output
}
function dy(dir) {
  var output
  if(dir === 2 || dir === 6 || dir === 10) {
    output = 1
  } else if(dir === 1 || dir === 5 || dir === 9) {
    output = -1
  } else {
    output = 0
  }
  return output
}
function opposite(dir) {
  var output
  switch(dir) {
    case  1: output =  2; break // opposite of N is S
    case  2: output =  1; break // opposite of S is N
    case  4: output =  8; break // opposite of E is W
    case  8: output =  4; break // opposite of W is E
    case  5: output = 10; break // opposite of NE is SW
    case 10: output =  5; break // opposite of SW is NE
    case  9: output =  6; break // opposite of NW is SE
    case  6: output =  9; break // opposite of SE is NW
  }
  return output
}

function move(cell, dir) {
  var y = cell[0]
  var x = cell[1]
  //console.log('move y', y)
  //console.log('move x', x)

  var nx = x + dx(dir)
  var ny = y + dy(dir)

  return [ny, nx]
}

function findDeadEnds(maze, debug) {
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

function healCellWithHole(cell, dir, maze, debug) {
  var cellValue = maze[cell[0]][cell[1]]
  var newCellValue = 0

  // remove the hole by replacing the hole with its opposite
  newCellValue = cellValue - opposite(dir)

  // set the maze cell to the healed value
  maze[cell[0]][cell[1]] = newCellValue

  //console.log('cell pre:', intToDirection(cellValue))
  //console.log('cell post:', intToDirection(newCellValue))

  return maze
}
function removeDeadEnds(deadEnds, maze, debug) {
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

function validMazeArea(maze) {
  var totalCells = maze.length * maze[0].length
  var validCells = 0
  for(var y=0; y < maze.length; y++) {
    for(var x=0; x < maze[y].length; x++) {
      if(maze[y][x] !== 0) {
        validCells++
      }
    }
  }
  return validCells / totalCells
}

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

    for(var i=0; i < sparseness; i++) {
      deadEnds = findDeadEnds(maze)
      maze = removeDeadEnds(deadEnds, maze)
    }

  }
}

module.exports = maze

}())
