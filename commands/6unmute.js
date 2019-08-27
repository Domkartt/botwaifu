  const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {
if(message.content.charAt(0) !== "+") return;
  var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor("704c84")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостаточно прав!')
        .setDescription('Вам нужно разрешение `ADMINISTRATOR`, чтобы использовать эту команду!')
        .setTimestamp();


if(message.member.permissions.has("KICK_MEMBERS") || message.author.id == "373872608027869184") {
  var member = message.mentions.members.first();
  var arg = new Array()
  arg[0] = member
  if(!arg[0]) return message.channel.send('Укажите участника')
  if (!message.guild.roles.find(role => role.name === "Muted")) {
  member.guild.createRole({
      name: "Muted",
      color: "#000000",
      permissions: ["VIEW_CHANNEL"]
    });
    }
    let mutedrole = message.guild.roles.find(role => role.name === "Muted");
  member.removeRole(mutedrole)
  message.channel.send(`${message.author.tag} снял мут ${member.user.username}`)
  } else return message.channel.send(missingPermissionsEmbed)
}
module.exports.help = {
    name: 'unmute'
}
