require('dotenv').config();

const TOKEN = process.env.TOKEN;
const BOT_NAME = process.env.BOT_NAME;
const ROOM_NAME = process.env.ROOM_NAME;
const TYPE_MESSAGE = 'message';
const SlackBot = require('slackbots');
const CommandHandler = require('./CommandHandler');
const Quote = require('./Quote');
const bot = new SlackBot({
    token: TOKEN,
    name: BOT_NAME,
    scope: "post"
});
const params = {
    icon_emoji: ':ross:'
};

const commandHandler = new CommandHandler(bot, ROOM_NAME, params);

bot.on('start', () => {
    console.log('Started Ross v1.0.1');

    bot.postMessageToChannel(ROOM_NAME, (new Quote()).getRandom(), params);

    bot.on('message', (data) => {
        switch (data['type']) {
            case TYPE_MESSAGE:
                const msg = data.text.toLowerCase();
                if (msg.substring(0, 4) === BOT_NAME.toLowerCase()) {
                    commandHandler.handle(msg, data.user);
                }
        }
    });
});
