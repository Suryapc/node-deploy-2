var buf=new Buffer.alloc(10);

var buf=new Buffer([23,87,89,54]);

var buf=new Buffer('Node is a server side pgm lang','utf-8');

console.log(`number of octets:${buf.length}`);

var buf=new Buffer.alloc(26);
for(i=0; i<26; i++){
  buf[i] =  i+97;
}

console.log(`buf: ${buf.toString('ascii')}`);
console.log(`buf: ${buf.toString('ascii',2,5)}`);