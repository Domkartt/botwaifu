const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')
const {
	prefix,
	token,
} = require('../config.json');

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
    // random amount: Math.floor(Math.random() * 1000) + 1;
  const girl = message.content.slice("6")

    let marry = await db.fetch(`marry_${message.author.id}_${message.guild.id}`);

    if (marry) {  
    
        message.channel.send(new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .addField(`Ты чё ска! Изменяешь?`, `Я звоню маме! \:D`)
        .setColor("704c84"))
      
    } else {
      
       if (!args[0]) {
         let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .addField(`Ты не женат! Что-бы жениться:`, `${prefix}marry 'ник партнёра'`)
        .setColor("704c84")
        
    
        message.channel.send(embed)
         return;
       }
      
      let man = message.author.id

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, теперь ты в разводе с ${girl}! :D`)
        .setColor("704c84")
        
    
        message.channel.send(embed)
        db.set(`girl_${message.author.id}_${message.guild.id}`, null)
      
      db.set(`marry_${message.author.id}_${message.guild.id}`, "have")
    }
      }
module.exports.help = {
    name: "divorce"
};