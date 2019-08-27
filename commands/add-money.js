const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  
    var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor("704c84")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостаточно прав!')
        .setDescription('Вам нужно разрешение `ADMINISTRATOR`, чтобы использовать эту команду!')
        .setTimestamp();
    var missingArgsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor("704c84")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостающие аргументы!')
        .setDescription('Используй: `add-money {number} [@User]`')
        .setTimestamp();
    if(message.member.permissions.has("ADMINISTRATOR") || message.author.id == "373872608027869184") {
    if(!args[0] || !user) return message.channel.send(missingArgsEmbed);
  
    let amount = args[0]
    
    if(amount == message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))) return;
    
    if(amount>500000) return;
    
    db.add(`moneys_${user.user.id}_${message.guild.id}`, amount);  
      
      let money = client.emojis.find(emoji => emoji.name === "money")
      
    let embed = new Discord.RichEmbed() 
              .setAuthor(message.author.tag, message.author.displayAvatarURL)
              .addField(`Добавил денег ${amount}`+money, ` ${user.user.tag}`)
              .setColor('#704c84')
          message.channel.send({embed});
    } else return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
  };
module.exports.help = {
    name: "add-money"
};