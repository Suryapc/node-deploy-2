var http=require('http');

http.createServer(function(response){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.end('displaying at web browser');
}).listen(8081);

console.log('server is listening at 8081');
console.log(__filename)