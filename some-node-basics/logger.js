const EventE = require('events');

var url = 'http://mylogger.io/log';


class Logger extends EventE {

    log(message) {
        // Send an HTTP request    
        this.emit('logging', {message: message});
    
    }
}

module.exports = Logger;
// module.exports.endPoint = url;

