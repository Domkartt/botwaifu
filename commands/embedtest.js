const Discord = require('discord.js');
const embed = require('discord-embed-maker');

exports.run = (client, message, args) => {
    var embedColor = '704c84' // Change this to change the color of the embeds!
if(message.content.charAt(0) !== "+") return;
  
   // if(!message.author.id !== '373872608027869184') return;
  
    message.channel.send( { embed: embed } );
  
  //message.delete();
}

module.exports.help = {
  name: "embedtest"
}