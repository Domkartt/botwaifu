const { RichEmbed } = require('discord.js');

module.exports.run = (bot, msg, args) => { // Функция для команды
if(msg.content.charAt(0) !== "+") return;
  let user = msg.mentions.users.first() || msg.author; // Переменная user присваивает себе первого "пинганутого" пользователя или автора сообщения

  msg.channel.send(
    new RichEmbed()
      .setColor('#704c84') // Ставим цвет для нашего сообщения
      .setDescription(user.tag) // Описание для нашего сообщения, в данном случае пишем туда дискорд-тег пользователя
      .setImage(`${user.displayAvatarURL}?size=2048`) // Достали URL аватарки пользователя, потом добавили ?size=2048 к ссылке на аватар пользователя, чтобы получить лучшее качество картинки.
  );
};

module.exports.help = { // Конфигурация команды
  name: 'avatar'
};