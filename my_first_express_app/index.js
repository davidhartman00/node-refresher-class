var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.sendFile(__dirname +'/index.html');
});

app.get('/user/:name', function(request,response){
  response.send('Well, Hello Miss ' + request.params.name);
});

app.get('/about', function(request,response){
  response.send('This is the about page');
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
