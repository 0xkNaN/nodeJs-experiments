

/* Buffer
*********/

var b = new Buffer(0);

b.write('aaaaa');

console.log(b);



/*
var fs = require('fs');

var file = fs.readFile('./fileSystem/file.txt', function(err, data) {
  if(err) {
    return console.log('err : ', err);
  }
  console.log(data);
});

*/