const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);
const Service = require('./service');
const service = new Service();

bot.hears(/\+ (.+)/, (ctx) => {
    item = service.addItemToList(ctx.message.text);
    ctx.reply(item + ' foi adicionado à lista com sucesso!')
})

// bot.hears(/- (.+)/, (ctx) => {
    
// })

bot.hears(/lista/, (ctx) => {
    list = service.getList();
    for (item of list) {
        ctx.reply(item);
    }
})

bot.hears(/apagar/, (ctx) => {
    service.deleteList();
    ctx.reply("A lista foi apagada com sucesso");
})

bot.launch();
