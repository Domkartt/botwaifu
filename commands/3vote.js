const Discord = require("discord.js");
const Data = new Date();
const ytdl = require('ytdl-core')

module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
  let Year = Data.getFullYear();
   let Month = Data.getMonth();
   let Day = Data.getDay();
   let time = Data.toLocaleTimeString()
   
   var date = new Discord.RichEmbed()
    .setAuthor('+invite',message.author.displayAvatarURLr)
    .addField("Ссылка:", "https://discordbots.org/bot/552790813839720451")
    .setFooter('broken smile. © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/482848904786739210/601846728718811157/61543cbc51299794.jpg")
    .setColor('#704c84')
    message.channel.send(date)

}
 
module.exports.help = {
  name: "vote"
}