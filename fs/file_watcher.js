console.log('Let us watch a file');
// bring in the the fisle system module now and give the fs name
var fs = require('fs');

function doStuff(curr, prev){
  console.log(curr);
  console.log(prev);
}

fs.watchFile('poem.txt', doStuff);

console.log('We are watching');
