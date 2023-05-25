var fs = require('fs');
fs.stat('sample.txt', function (err, stats) {
    if (err) throw err;
    var fileInfo = `
    isDirectory: ${stats.isDirectory()}\n
    isFile : ${stats.isFile()} \n
    FileSize: ${stats.size} \n
    CreatedTime: ${stats.atime} \n
    `;


    fs.open('fileInfo.txt', 'w', function (err, done) {
        if (err) throw err;
        fs.writeFile('fileInfo.txt', fileInfo, function (err, success) {
            if (err) throw err;
        });
    });
});