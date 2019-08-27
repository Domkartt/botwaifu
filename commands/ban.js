const Discord = require("discord.js");
module.exports.run = async (client, message, args) => 
{
var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor("704c84")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостаточно прав!')
        .setDescription('Вам нужно разрешение `BAN_MEMBERS`, чтобы использовать эту команду!')
        .setTimestamp();


if(message.member.permissions.has("BAN_MEMBERS") || message.author.id == "373872608027869184") {
    
    let member = message.mentions.members.first();
    if(!member)  return message.reply("Пожалуйста, укажите действительного участника этого сервера");
    if(!member.bannable)   return message.reply("Я не могу забанить этого пользователя! У них есть более высокая роль? Есть ли у меня разрешения на бан?");
    
    await member.ban()
      .catch(error => message.reply(`Извините ${message.author} я не могу банить по этой причине : ${error}`));
    message.reply(`${member.user.tag} забанен ${message.author.tag}`);
    } else return message.channel.send(missingPermissionsEmbed)
  }
module.exports.help = {
    name:"ban"
}