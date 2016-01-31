'use strict'

module.exports = {
  info: {
    key: 'tcl',
    title: 'tcl',
    extname: '.tcl',
    default: 'native'
  },

  native: require('./native')
}
