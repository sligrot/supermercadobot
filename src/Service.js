class Service {
    list = [];
    backupList = [];

    addItemToList = (message) => {
        const item = this.getMessageBody(message, '+');
        const itemArray = item.split(',');
        for (let individualItem of itemArray) {
            this.list.push(individualItem.trim());
        }
        return item;
    }

    removeItemFromList = (message) => {
        const item = this.getMessageBody(message, '-');
        const index = this.list.indexOf(item);
        if (index > -1) {
            this.list.splice(index, 1);
            return item;
        }
        throw new Error("Item not found");
    }

    getFormattedList = () => {
        if (this.list.length === 0) {
            return "Listen er tom! Legg til elementer ved å skrive '+ element'";
        }
        let formattedList = "Nåværende liste: \n";
        for (let item of this.list) {
            formattedList += "-" + item + "\n";
        }
        return formattedList;
    }

    deleteList = () => {
        this.backupList = [...this.list];
        this.list = [];
    }

    getBackupList = () => {
        if (this.backupList.length === 0) {
            return "Din gamle innkjøpsliste er nå gjenopprettet. Har du noe du ønsker å legge til eller fjerne?";
        }
        let formattedList = "Den siste innkjøpslisten din var tom. Hvis du vil lage en ny liste, bare skriv + varenavn. \n";
        for (let item of this.backupList) {
            formattedList += "-" + item + "\n";
        }
        return formattedList;
    }

    getMessageBody = (message, token) => {
        const index = message.indexOf(token);
        if (index !== -1) {
            return message.slice(index + 1).trim();
        }
        return '';
    }
}

module.exports = Service;