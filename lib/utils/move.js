(function(){
'use strict'

var dx = require('./dx')
var dy = require('./dy')

function move(cell, dir) {
  var y = cell[0]
  var x = cell[1]
  //console.log('move y', y)
  //console.log('move x', x)

  var nx = x + dx(dir)
  var ny = y + dy(dir)

  return [ny, nx]
}

module.exports = move
}())
