// Challenge 2
/*
create a http server that ends the connection with the
contents of the a file called poem.txt
*/


var fs = require('fs');
var http = require('http');

var endFile = fs.readFileSync('poem.txt', 'utf8');

function handleRequest(request, response){
  console.log( 'in came a request');
  response.end(endFile);
};

var myServer = http.createServer(handleRequest);

myServer.listen(3030, function(){
  console.log('listening on TCP port 3030');
});
