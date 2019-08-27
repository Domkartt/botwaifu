module.exports.run = (bot, Discord, message, args) => {
message.mentions.members.first().setVoiceChannel(null);
  /*let embed = new Discord.RichEmbed() 
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .addField(`Кикнул из голосового канала пользователя `, ` ${message.mentions.members.first()}!`)
              .setColor('#704c84')
          message.channel.send({embed});*/
}

module.exports.help = {
name: 'voicekick'
}