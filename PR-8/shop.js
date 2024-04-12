const EventEmitter = require('events');

class Shop extends EventEmitter {
    constructor(item, creditCard) {
        super();
        this.item = item;
        this.creditCard = creditCard;
    }
}

module.exports = Shop;