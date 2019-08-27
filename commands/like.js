const {RichEmbed} = require('discord.js'); 
const db = require('quick.db');
const ms = require('parse-ms')

exports.run = async (client, message, args) => {
if(message.content.charAt(0) !== "+") return;
  let timeout = 3600000 // 24 hours in milliseconds, change if you'd like.
    let amount = 50
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let liketime = await db.fetch(`liketime_${message.author.id}_${message.guild.id}`);

    if (liketime !== null && timeout - (Date.now() - liketime) > 0) {
        let time = ms(timeout - (Date.now() - liketime));

        message.channel.send(`Ты слишком часто используешь команду лайк, возвращайся через  **${time.minutes}m ${time.seconds}s**!`)
    } else {
  /////////////////////
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply(`Укажи кого будешь лайкать!`); 
  if(tomute.id === message.author.id) return message.reply(`Нельзя лайкать самого себя!`)
  
  db.add(`likes_${message.guild.id}_${tomute.id}`, 1)
  message.channel.send(`${message.author} лайкнул ${tomute}`)
      ///////////////////
    db.set(`liketime_${message.author.id}_${message.guild.id}`, Date.now())
  }

}
module.exports.help = {
    name: "like"
};