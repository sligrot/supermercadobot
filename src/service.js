class Service {
    list = []; 

    addItemToList = (message) => {
        const item = this.getMessageBody(message, '+') 
        this.list.push(item);
        return item
    }

    getList = () => {
        if (this.list === []) {
            return ["A lista está vazia!"];
        }    
        return this.list; 
    }

    deleteList = () => {
        this.list = [];
    }

    getMessageBody = (message, token) => {
        for (let i=0; i<message.length; i++) {
            if (message[i] == token) {
                return message.slice([i+2]);
            }
        }
    }
}

module.exports = Service;