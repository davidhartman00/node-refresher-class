var fs    = require('fs');
// var fName = 'poem.txt'
//
//
// /*
// SET UP A WATECHER FR  FILE THAT PRINTER THE FILE TEXT EVERY TIME IT CHANGES
// */
//
//
// function doStuff(){
//   fs.readFile(fName, 'utf8', function(err, data){
//     if (err) throw err;
//     console.log(data);
//   });
// }
//
// fs.watchFile( fName , doStuff);
//
// console.log('We are watching');


function runWhenFileChanges(cur, pre) {
  console.log('file changed lets read it');
  fs.readFile('poem.txt', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
  });
  console.log('hello from the end');
}
console.log('let us start watching a file');
fs.watchFile('poem.txt', runWhenFileChanges);
console.log('we are watching');
