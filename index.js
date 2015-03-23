(function(){
'use strict'

//==============================================================================
// external

//var mersenne = require('mersenne')
var _        = require('lodash')
var Grid = require('nylira-grid')

//==============================================================================
// internal

//var debugMaze = require('./lib/debugMaze')
var renderMaze = require('./lib/debug/renderMaze')
var renderValues = require('./lib/debug/renderValues')
var recursiveBacktracker = require('./lib/algorithms/recursiveBacktracker')

//==============================================================================
// functions

function maze(width, height, mazeAlgorithm, debug ) {
  width = width !== undefined ? width : 10
  height = height !== undefined ? height : 10
  mazeAlgorithm = mazeAlgorithm !== undefined ? mazeAlgorithm : 'backtracker'

  var grid = new Grid(width, height)

  switch(mazeAlgorithm) {
    case 'backtracker':
      recursiveBacktracker(0, 0, grid.cells)
      break
  }

  if(debug) {
    renderMaze(grid)
    renderValues(grid.cells)
  }

  return grid
}

module.exports = maze

}())
