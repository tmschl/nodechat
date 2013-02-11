var defaultCorsHeaders = function(){
  var headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept, X-PINGOTHER",
    "access-control-max-age": 10 // Seconds.
  };

  return headers;
}

exports.defaultCorsHeaders = defaultCorsHeaders;