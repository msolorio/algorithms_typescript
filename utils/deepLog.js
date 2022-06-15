const utils = require('util')

const deepLog = function(obj) {
  console.log(utils.inspect(obj, {
    showHidden: false,
    depth: null,
    colors: true
  }))
}

module.exports = deepLog
