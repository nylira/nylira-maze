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

var settings = new MazeSettings()

//==============================================================================
// functions

function maze(width, height, algorithm, seed, debug) {
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

  if(debug) {
    renderMaze(grid)
    //renderValues(grid)
  }

  return grid
}

function isNSEW(cell) {
  return _.includes([1, 2, 4, 8], cell)
}

function findDeadEnds(maze) {
  var deadEnds = []
  for(var y=0; y < maze.length; y++) {
    for(var x=0; x < maze[y].length; x++) {
      if(isNSEW(maze[y][x])) {
        deadEnds.push([y,x])
      }
    }
  }
  console.log('deadEnds', deadEnds)
  return deadEnds
}

function removeDeadEnds(deadEnds, maze) {
  for(var i=0; i < deadEnds.length; i++) {
    console.log('deadEnds[i]', deadEnds[i])
    maze[deadEnds[i][0]].splice(deadEnds[i][1], 1)
  }
  return maze
}

function sparsify(maze, sparseness) {
  sparseness = sparseness !== undefined ? sparseness : 3

  for(var i=0; i < sparseness; i++) {
    // find a list of dead ended cells to cull
    var deadEnds = findDeadEnds(maze)

    // remove the cells
    maze = removeDeadEnds(deadEnds, maze)
  }

  renderMaze(maze)
  renderValues(maze)
}

sparsify(maze())

module.exports = maze

}())
