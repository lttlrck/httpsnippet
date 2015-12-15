'use strict'

module.exports = {
  info: {
    key: 'protocolEngine',
    title: 'Protocol Engine',
    extname: '.script',
    default: 'native'
  },

  native: require('./native')
}
