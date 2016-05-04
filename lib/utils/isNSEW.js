(function(){
'use strict'

var _ = require('lodash')

function isNSEW(cell) {
  return _.includes([1, 2, 4, 8], cell)
}

module.exports = isNSEW
}())
