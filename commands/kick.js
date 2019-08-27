const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you do not have permissions to use this command!s');

    if (!target) return message.reply('Укажите участника!');
    if (!reason) return message.reply('Укажите причину');
    
    let embed = new discord.RichEmbed()
        .setColor('704c84')
        .setThumbnail(target.user.avatarURL)
        .addField('Кикнутый участник', `${target.user.username} с ID: ${target.user.id}`)
        .addField('Кикнул', `${message.author.username} с ID: ${message.author.id}`)
        .addField('Время кика', message.createdAt)
        .addField('Кикнут в канале', message.channel)
        .addField('Причина', reason)
        .setFooter('Информация кика', target.user.displayAvatarURL);

    message.channel.send(`${target.user.username} кикнут ${message.author} за ${reason}`);
    target.kick(reason);

};

module.exports.help = {
    name: 'kick'
};