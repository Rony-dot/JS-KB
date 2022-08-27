console.log("beep beep");

require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();

// client.login('Nzg2NjM3NTI5OTcyNDczODk3.X9JTSg.0JIUSiJNl17eR2bIO2A24M7G1K4');
client.login(process.env.BOTTOKEN);

client.on('ready', discordReady);

function discordReady()
{
    console.log("❤");
}

client.on('message',getMessage);

const replies = [
    'kire beda?',
    'hello there !!',
    'ummm ki obostha? ',
    '😍😍',
    '😘😘',
    '🥰🥰',
    '😎😋😏'
]

function getMessage(mesg)
{
    console.log(mesg.content)
    if(mesg.channel.id=='786640823193829428' && mesg.content=='hello boss'){
        // console.log("vaaggg shala sromik");
        // mesg.reply("vaagg shala sromik");
        // mesg.channel.send("Ki lagbe bolo?? 😍");
        // mesg.channel.send("😘");
        const index = Math.floor(Math.random()*replies.length);
        mesg.channel.send(replies[index]);
    }
}