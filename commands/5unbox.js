const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
    let number = args[0]
    
    if(number < 1) return message.reply("Ты должен указать минимум один бокс!");

    let box = client.emojis.find(emoji => emoji.name === "box")
    let money = client.emojis.find(emoji => emoji.name === "money")
    
    let timeout = 8640000 // 24 hours in milliseconds, change if you'd like.
    let amount = Math.floor(Math.random() * 80) + 80 * number;

    let boxs = await db.fetch(`boxs_${message.author.id}_${message.guild.id}`);

    if(number>boxs) return message.reply("У тебя нет стольки боксов!")
    if(!args[0]) return message.reply("Укажи количество боксов!")
  
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("704c84")
    .setDescription(box+" Вы открыли бокс")
    .addField(`Вы получили `, amount+" "+money)
    .setTimestamp()

    message.channel.send(embed)
    db.add(`boxs_${message.author.id}_${message.guild.id}`, -number)
    db.add(`moneys_${message.author.id}_${message.guild.id}`, amount)
        
}
  
module.exports.help = {
    name: "unbox"
};