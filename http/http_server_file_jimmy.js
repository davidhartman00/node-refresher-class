
var http = require('http');
var fs = require('fs');
var fileContents = fs.readFileSync('index.html', 'utf8');

function handleRequest( request, response){
  console.log('request received');
  response.end(fileContents);
}

var myServer = http.createServer(handleRequest)

myServer.listen (1337, function(){ console.log('listening on 1337')})
