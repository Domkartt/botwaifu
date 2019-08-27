const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {
    var embedColor = '704c84' // Change this to change the color of the embeds!
if(message.content.charAt(0) !== "+") return;
    var missingArgsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостающие аргументы!')
        .setDescription('Используй: `rem-warns [@User]`')
        .setTimestamp();
    //if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
    let mentioned = message.mentions.users.first(); // Gets the user mentioned!
    if(!mentioned) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message

    let warns = db.fetch(`warns_${message.guild.id}_${mentioned.id}`);
    
    let reason = args.slice(1).join(' ') 
    
    if(reason == 0) {
      return message.reply("Укажите количество варнов.");
    }
  
    var warnSuccessfulEmbed = new Discord.RichEmbed() // Creates the embed thats returned to the person warning if its sent.
        .setColor(embedColor)
        .setAuthor(mentioned.tag, mentioned.avatarURL)
        .addField('Снято '+reason + " варнов!", "С пользователя "+mentioned.tag)
    message.channel.send(warnSuccessfulEmbed); // Sends the warn successful embed
  db.add(`warns_${message.guild.id}_${mentioned.id}`, -1)
}

module.exports.help = {
  name: "rem-warns"
}