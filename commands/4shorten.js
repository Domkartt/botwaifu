const Discord = require("discord.js");
const shorten = require('isgd')

module.exports.run = async(bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
    if (!args[0]) return message.channel.send('**Использование: v!shorten <ссылка> <название>**')
    if (!args[1]) {
        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Ошибка:')) return message.channel.send('**Напишите правильную ссылку**');
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {
            if (res.startsWith('Ошибка')) return message.channel.send(`**${res}**`);
            message.channel.send(`**<${res}>**`);

        })
    }
}

module.exports.help = {
    name: "shorten"
}