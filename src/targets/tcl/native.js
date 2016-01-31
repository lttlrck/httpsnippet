/**
 * @description
 * HTTP code snippet generator for TCL
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

  code.push("package require http");
  code.push("set url "+source.fullUrl);
  code.push("set content "+source.postData.text);
  code.push("set method "+source.method.toUpperCase());

  code.push("set http [::http::geturl $url -method $method -type application/json -query $content]");
  code.push("set html [::http::data $http]");

  return code.join("\n");
}

module.exports.info = {
  key: 'tcl',
  title: 'tcl',
  link: 'http://www.tcl.tk/',
  description: 'Perform a TCL HTTP request'
}
