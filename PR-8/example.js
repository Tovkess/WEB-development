const MessageManager = require('./messageManager');

const messageManager = new MessageManager();

messageManager.on('send', function(message) {
    console.log('Message sent:', message);
    messageManager.receive(message);
});

messageManager.on('receive', function(message) {
    console.log('Message received:', message);
});

messageManager.send('Hello, World!');
messageManager.send('This is a test message.');

messageManager.showReceived();//shows all recieved messages