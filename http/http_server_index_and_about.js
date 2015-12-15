var http = require('http');
var fs = require('fs');
var aboutFileContents = fs.readFileSync('about.html', 'utf8');
var indexFileContents = fs.readFileSync('index.html', 'utf8');

function handleRequest( request, response){
  console.log('request received');
  console.log(request['url']);
  if (request['url'] ===  '/about'){
    response.end(aboutFileContents)
  }
  else if (request['url'] === '/'){
    response.end(indexFileContents)
  }
  else {response.end('hello ' + request['url'] );}
}

var myServer = http.createServer(handleRequest)

myServer.listen (1337, function(){ console.log('listening on 1337')})
