'use strict';
require('dotenv').config();
const { exec } = require('child_process');
const Quote = require('./Quote');
const CommandConfig = require('./commands');
const BOT_NAME = process.env.BOT_NAME.toLowerCase();

module.exports = class CommandHandler {
    constructor(bot, channel, params) {
        this.bot = bot;
        this.channel = channel;
        this.params = params;

        this.quoteHandler = new Quote();
    }

    handle(command, userID) {
        if (command.includes(BOT_NAME + ' help')) {
            this._postHelp();
            return;
        }

        for (let i = 0; i < CommandConfig.commands.length; i++) {
            if (command.includes(BOT_NAME + ' ' + CommandConfig.commands[i].trigger)) {
                exec(CommandConfig.commands[i].command, (err, stdout, stderr) => {
                    if (err) {
                        console.log('[' + new Date() + ']err:' + err);
                        this._postMessage('*Error while running command:* ' + err);
                        return;
                    }
        
                    console.log('[' + new Date() + ']stdout: ' + stdout);
                    console.log('[' + new Date() + ']stderr: ' + stderr);
        
                    this._postMessage(stdout);
                    this._postMessage(this.quoteHandler.getRandom());
                });
            }
        }
    }

    _postHelp() {
        let message = this.quoteHandler.getRandom() + "\n";
        
        for (let i = 0; i < CommandConfig.commands.length; i++) {
            message += "`" + BOT_NAME + " " + CommandConfig.commands[i].trigger + "` " + CommandConfig.commands[i].description + "\n";
        }

        this._postMessage(message);
    }

    _postMessage(text) {
        this.bot.postMessageToChannel(this.channel, text, this.params);
    }
};
