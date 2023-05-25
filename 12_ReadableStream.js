//Reading  a data from a file

let fs = require('fs');
let data = '';

var readerStream = fs.createReadStream('sample_content.txt');
readerStream.setEncoding('utf-8');

readerStream.on('data', function (chunck) {
    data += chunck;
});

readerStream.on('end', function () {
    console.log(data);
})

readerStream.on('error', function (err) {
    console.log(err);
});

console.log('reading the data process completed');