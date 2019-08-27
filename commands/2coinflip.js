const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
    let random = (Math.floor(Math.random() * Math.floor(2)));

        if(random === 0) {       
          let embededit = new Discord.RichEmbed()
    .setAuthor(message.author.tag , message.author.displayAvatarURL)
    .setColor("704c84")
    .setDescription(`**CoinFlip**`)
    .addField(`тебе выпал __орёл.__`," ")
          
          message.channel.send(embededit);
        }
        else {   
          let embed1 = new Discord.RichEmbed()
    .setAuthor(message.author.tag , message.author.displayAvatarURL)
    .setColor("704c84")
    .setDescription(`**CoinFlip**`)
    .addField(`тебе выпало __решка.__`," ")
          
          message.channel.send(embed1);
        }
  };
module.exports.help = {
    name: "coinflip"
};