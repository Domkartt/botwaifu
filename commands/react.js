const Discord = require('discord.js'); 
const db = require('quick.db');
exports.run = async (client, message, args) => {
if(message.content.charAt(0) !== "+") return;
  /*const emoji = message.guild.emojis.find(emoji => emoji.name === 'nyam');
  
  message.react(emoji); 
  message.delete();
  let role = client.guilds.first().roles.find(x => x.name === "|🌰|Зам директор|🌰|");
  let i = message.author;
  i.addRole(role)*/
  
}
module.exports.help = {
    name: "react"
};