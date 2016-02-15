/**
 * @description
 * HTTP code snippet generator for native Protocol Engine
 *
 * @author
 * @lttlrck
 *
 */

'use strict'

var util = require('util')
var CodeBuilder = require('../../helpers/code-builder')

module.exports = function (source, options) {
  var opts = util._extend({
    indent: '  '
  }, options)

  var code = new CodeBuilder(opts.indent)

  var settings = {
    async: true,
    crossDomain: true,
    url: source.fullUrl,
    method: source.method,
    headers: source.allHeaders
  }

  delete settings.headers['content-type'];

  var headers= JSON.stringify( settings.headers);

  code.push('@output("dataReq", { method:"'+source.method+'", path:"'+source.fullUrl+'", content: '+source.postData.text+', headers: '+headers+', timeout: 3000 }, "lower");')

  return code.join()
}

module.exports.info = {
  key: 'protocolEngine',
  title: 'Protocol Engine',
  link: 'http://docs.valid8.com/',
  description: 'Perform an asynchronous HTTP request'
}
