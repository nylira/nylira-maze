(function(){
'use strict'

var randomInteger = require('../utils/randomInteger')
var shuffle = require('../utils/shuffle')

function nextIndex(ceil, type) {
  // set the default index to random
  type = type !== undefined ? type : 'random'

  var index

  switch(type) {
    case 'random':
      // similar to prim's algorithm
      index = randomInteger(0, ceil - 1)
      break
    case 'newest':
      // similar to recursive backtracking
      index = ceil - 1
      break
    case 'middle':
      index = Math.floor(ceil / 2)
      break
    case 'oldest':
      index = 0
      break
  }
  return index
}

function growingTree(settings, generator, grid, type, cx, cy) {
  // default parameters
  cx = cx !== undefined ? cx : 0
  cy = cy !== undefined ? cy : 0
  type = type !== undefined ? type : 'random'

  var width = grid[0].length
  var height = grid.length
  var cells = []

  var x = randomInteger(0, width - 1, generator.random())
  var y = randomInteger(0, height - 1, generator.random())
  cells.push([x, y])

  while(cells.length > 0) {

    // pick the next cell
    var index = nextIndex(cells.length, type)
    //console.log('index', index)
    //console.log('cells[i]', cells[index])

    x = cells[index][0]
    y = cells[index][1]

    var directions = shuffle(settings.dirs, generator.random())

    for(var i=0; i < directions.length; i++) {
      var dir = directions[i]

      var nx = x + settings.dx[dir]
      var ny = y + settings.dy[dir]

      if(nx >= 0 && ny >= 0 && nx < width && ny < height && grid[ny][nx] === 0) {

        //renderValues(grid)
        //console.log('grid[' + y + '][' + x + ']:')
        //console.log(grid[y][x])
        grid[y][x] |= settings.dirsVal[dir]
        grid[ny][nx] |= settings.opposite[dir]
        cells.push([nx, ny])
        index = null
        break
      }
    }
    if(index !== null) {
      cells.splice(index, 1)
    }
  }
}

module.exports = growingTree
}())
