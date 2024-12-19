const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Handle messages
bot.start((ctx) => ctx.reply("Hei! Jeg er Handleliste Bot. Jeg organiserer innkjøpslister.\n\nFor å legge til en vare, skriv \"/+ varenavn\"\nFor å se listen din, skriv \"/vis liste\"\nFor å slette hele listen, skriv \"/slett liste\"\nFor å gjenopprette listen, skriv \"/gjenopprett liste\"\nFor hjelp, skriv \"/help\""));

bot.help((ctx) => ctx.reply("Komandoer:\n- \"/+ item\" for å legge til en vare\n- \"/vis liste\" for å vise listen\n- \"/slett liste\" for å slette listen\n- \"/gjenopprett liste\" for å vise siste slettede liste"));

// Add item to list
bot.command('/+', (ctx) => {
    try {
        const item = ctx.message.text.slice(2).trim();
        if (item) {
            // Assuming `addItemToList` method of your service
            const newItem = service.addItemToList(item);
            ctx.reply(`${newItem} er lagt til i listen`);
        } else {
            ctx.reply("Feil: Du må skrive inn et item etter \"/+\".");
        }
    } catch (error) {
        ctx.reply("Feil ved å legge til i listen");
    }
});

// Remove item from list
bot.command('/–', (ctx) => {
    try {
        const item = ctx.message.text.slice(2).trim();
        if (item) {
            // Assuming `removeItemFromList` method of your service
            const removedItem = service.removeItemFromList(item);
            ctx.reply(`${removedItem} er fjernet fra listen`);
        } else {
            ctx.reply("Feil: Du må skrive inn et item etter \"/–\".");
        }
    } catch (error) {
        ctx.reply("Elementet ble ikke funnet");
    }
});

// Show list
bot.command('vis liste', (ctx) => {
    try {
        // Assuming `getFormattedList` method of your service
        const list = service.getFormattedList();
        ctx.reply(list);
    } catch (error) {
        ctx.reply("Feil ved å vise listen");
    }
});

// Delete list
bot.command('slett liste', (ctx) => {
    try {
        // Assuming `deleteList` method of your service
        service.deleteList();
        ctx.reply("Listen ble slettet suksessfullt");
    } catch (error) {
        ctx.reply("Feil ved å slette listen");
    }
});

// Restore list
bot.command('gjenopprett liste', (ctx) => {
    try {
        // Assuming `getBackupList` method of your service
        const list = service.getBackupList();
        ctx.reply(list);
    } catch (error) {
        ctx.reply("Feil ved å hente tilbake listen");
    }
});

// Launch bot
bot.launch();
