(function(){
'use strict'

function randomInteger(min, max, seed) {
  seed = seed !== undefined ? seed : Math.random()
  return Math.floor(seed * (max - min + 1)) + min
}

module.exports = randomInteger
}())
