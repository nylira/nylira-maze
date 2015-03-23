(function(){
'use strict'

//==============================================================================
// external

//var mersenne = require('mersenne')
var TwoDimensionalArray= require('nylira-2d-array')

//==============================================================================
// internal

//var debugMaze = require('./lib/debugMaze')
var renderMaze = require('./lib/debug/renderMaze')
var renderValues = require('./lib/debug/renderValues')
var recursiveBacktracker = require('./lib/algorithms/recursiveBacktracker')
var growingTree = require('./lib/algorithms/growingTree')

//==============================================================================
// functions

function maze(width, height, mazeAlgorithm, debug) {
  width = width !== undefined ? width : 10
  height = height !== undefined ? height : 10
  mazeAlgorithm = mazeAlgorithm !== undefined ? mazeAlgorithm : 'backtracker'

  var grid = new TwoDimensionalArray(width, height)

  switch(mazeAlgorithm) {
    case 'backtracker':
      recursiveBacktracker(grid)
      break
    case 'growingtree':
      growingTree(grid)
      break
  }

  if(debug) {
    renderMaze(grid)
    renderValues(grid)
  }

  return grid
}

module.exports = maze

}())
