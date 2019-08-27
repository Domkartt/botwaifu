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
    .addField("День недели:", Day)
    .addField("Месяц:", Month)
    .addField("Год:", Year)
    .addField("Время:", time)
    .setColor('#704c84')
    message.channel.send(date)

}
 
module.exports.help = {
  name: "date"
}