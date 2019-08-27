const db = require('quick.db');
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
 var final = message.content.slice(13)
        
  let personal = await db.fetch(`personal_${message.author.id}_${message.guild.id}`, final);
  db.set(`personal_${message.author.id}_${message.guild.id}`, final)
           

    let embed = new Discord.RichEmbed()
        .setDescription(`**+personalset**`)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .addField("**Персональная информация изменена**", `**${final}**`)
    .setColor("704c84")
        .setTimestamp();
    message.channel.send(embed);

}

module.exports.help = {
    name: 'personalset'
}