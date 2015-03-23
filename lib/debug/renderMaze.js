(function(){
'use strict'

function print(data) {
  process.stdout.write(data)
}

// simple render function
/*
function renderMaze(maze) {
  var grid = maze.data

  // draw top border
  console.log(' ' + '_'.repeat(maze.width * 2  - 1))

  // draw each line
  for(var y=0; y < maze.height; y++) {
    print('|')

    for(var x=0; x < maze.width; x++) {

      print((grid[y][x] & S !== 0) ? ' ' : '_')

      if(grid[y][x] & E !== 0) {
        print(((grid[y][x] | grid[y][x + 1]) & S !== 0) ? ' ' : '_')
      } else {
        print('|')
      }
    }
    print('\n')
  }

}
*/
// simple render function
function renderMaze(grid) {

  // draw top border
  console.log(' ' + '_'.repeat(grid.length * 2  - 1))

  // draw each line
  for(var y=0; y < grid[0].length; y++) {
    print('|')

    for(var x=0; x < grid.length; x++) {
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
