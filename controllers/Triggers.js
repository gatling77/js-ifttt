'use strict';

var utils = require('../utils/writer.js');
var Triggers = require('../service/TriggersService');

module.exports.triggersAuthorization_request_performedFieldsCardOptionsPOST = function triggersAuthorization_request_performedFieldsCardOptionsPOST (req, res, next) {
  var accept = req.swagger.params['Accept'].value;
  var acceptCharset = req.swagger.params['Accept-Charset'].value;
  var acceptEncoding = req.swagger.params['Accept-Encoding'].value;
  var xRequestID = req.swagger.params['X-Request-ID'].value;
  Triggers.triggersAuthorization_request_performedFieldsCardOptionsPOST(accept,acceptCharset,acceptEncoding,xRequestID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.triggersAuthorization_request_performedPOST = function triggersAuthorization_request_performedPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  var accept = req.swagger.params['Accept'].value;
  var acceptCharset = req.swagger.params['Accept-Charset'].value;
  var acceptEncoding = req.swagger.params['Accept-Encoding'].value;
  var xRequestID = req.swagger.params['X-Request-ID'].value;
  Triggers.triggersAuthorization_request_performedPOST(body,accept,acceptCharset,acceptEncoding,xRequestID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
