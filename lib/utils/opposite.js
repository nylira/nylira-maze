(function() {
'use strict'

function opposite(dir) {
  var output
  switch(dir) {
    case  1: output =  2; break // opposite of N is S
    case  2: output =  1; break // opposite of S is N
    case  4: output =  8; break // opposite of E is W
    case  8: output =  4; break // opposite of W is E
    case  5: output = 10; break // opposite of NE is SW
    case 10: output =  5; break // opposite of SW is NE
    case  9: output =  6; break // opposite of NW is SE
    case  6: output =  9; break // opposite of SE is NW
  }
  return output
}

module.exports = opposite
}())
