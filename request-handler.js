/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */
  var defaultCorsHeaders = require("./lib/cors.js").defaultCorsHeaders;
  var messages = [];


exports.handleRequest = function(request, response) {

  console.log('whatever')
  var statusCode = 200;
  var headers = defaultCorsHeaders();
  headers['Content-Type'] = "application/json";

  if (request.method === "POST" && request.url === '/1/classes/bestRoom'){
    console.log('WE BE POSTIN')
    response.writeHead(statusCode, headers);
    response.end();
    var data = ''; 
    request.on("data", function (data) {
      var mess = JSON.parse(data);
      messages.push(mess);
      console.log(messages);
    });

  } 
  
  if (request.method === "GET" && request.url === '/1/classes/bestRoom?order=-createdAt'){
    console.log('WE BE GETTIN')
    response.writeHead(statusCode, headers);
    response.end(console.log(JSON.stringify(messages)));
  } 
  

};