(function() {
'use strict'

var TwoDArray = require('./TwoDArray')

function Grid(width, height){
  this.width = width
  this.height = height
  this.data = new TwoDArray(this.width, this.height)
}

module.exports = Grid
}())

