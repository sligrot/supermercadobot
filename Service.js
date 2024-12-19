class Service {
  constructor() {
      this.shoppingList = [];
  }

  addItemToList(item) {
      this.shoppingList.push(item);
      return `${item} added to the list.`;
  }

  removeItemFromList(item) {
      const index = this.shoppingList.indexOf(item);
      if (index > -1) {
          this.shoppingList.splice(index, 1);
          return `${item} removed from the list.`;
      } else {
          throw new Error('Item not found.');
      }
  }

  getFormattedList() {
      return this.shoppingList.join('\n');
  }

  deleteList() {
      this.shoppingList = [];
  }

  getBackupList() {
      // Placeholder: Replace with actual backup logic if needed
      return this.getFormattedList();
  }
}

module.exports = Service;