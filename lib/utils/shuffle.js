(function(){
'use strict'

var randomInteger = require('./randomInteger')

function shuffle(array, seed) {
  for(var i = array.length - 1; i > 0; i--) {
    var j = randomInteger(0, i, seed)
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

module.exports = shuffle
}())
