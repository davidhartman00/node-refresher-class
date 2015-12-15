var fs = require('fs');

fs.readFile('poem.txt', 'utf8', function(err, data){
  if (err) throw err;
  console.log(data);
});
