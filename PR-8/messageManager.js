const EventEmitter = require('events');

class MessageStorage {
    constructor() {
        this.receivedMessages = [];
    }

    addMessage(message) {
        this.receivedMessages.push(message);
    }

    getMessages() {
        return this.receivedMessages;
    }
}

class MessageManager extends EventEmitter {
    constructor() {
        super();
        this.messageStorage = new MessageStorage();
    }

    send(message) {
        this.emit('send', message);
    }

    receive(message) {
        this.messageStorage.addMessage(message);
        this.emit('receive', message);
    }

    showReceived() {
        const messages = this.messageStorage.getMessages();
        messages.forEach(msg => console.log(msg));
    }
}

module.exports = MessageManager;