// importing the required modules
var events = require('events');

// creating the EventEmitter object
var eventEmitter = new events.EventEmitter();

// create the method connectHandler(3)
var connectHandler = function connected() {
    console.log('connection successful!!');

    // fire the event (dataReceived)
    eventEmitter.emit('dataReceived');
}


// bind the dataReceived with the anonymous function (2)
eventEmitter.on('connection', connectHandler);

//(4)
eventEmitter.on('dataReceived', function() {
    console.log('data received successfully!!')
})


// fire the event (connection)(1)
eventEmitter.emit('connection');

console.log('the EventEmitter process...')