(function(){
'use strict'

function MazeSettings() {
  var globals = {}

  var N = 1
  var S = 2
  var E = 4
  var W = 8
  var DIRS     = ['N', 'S', 'E', 'W']
  var DIRS_VAL = { N: N, S: S, E: E, W: W }
  var DX       = { E: 1, W: -1, N:  0, S: 0 }
  var DY       = { E: 0, W:  0, N: -1, S: 1 }
  var OPPOSITE = { E: W, W:  E, N:  S, S: N }

  globals = {
    n: N
  , s: S
  , e: E
  , w: W
  , dirs: DIRS
  , dirsVal: DIRS_VAL
  , dx: DX
  , dy: DY
  , opposite: OPPOSITE
  }
  return globals
}

module.exports = MazeSettings
}())
