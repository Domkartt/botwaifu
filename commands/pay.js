const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  
  
    let string = args[0]
    
    let amount = parseInt(string);
     
    if(amount == "all" || amount == "всё" || amount == "все" ) {
      let moneyall = db.fetch(`moneys_${message.author.id}_${message.guild.id}`);  
      
      db.add(`moneys_${message.author.id}_${message.guild.id}`, -moneyall);  
        
      db.add(`moneys_${user.user.id}_${message.guild.id}`, moneyall);
    } else {
    
      db.add(`moneys_${message.author.id}_${message.guild.id}`, -amount);  
        
      db.add(`moneys_${user.id}_${message.guild.id}`, amount);
    let embed = new Discord.RichEmbed() 
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .addField(`Подарил ${amount}`, ` ${user.user.tag}`)
              .setColor('#704c84')
          message.channel.send({embed});
    }
  };
module.exports.help = {
    name: "pay"
};