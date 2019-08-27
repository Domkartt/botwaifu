const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;

    let timeout = 1800000 // 24 hours in milliseconds, change if you'd like.
    let amount = Math.floor(Math.random() * 2) + 1;

    let box = client.emojis.find(emoji => emoji.name === "box")
    let money = client.emojis.find(emoji => emoji.name === "money")

    let boxtime = await db.fetch(`boxtime_${message.author.id}_${message.guild.id}`);

    if (boxtime !== null && timeout - (Date.now() - boxtime) > 0) {
        let time = ms(timeout - (Date.now() - boxtime));

        message.channel.send(`Ты уже недавно подбирал box, возвращайся через  **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("704c84")
    .setDescription(box+" Награда")
    .addField(`Вы получили `, amount+" "+box)
    .setTimestamp()

    message.channel.send(embed)
    db.add(`boxs_${message.author.id}_${message.guild.id}`, amount)
    db.set(`boxtime_${message.author.id}_${message.guild.id}`, Date.now())
        
    }

}
  
module.exports.help = {
    name: "box"
};