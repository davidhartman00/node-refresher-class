var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// make json objects available in request
// let's setup the bodyParser as middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var moviesArray = [{title: 'T2', year: 1990}, {title: 'TMNT', year: 1989}];

app.get('/', function(request, response){
  response.send('Welcome to my app');
});

app.get('/movies', function(request, response){
  response.json(moviesArray);
})

app.get('/movie/:id', function(request, response){
  response.json(moviesArray[request.params.id]);
})

app.post('/movie', function(request, response){
  console.log(request.body);
  response.send('thanks for saving the movie');
  moviesArray.push(request.body);
});

app.listen(3000, function(){
  console.log('server started on port 3000');
})
