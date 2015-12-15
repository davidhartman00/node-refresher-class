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
  var result = 0;
  console.log('file changed lets read it');
  fileContents =  fs.readFileSync('poem.txt');
  console.log(fileContents);
  result = 324343535 * 44444444444444;
  console.log(result);
  console.log('hello from the end');
}
console.log('let us start watching a file');
fs.watchFile('poem.txt', runWhenFileChanges);
console.log('we are watching');
