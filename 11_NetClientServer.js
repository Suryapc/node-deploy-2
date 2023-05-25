const net= require('net');

const server = net.createServer(function(socket){
                socket.write(`echo server`);
                socket.pipe(socket);
});

const client = new net.Socket();

client.connect(1337, '127.0.0.1', function() {
    console.log(`its connected`);
    client.write(`data passed: connection closed`);

});

client.on('data', function(data) {
    console.log(`received: ${data}`);
});


server.listen(1337,'127.0.0.1');