const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor("#704c84")
    .setThumbnail(sicon)
    .addField("Название сервера", message.guild.name)
    .addField("Создан", message.guild.createdAt)
    .addField("Ты присоединился", message.member.joinedAt)
    .addField("Всего участников", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}