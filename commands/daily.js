const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
if(db.fetch(`blacklist_${message.author.id}`)) return;
    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 50
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}_${message.guild.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Ты уже подбирал свою дневную награду, возвращайся через  **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("704c84")
    .setDescription(`**Дневная награда**`)
    .addField(`Получено`, amount)

    message.channel.send(embed)
    db.add(`moneys_${message.author.id}_${message.guild.id}`, amount)
    db.set(`daily_${message.author.id}_${message.guild.id}`, Date.now())
        
    }

}
  
module.exports.help = {
    name: "daily"
};