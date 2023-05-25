
var fs = require('fs');
var readerStream = fs.createReadStream('sample.txt');
var writerStream = fs.createWriteStream('pipingsample.txt');
readerStream.pipe(writerStream);
console.log('the concept of piping stream are process')