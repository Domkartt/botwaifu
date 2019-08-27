const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
const role = message.mentions.roles.first() || message.guild.roles.get(args.join(' ')) || message.guild.roles.find(r => r.name === args.join(' ')); 
const noRole = new Discord.RichEmbed()
.setDescription(`Укажи **__существующую__** роль! Ты можешь её **@упомянуть**, либо написать её **имя**, либо же указать её **ID** для того, чтобы я смогла определть и найти роль, чтобы я смогла получить о ней всю информацию!\nПроверь синтаксис команды: **"${message.content}"**!`)
.setColor('#936ed8')
.setFooter('Используй команды правильно!', message.author.displayAvatarURL)
.setTimestamp();
if(!role) return message.channel.send(noRole); 
let isSeparately;
if(role.hoist) isSeparately = 'Да, показывается.';
else isSeparately = 'Нет, не показывается.';
let isMentionable; 
if(role.mentionable) isMentionable = 'Да, можно.';
else isMentionable = 'Нет, нельзя.';
let isEditable; 
if(role.editable) isEditable = 'Да, можно';
else isEditable = 'Нет, нельзя'
let isIntegrated; 
if(role.managed) isIntegrated = 'Да, управляется'
else isIntegrated = 'Нет, не управляется'
const roleEmb = new Discord.RichEmbed() 
.setColor(role.color)
.setAuthor(role.name, bot.user.avatarURL)
.setDescription(`ID роли: **${role.id}**`)
.addField('Код цвета роли', role.hexColor, true)
.addField('Количество участников с этой ролью', role.members.size, true)
.addField('Роль показывается отдельно?', isSeparately)
.addField('Роль можно упомянуть?', isMentionable, true)
.addField('Роль можно изменить?', isEditable, true)
.addField('Роль управляется интрегацией?', isIntegrated, true)
.addField('Интегратор прав роли', role.permissions, true)
//.role.createdAt(`Роль создана` )
.addField('Позиция роли', role.calculatedPosition, true)
.setTimestamp();
message.channel.send(roleEmb);
}
module.exports.help = {
    name: 'role-info'
  
}