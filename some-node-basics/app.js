const path = require('path');
const os = require('os');
const fs = require('fs');
const EventE = require('events');
const http = require('http');

var pathObj = path.parse(__filename);

console.log(pathObj);

// Some useful OS methods
console.log("Free memory" + os.freemem);
console.log("Total memory" + os.totalmem);

//Some useful FS methods

//sychnronous  (NOT GOOD)
console.log(fs.readdirSync("./"));

//asynchronous (GOOD)
console.log(fs.readdir("./", (err, files) => {
    if (err) console.log("Errror", err);
    else console.log('Result', files);
}));

// const emitter = new EventE();

// emitter.on("messageRecieved", (event) =>  {
//     console.log("Listener has listened" + " " + event.id + "  " + event.url) 
// });

// emitter.on('logging', (event) => {
//     console.log(event.message);
// })

// Using the event emitter

const Log = require('./logger');

const logger = new Log();
logger.on('logging', (arg) => {
    console.log('Listener listened', arg);
});

logger.log('message');

// Working with HTTP

const server = http.createServer();

server.on('connection', (socket) => {
    console.log("New connection");
})
server.listen(3000);

console.log('Listening at port 3000');