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
  height = height !== undefined ? height : 10
  algorithm = algorithm !== undefined ? algorithm : 'backtracker'
  seed = seed !== undefined ? seed : Math.floor(Math.random() * 1000)

  var settings = new MazeSettings(seed)

  var grid = new TwoDimensionalArray(width, height)

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
    renderValues(grid)
  }

  return grid
}

module.exports = maze

}())
