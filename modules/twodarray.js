(function(){
'use strict'

function TwoDArray(x, y) {
  var output = []
  for(var i=0; i < x; i++) {
    output[i] = []
    for(var j=0; j < y; j++) {
      output[i].push(0)
    }
  }
  return output
}

module.exports = TwoDArray

}())
