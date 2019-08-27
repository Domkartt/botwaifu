const {RichEmbed} = require('discord.js'); 
const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(message.content.charAt(0) !== "+") return;
  
  var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor("704c84")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостаточно прав!')
        .setDescription('Вам нужно разрешение `ADMINISTRATOR`, чтобы использовать эту команду!')
        .setTimestamp();


if(message.member.permissions.has("ADMINISTRATOR") || message.author.id == "373872608027869184") {
  
  if(!args[0]) return message.channel.send("Используй это так: 'set-autorole <@roleName>'")
  
  let role = message.mentions.roles.first();
  
  db.set(`autorole_${message.guild.id}`,  role)
    var embed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor("704c84")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Успешно установлена новая авто-роль')
        .setDescription('Теперь когда пользователи будут заходить, они будут получать роль '+role)
        .setTimestamp()
    message.channel.send(embed) } else return message.channel.send(missingPermissionsEmbed)
}
module.exports.help = {
    name: "set-autorole"
};