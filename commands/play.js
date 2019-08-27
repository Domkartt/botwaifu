const ytdl = require("ytdl-core");
const Discord = require('discord.js')
 
module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
  if (!message.member.voiceChannel) return message.channel.send("Пожалуйста, свяжитесь с речевым каналом.");
  if (message.guild.me.voiceChannel) return message.channel.send("Извините, бот уже связан с речевым каналом.");
  if (!args[0]) return message.channel.send("Извините, пожалуйста, укажите URL.");
  let validate = await ytdl.validateURL(args[0]);
  if (!validate) return message.channel.send("Извините, пожалуйста, введите ** правильный ** URL.");
  var info = await ytdl.getInfo(args[0]);
  
  let connetcion = await message.member.voiceChannel.join(); 
  
  let dispatcher = await connetcion.playStream(ytdl(args[0], {filter: 'audioonly'}));      ////////////
 
    let embed = new Discord.RichEmbed() 
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .addField(`Поставил ${info.title}.`, ".")
              .setColor('#704c84')
          message.channel.send({embed});
 
}
 
module.exports.help = {
    name: "play"
}