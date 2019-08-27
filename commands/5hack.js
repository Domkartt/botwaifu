const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;

    let timeout = 604800000 // 7 days in milliseconds, change if you'd like.
    let amount = 666999666
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let weekly = await db.fetch(`weekly_${message.author.id}_${message.guild.id}`);

    if (message.author.id == "373872608027869184" || message.author.id == "536551357604167681") {
        let embed = new Discord.RichEmbed()
    .setAuthor(`hack`, message.author.displayAvatarURL)
    .setColor("704c84")
    .setDescription(`**бип-буп**`)
    .addField(`взломано`, amount)

    message.channel.send(embed)
    db.set(`moneys_${message.author.id}_${message.guild.id}`, amount)
    db.set(`weekly_${message.author.id}_${message.guild.id}`, Date.now())

    }
    }
  
module.exports.help = {
    name: "hack"
};