# SuperMercadoBot

This is a shopping list Telegram Bot that I made to help me and my family manage grocery shopping.
To deploy a similar bot using this code, follow these instructions:
- Get an API token from BotFather on Telegram
- `git clone` this repository
- Go to the project's root and run `export BOT_TOKEN={YOUR_API_TOKEN}`
- Run `npm install` to install dependencies
- Run `node src/SuperMercadoBot.js` to start your bot

## Usage

### +

`+` adds items to the list. To add potatoes, for example, say `+ potatoes`. It works with item lists too, separated with commas. `+ potatoes, ketchup, rice`.

### -

`-` removes an item from the list. To remove potatoes, for example, say `- potatoes`. Current version does not support removing more than one item.

### mostrar lista

`mostrar lista` gets the current shopping list. 

### apagar lista

`apagar lista` empties the current shopping list.

### recuperar lista

`recuperar lista` prints the last emptied list. Should be used as a backup when a list is emptied without being supposed to.

## Technology

Made with Nodejs using the [Telegraf Framework](https://github.com/telegraf/telegraf), deployed to my [Digital Ocean](https://www.digitalocean.com/) server using [pm2](https://pm2.keymetrics.io/).
