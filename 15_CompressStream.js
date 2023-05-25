
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('sample.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('sample.zip'));







