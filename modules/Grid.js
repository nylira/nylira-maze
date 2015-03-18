(function() {
'use strict'

var TwoDArray = require('./TwoDArray')

function Grid(height, width){
  this.height = height !== undefined ? height : 10
  this.width = width !== undefined? width: height
  this.cells = new TwoDArray(this.height, this.width)
}

module.exports = Grid
}())

