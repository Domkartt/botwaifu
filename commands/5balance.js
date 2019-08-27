const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
  let member = message.mentions.members.first() || message.member;
  let money = client.emojis.find(emoji => emoji.name === "money")
  let moneys = await db.fetch(`moneys_${member.id}_${message.guild.id}`);
  if (moneys === null) moneys = 0 ;
  
  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setColor("704c84")
    .setDescription(`**Баланс**`)
    .addField(`У тебя`, moneys+money)

    message.channel.send(embed)
  
};
module.exports.help = {
    name: "balance"
};