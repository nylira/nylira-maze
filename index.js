(function(){
'use strict'

//==============================================================================
// external

var MersenneTwister = require('mersenne-twister')
var TwoDimensionalArray = require('nylira-2d-array')

//==============================================================================
// internal

//var debugMaze = require('./lib/debug/debugMaze')
var renderMaze = require('./lib/debug/renderMaze')
//var renderValues = require('./lib/debug/renderValues')

var recursiveBacktracker = require('./lib/algorithms/recursiveBacktracker')
var growingTree = require('./lib/algorithms/growingTree')

var MazeSettings = require('./lib/utils/MazeSettings')
var sparsify = require('./lib/utils/sparsify')

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

module.exports = maze
}())
