const EventEmitter = require('events');

class Shop extends EventEmitter {
    constructor() {
        super();
    }

    addToCart(item){
        this.emit('addToCart', item);
    }
    buy(creditCard){
        this.emit('buy', creditCard);
    }
}

module.exports = Shop;