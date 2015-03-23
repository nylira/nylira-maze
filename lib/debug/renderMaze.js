(function(){
'use strict'

function print(data) {
  process.stdout.write(data)
}

function renderMaze(grid) {
  var width = grid[0].length
  var height = grid.length

  // draw top border
  console.log('_'.repeat(width * 2 + 1))

  // draw each line
  for(var y=0; y < height; y++) {
    print('|')

    for(var x=0; x < width; x++) {
      switch(grid[y][x]) {
        /*se 1: slot  = '   N'; break
        case 2: slot  = '   S'; break
        case 3: slot  = '  NS'; break
        case 4: slot  = '   E'; break
        case 5: slot  = '  NE'; break
        case 6: slot  = '  SE'; break
        case 7: slot  = ' NSE'; break
        case 8: slot  = '   W'; break
        case 9: slot  = '  NW'; break
        case 10: slot = '  SW'; break
        case 11: slot = ' NSW'; break
        case 12: slot = '  EW'; break
        case 13: slot = ' NEW'; break
        case 14: slot = ' SEW'; break
        case 15: slot = 'NSEW'; break*/
        case 0:  print('█|'); break
        case 1:  print('_|'); break
        case 2:  print(' |'); break
        case 3:  print(' |'); break
        case 4:  print('__'); break
        case 5:  print('__'); break
        case 6:  print('  '); break
        case 7:  print('  '); break
        case 8:  print('_|'); break
        case 9:  print('_|'); break
        case 10: print(' |'); break
        case 11: print(' |'); break
        case 12: print('__'); break
        case 13: print('__'); break
        case 14: print('  '); break
        case 15: print('  '); break
      }
    }
    print('\n')
  }
}

module.exports = renderMaze
}())
