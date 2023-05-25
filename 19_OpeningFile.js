var fs = require('fs');

var myData=`
add or  the data
`;

fs.open('new_data.txt','w',function(err,openFile){
                if (err) throw err;
fs.writeFile('new_data.txt', myData, function (err, success) {
               if (err) throw err; 
console.log(`writting the sae`);

});
});