const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = ".";

Client.on('ready', ()=>{
    console.log('I am ready!');
});

Client.on("message", (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "user-info")){
        message.channel.send("I don't user's info!")
    }
});

Client.login(process.env.BOT_TOKEN);
