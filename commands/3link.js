const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
     client.generateInvite(["ADMINISTRATOR"]).then(link =>{
        const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.displayAvatarURL} ${message.author.tag}`)
        .setColor("704c84")
        .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
        .setTimestamp()
        .addField("👥 | Ссылка", `${link}`, true)
 
    message.channel.send(embed);
    });
  };
module.exports.help = {
    name: "link",
};