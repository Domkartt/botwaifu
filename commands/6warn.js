const Discord = require('discord.js');
const db = require('quick.db');
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
        .setDescription('Используй: `warn [@User] [Reason]`')
        .setTimestamp();
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
    let mentioned = message.mentions.users.first(); // Gets the user mentioned!
    if(!mentioned) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message
    let reason = args.slice(1).join(' ') // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word
    if(!reason) return message.channe.send(missingArgsEmbed); // Triggers if the user dosn't provide a reason for the warning

    var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`На тебя кинули варн на сервере ${message.guild.name}`)
        .addField('Предупрежден', message.author.tag)
        .addField('Причина', reason)
        .setTimestamp();
    mentioned.send(warningEmbed); // DMs the user the above embed!
    var warnSuccessfulEmbed = new Discord.RichEmbed() // Creates the embed thats returned to the person warning if its sent.
        .setColor(embedColor)
        .setTitle('Уcпешно предупреждён!')
        .addField('Предупрежден ', mentioned.tag)
        .addField('Причина ', reason)
    message.channel.send(warnSuccessfulEmbed); // Sends the warn successful embed
    message.delete(); // Deletes the command
    db.add(`warns_${message.guild.id}_${mentioned.id}`, 1)
}

module.exports.help = {
  name: "warn"
}