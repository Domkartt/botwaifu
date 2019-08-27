const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
    var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor("704c84")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостаточно прав!')
        .setDescription('Вам нужно разрешение `ADMINISTRATOR`, чтобы использовать эту команду!')
        .setTimestamp();


if(message.member.permissions.has("ADMINISTRATOR") || message.author.id == "373872608027869184") {
let member = args.join(" ");
if(!member) return message.channel.send(`Вы не указали ID пользователя которого нужно разбанить!`);
if(member) {
    message.guild.unban(member);
    return message.channel.send(`**Вы** успешно разбанили пользователя с ID ${member}!`);
} } else return message.channel.send(missingPermissionsEmbed)
};
module.exports.help = {
    name: "unban"
};