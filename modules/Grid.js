(function() {
'use strict'

var TwoDArray = require('./TwoDArray')

function Grid(width, height){
  this.height = height
  this.width = width
  this.data = new TwoDArray(this.height, this.width)
}

module.exports = Grid
}())

