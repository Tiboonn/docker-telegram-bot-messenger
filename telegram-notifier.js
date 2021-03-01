process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

bot.sendMessage(process.env.TELEGRAM_CHAT_ID, process.env.MESSAGE);
