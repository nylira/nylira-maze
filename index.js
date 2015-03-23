(function(){
'use strict'

//==============================================================================
// external

var MersenneTwister = require('mersenne-twister')
var TwoDimensionalArray= require('nylira-2d-array')

//==============================================================================
// internal

//var debugMaze = require('./lib/debugMaze')
var renderMaze = require('./lib/debug/renderMaze')
var renderValues = require('./lib/debug/renderValues')
var recursiveBacktracker = require('./lib/algorithms/recursiveBacktracker')
var growingTree = require('./lib/algorithms/growingTree')
var MazeSettings = require('./lib/MazeSettings')

//==============================================================================
// functions

function maze(width, height, algorithm, seed, debug) {
  width = width !== undefined ? width : 10
  height = height !== undefined ? height : width
  algorithm = algorithm !== undefined ? algorithm : 'growing tree'
  seed = seed !== undefined ? seed : Math.floor(Math.random() * 1000)

  var settings = new MazeSettings(seed)

  // NOTE: height and width are swapped here due to the structure of 2d arrays
  // [ [x1, y1], [x2, y1], [x3, y1] ]
  // [ [x1, y2], [x2, y2], [x3, y2] ]
  // [ [x1, y3], [x2, y3], [x3, y3] ]
  var grid = new TwoDimensionalArray(height, width)

  switch(algorithm) {
    case 'backtracker':
      recursiveBacktracker(settings, grid)
      break
    case 'growingtree':
      growingTree(settings, grid)
      break
  }

  if(debug) {
    renderMaze(grid)
    //renderValues(grid)
  }

  return grid
}

module.exports = maze

}())
