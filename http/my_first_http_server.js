//require http module
var http = require('http');

function handleRequest(request, response){
  console.log('somebody made a request');
  response.end('hello from the server');
}

//create a http server
var myServer = http.createServer(handleRequest);

//start lintening on TCP port 1337
myServer.listen(1337, function(){
  console.log('server started on port 1337');
});
