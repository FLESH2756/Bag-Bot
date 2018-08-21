const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: `The bot is developing! | .help`, type: 1 } }).catch();
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.login(process.env.BOT_TOKEN);
