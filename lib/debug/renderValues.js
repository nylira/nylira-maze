(function() {
'use strict'

function renderValues(array) {
  var output = ''

  var height = array.length
  var width = array[0].length

  var size = '[' + height + '][' + width + ']'
  var label = size + 'maze values:\n'

  output += label

  // for each line
  for(var i=0; i < height; i++) {
    var line = '['

    // for each value in a line
    for(var j=0; j < array[i].length; j++) {
      if(array[i][j] < 10) {
        line += (' ').repeat(2)
      } else if(array[i][j] < 100) {
        line += (' ').repeat(1)
      }
      line += array[i][j]

      // add a comma
      if(j < array[i].length - 1) { line += ',' }
    }

    line += ' ]'

    // add a line break
    if(i < height - 1) { line += '\n' }

    output += line
  }
  console.log(output)

  return output
}

module.exports = renderValues
}())
