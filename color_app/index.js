// referr to http://socket.io/get-started/chat/ for info on this application
var express = require('express');
var app     = express();
var http    = require('http');
var server  = http.createServer(app);

// setup the static files folder
app.use(express.static('public'));

// create  websocket server
var io = require('socket.io')(server);
app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('somebody has connected');
  socket.on('color', function(data){
    console.log(data);
    io.emit('color', data);
  })
});

server.listen(3000, function(){
  console.log('server started on port 3000');
});
