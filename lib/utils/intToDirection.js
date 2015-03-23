(function(){
'use strict'

function intToDirection(int, pretty) {
  var dir
  if(pretty) {
    switch(int) {
      case 0: dir  = '*ERR'; break
      case 1: dir  = '   N'; break
      case 2: dir  = '   S'; break
      case 3: dir  = '  NS'; break
      case 4: dir  = '   E'; break
      case 5: dir  = '  NE'; break
      case 6: dir  = '  SE'; break
      case 7: dir  = ' NSE'; break
      case 8: dir  = '   W'; break
      case 9: dir  = '  NW'; break
      case 10: dir = '  SW'; break
      case 11: dir = ' NSW'; break
      case 12: dir = '  EW'; break
      case 13: dir = ' NEW'; break
      case 14: dir = ' SEW'; break
      case 15: dir = 'NSEW'; break
    }
  } else {
    switch(int) {
      case 0: dir  = '*ERR'; break
      case 1: dir  = 'N'; break
      case 2: dir  = 'S'; break
      case 3: dir  = 'NS'; break
      case 4: dir  = 'E'; break
      case 5: dir  = 'NE'; break
      case 6: dir  = 'SE'; break
      case 7: dir  = 'NSE'; break
      case 8: dir  = 'W'; break
      case 9: dir  = 'NW'; break
      case 10: dir = 'SW'; break
      case 11: dir = 'NSW'; break
      case 12: dir = 'EW'; break
      case 13: dir = 'NEW'; break
      case 14: dir = 'SEW'; break
      case 15: dir = 'NSEW'; break
    }
  }
  return dir
}

module.exports = intToDirection
}())
