const EventEmitter = require('events');

class Stock extends EventEmitter {
    constructor(item) {
        super();
        this.item = item;
    }
}

module.exports = Stock;