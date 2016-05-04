(function(){
'use strict'

function dy(dir) {
  var output
  if(dir === 2 || dir === 6 || dir === 10) {
    output = 1
  } else if(dir === 1 || dir === 5 || dir === 9) {
    output = -1
  } else {
    output = 0
  }
  return output
}

module.exports = dy
}())
