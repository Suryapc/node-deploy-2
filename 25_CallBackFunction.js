const fileSystem = require('fs');

// const data = fileSystem.readFileSync('sample.txt');
// console.log(data.toString());

fileSystem.readFile('sample.txt', function(err, buffer) {
    if(err) throw (err);
    console.log(buffer.toString());
});