class Service {
    list = [];
    backupList = [];

    addItemToList = (message) => {
        const item = this.getMessageBody(message, '+');
        const itemArray = item.split(',');
        for (let individualItem of itemArray) {
            this.list.push(individualItem);
        }
        return item
    }

    removeItemFromList = (message) => {
        const item = this.getMessageBody(message, '-');
        const index = this.list.indexOf(item);
        if (index > -1) {
            this.list.splice(index, 1);
            return item;
        }
        throw error;
    }

    getFormattedList = () => {
        if (this.list.length == 0) {
            return "A lista está vazia! Adicione itens digitando '+ item'";
        }
        let formattedList = "Lista de Compras: \n";
        for (let index in this.list) {
            formattedList += "-" + this.list[index] + "\n";
        } 
        return formattedList;
    }

    deleteList = () => {
        this.backupList = this.list;
        this.list = [];
    }

    getBackupList = () => {
        if (this.backupList.length == 0) {
            return "A lista antiga está vazia";
        }
        let formattedList = "A última lista de compras foi: \n";
        for (let index in this.backupList) {
            formattedList += "-" + this.backupList[index] + "\n";
        } 
        return formattedList
    }

    getMessageBody = (message, token) => {
        for (let i=0; i<message.length; i++) {
            if (message[i] == token) {
                return message.slice([i+1]);
            }
        }
    }
}

module.exports = Service;