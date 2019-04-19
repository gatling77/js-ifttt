'use strict';


/**
 *
 * accept String  (optional)
 * acceptCharset String  (optional)
 * acceptEncoding List  (optional)
 * xRequestID String  (optional)
 * returns inline_response_200_1
 **/
exports.triggersAuthorization_request_performedFieldsCardOptionsPOST = function(accept,acceptCharset,acceptEncoding,xRequestID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "values" : [ {
      "label" : "label",
      "value" : "value"
    }, {
      "label" : "label",
      "value" : "value"
    } ],
    "label" : "label",
    "value" : "value"
  }, {
    "values" : [ {
      "label" : "label",
      "value" : "value"
    }, {
      "label" : "label",
      "value" : "value"
    } ],
    "label" : "label",
    "value" : "value"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body object Trigger request for authorization_request_performed.
 * accept String  (optional)
 * acceptCharset String  (optional)
 * acceptEncoding List  (optional)
 * xRequestID String  (optional)
 * returns inline_response_200
 **/
exports.triggersAuthorization_request_performedPOST = function(body,accept,acceptCharset,acceptEncoding,xRequestID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "meta" : {
      "id" : "id",
      "timestamp" : 0
    },
    "created_at" : { },
    "card" : { }
  }, {
    "meta" : {
      "id" : "id",
      "timestamp" : 0
    },
    "created_at" : { },
    "card" : { }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

