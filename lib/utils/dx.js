(function() {
'use strict'

function dx(dir) {
  var output
  if(dir === 4 || dir === 5 || dir === 6) {
    output = 1
  } else if(dir === 8 || dir === 9 || dir === 10) {
    output = -1
  } else {
    output = 0
  }
  return output
}

module.exports = dx
}())
