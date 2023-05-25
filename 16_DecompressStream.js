var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('sample.zip')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('sample_unzip.txt'));