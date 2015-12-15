var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// lets connect to the mongo DB
mongoose.connect('mongodb://localhost/movies_api')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error: '));
db.once('open', function (callback){
  console.log('succesfully connnected, BOOM!');
});

var app = express();
// set the static folder from public
app.use(express.static('public'));
// make json objects available in request
// let's setup the bodyParser as middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// var moviesArray = [{title: 'T2', year: 1990}, {title: 'TMNT', year: 1989}];
// let's defind a schema for movies
var movieSchema = mongoose.Schema({
  title: String,
  year: Number
});

//  let's create the model for movies
var Movie = mongoose.model('Movie', movieSchema);

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.get('/movie/new', function(request, response){
  response.sendFile(__dirname + '/new_movie.html')
});

app.get('/movie/:id', function(request, response){
  Movie.findById(request.params.id, function(err, pelicula){
    if(err) throw err;
    response.json(pelicula);
  })
});

app.get('/movies', function(request, response){
  Movie.find({}, function(err, peliculas){
    if(err) throw err;
    response.json(peliculas);
  })
})



app.post('/movie', function(request, response){
  console.log(request.body);
  var pelicula = new Movie(request.body);

  pelicula.save(function(err, pelicula){
    if(err) throw err;
    response.json({message: 'movie saved', movie: pelicula});
  });

});

app.listen(3000, function(){
  console.log('server started on port 3000');
})
