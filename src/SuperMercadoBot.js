const { Telegraf, session } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const Service = require('./Service');
const service = new Service();
const BOT = require('./BotMessages');

// Initialize session
bot.use(session());

bot.start((ctx) => ctx.reply(BOT.START_MESSAGE));
bot.help((ctx) => ctx.reply(BOT.HELP_MESSAGE));

bot.command('/+', (ctx) => {
    ctx.reply('Vennligst skriv inn varene du vil legge til, separert med komma.');
    ctx.session.waitingForInput = true; // Set a flag to indicate we're waiting for input
});

// Listen for all messages
bot.on('message', (ctx) => {
    if (ctx.session.waitingForInput) {
        try {
            const items = ctx.message.text; // The user input
            const addedItems = service.addItemToList(items);
            ctx.reply(addedItems + ' er lagt til i listen.');
            ctx.session.waitingForInput = false; // Reset the flag
        } catch (error) {
            ctx.reply("Feil ved å legge til i listen.");
        }
    }
});

bot.command('/–', (ctx) => {
   try {
       const item = service.removeItemFromList(ctx.message.text);
       ctx.reply(item + ' er fjernet fra listen');
   } catch (error) {
       ctx.reply("Elementet ble ikke funnet");
   }
});

bot.command('vis liste', (ctx) => {
    try {
        const list = service.getFormattedList();
        ctx.reply(list);
    } catch (error) {
        ctx.reply("Feil ved å vise listen");
    }
});

bot.command('slett liste', (ctx) => {
    try {
        service.deleteList();
        ctx.reply("Listen ble slettet suksessfullt");
    } catch (error) {
        ctx.reply("Feil ved å slette listen");
    }
});

bot.command('gjenopprett liste', (ctx) => {
    try {
        const list = service.getBackupList();
        ctx.reply(list);
    } catch (error) {
        ctx.reply("Feil ved å hente tilbake listen");
    }
});

// Launch the bot
bot.launch();
