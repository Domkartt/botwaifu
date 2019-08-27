const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var embedColor = '704c84' // Change this to change the color of the embeds!
if(message.content.charAt(0) !== "+") return;
    var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостаточно прав!')
        .setDescription('Вам нужно разрешение `MANAGE_MESSAGES`, чтобы использовать эту команду!')
        .setTimestamp();
    var missingArgsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостающие аргументы!')
        .setDescription('Используй: `setvoice [@User]`')
        .setTimestamp();
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
    let mentioned = message.mentions.users.first(); // Gets the user mentioned!
    if(!mentioned) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message
  
    var warnSuccessfulEmbed = new Discord.RichEmbed() // Creates the embed thats returned to the person warning if its sent.
        .setColor(embedColor)
        .setTitle('Уcпешно перекинут')
        .addField('Пользователь ', message.author.tag)
    message.reply(warnSuccessfulEmbed); // Sends the warn successful embed
    //message.delete(); // Deletes the command
    
    let voice = message.guild.channels.find(ch => ch.name == args[1]);
  
    message.guild.member(mentioned.id).setVoiceChannel(voice);
  
    //mentioned.setVoiceChannel(voice);
  
}

module.exports.help = {
  name: "setvoice"
}