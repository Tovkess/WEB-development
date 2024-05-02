const EventEmitter = require('events');

class Stock extends EventEmitter {
    constructor() {
        super();
    }
}

module.exports = Stock;