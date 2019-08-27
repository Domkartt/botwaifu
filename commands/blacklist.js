const Discord = require("discord.js");
const fs = require('fs');
const db = require('quick.db');
//const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
if(message.content.charAt(0) !== "+") return;
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //message.delete();

    if (!user) {
        return message.reply('Укажите пользователя');
    }
    if (!message.author.id === '373872608027869184') return message.reply("У вас нет разрешения на использование этой команды...:facepalm:");
    //if (user = "blacklist") return message.reply('You need to imput a User ID');

    return;
      db.set(`blacklist_${message.author.id}`, user.id)
    }
  
module.exports.help = {
    name: 'blacklist'
  };