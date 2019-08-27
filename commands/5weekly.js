const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;

    let timeout = 604800000 // 7 days in milliseconds, change if you'd like.
    let amount = 350
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let weekly = await db.fetch(`weekly_${message.author.id}_${message.guild.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
        let time = ms(timeout - (Date.now() - weekly));

        message.channel.send(`Ты уже подбирал свою недельную награду, возвращайся через **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Weekly`, message.author.displayAvatarURL)
    .setColor("704c84")
    .setDescription(`**Недельная награда**`)
    .addField(`Собрано`, amount)

    message.channel.send(embed)
    db.add(`moneys_${message.author.id}_${message.guild.id}`, amount)
    db.set(`weekly_${message.author.id}_${message.guild.id}`, Date.now())
        
    }

}
  
module.exports.help = {
    name: "weekly"
};