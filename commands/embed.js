const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {
    var embedColor = '704c84' // Change this to change the color of the embeds!
if(message.content.charAt(0) !== "+") return;
  
   // if(!message.author.id !== '373872608027869184') return;
  
    let mentioned = message.mentions.users.first(); // Gets the user mentioned!
    let text = args.slice(1).join(' ')  
  
    var embed = new Discord.RichEmbed() // Creates the embed thats returned to the person warning if its sent.
        .setColor(embedColor)
        .setDescription(text, "broken smile. © 2019 Все права заморожены.")
    if(mentioned){
       embed.setAuthor(mentioned.tag, mentioned.avatarURL)
       }
    message.channel.send(embed); // Sends the warn successful embed
  message.delete();
}

module.exports.help = {
  name: "embed"
}