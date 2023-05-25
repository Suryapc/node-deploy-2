

//writting a data into a file

let fs = require('fs');
let data = `
My Learning
Track your progress with the free "My Learning" program here at W3Schools.

Log in to your account, and start earning points!

This is an optional feature. You can study W3Schools without using My Learning.
`;

var writerStream = fs.WriteStream('sample1.txt');

writerStream.write(data,'utf-8');
writerStream.end();

writerStream.on('error',function(err){
console.log(err);
});

console.log(`writting the data process is completed!!`)