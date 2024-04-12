const EventEmitter = require('events');
const Shop = require('./shop'); 
const Stock = require('./stock');

const shop = new Shop("Sweater", "4444-1111-9012-3275");
const stock = new Stock("Sweater"); 


shop.on('addToCard', function(item) {
    console.log('Item added to cart:', item);
});

shop.on('buy', function(creditCard) {
    console.log('Paid with credit card:', creditCard);
    stock.emit('preparePackage', shop.item); 
});


stock.on('preparePackage', function(item) {
    console.log('Package is being prepared. Please wait till it`s ready to deliver!');
    setTimeout(() => stock.emit('readytoDeliver', item), 5000); 
});

stock.on('readytoDeliver', function(item) {
    console.log('Package is on the way to you for item:', item);
    console.log('Delivered!');
});


shop.emit('addToCard', shop.item);
shop.emit('buy', shop.creditCard);