 var path = require('path');

 console.log(`normalize with:${path.normalize('/')}`);
 console.log(`normalize with:${path.normalize('/..')}`);
 console.log(`normalize with:${path.normalize('/../..')}`);
 console.log(`joinPath:${path.join('/','user','john')}`);
 console.log(`dirname :${path.dirname('node-concepts')}`);
 console.log(`basename :${path.basename('node-concepts')}`);
 console.log(`extname:${path.extname('fileInfo.txt')}`);