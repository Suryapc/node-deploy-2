var fs = require('fs');
var data = `
writing the sample data into the file
`;

fs.writeFile('write_new_sample.txt', data, function (err, success) {
    if (err) throw err;
    console.log(`writing completed`);
})