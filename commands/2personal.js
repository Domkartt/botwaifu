const db = require('quick.db');
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
 var finalLb = "Укажите о себе информацию."
   
   let member = message.mentions.members.first() || message.member;
 
  let personal = await db.fetch(`personal_${member.user.id}_${message.guild.id}`, finalLb);
  
    let embed = new Discord.RichEmbed()
        .setDescription(`**+personal**`)
        .setAuthor(member.user.tag, member.user.displayAvatarURL)
        .addField("**Персональная информация**", `**${personal}**`)
        .setColor("704c84")
        .setTimestamp();
    message.channel.send(embed);
  
}

module.exports.help = {
    name: 'personal'
}