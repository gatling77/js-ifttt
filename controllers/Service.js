'use strict';

var utils = require('../utils/writer.js');
var Service = require('../service/ServiceService');

module.exports.statusGET = function statusGET (req, res, next) {
  var accept = req.swagger.params['Accept'].value;
  var acceptCharset = req.swagger.params['Accept-Charset'].value;
  var acceptEncoding = req.swagger.params['Accept-Encoding'].value;
  var xRequestID = req.swagger.params['X-Request-ID'].value;
  Service.statusGET(accept,acceptCharset,acceptEncoding,xRequestID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
