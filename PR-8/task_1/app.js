const EventEmitter = require('events');
const Shop = require('./shop'); 
const Stock = require('./stock');

const stock = new Stock();
const shop = new Shop(); 


shop.on('addToCart', function(item) {
    console.log(item, 'added to cart:');
});

shop.on('buy', function(creditCard) {
    console.log('Paid with credit card:', "****-****-****-" + creditCard.slice(-4));
    stock.emit('preparePackage', shop.item); 
});


stock.on('preparePackage', function(item) {
    console.log('Package is being prepared. Please wait till it`s ready to deliver!');
    setTimeout(() => stock.emit('readytoDeliver', item), 5000); 
});

stock.on('readytoDeliver', function(item) {
    console.log('Package is on the way to you for', item);
    console.log('Delivered!');
});


shop.addToCart("Sweater");
shop.buy("4444-1111-2978-1100");

shop.addToCart("Shampoo");
shop.buy("4444-1111-2978-5680");