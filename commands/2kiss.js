const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
    let timeout = 300000 // 7 days in milliseconds, change if you'd like.
    let amount = -50
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let kiss = await db.fetch(`kiss_${message.author.id}_${message.guild.id}`);

    if (kiss !== null && timeout - (Date.now() - kiss) > 0) {
        let time = ms(timeout - (Date.now() - kiss));

        message.channel.send(`Ты уже целовался, тебе нужно отдохнуть! Ты сможешь вновь поцеловать кого-то через **${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("704c84")
    .setDescription(`Поцеловал ${message.mentions.members.first()}`);

    message.channel.send(embed)
    db.add(`moneys_${message.author.id}_${message.guild.id}`, amount)
    db.set(`kiss_${message.author.id}_${message.guild.id}`, Date.now())
        
    }

}
  
module.exports.help = {
    name: "kiss"
};