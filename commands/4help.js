const Discord = require("discord.js");
const prefix = "+"

module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
  if(message.content == "+help") {
  const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setAuthor('Доступные команды:', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField('Весёлые', `${prefix}cat ${prefix}8ball ${prefix}tableflip ${prefix}ship ${prefix}kiss ${prefix}punch ${prefix}smug                                      ￼ `, true)
  .addField('Валюта', `${prefix}daily ${prefix}weekly ${prefix}work ${prefix}balance ${prefix}slots ${prefix}add-money ${prefix}set-lvl                                                                  ￼ `, true)
  .addField('Магазин', `${prefix}shop ${prefix}shopadd ${prefix}buy                                                                                                     ￼ `, true)
  .addField('Утилиты', ` ${prefix}like ${prefix}role-info ${prefix}set-lvlrole ${prefix}set-autorole ${prefix}date ${prefix}profile \n ${prefix}helper ${prefix}avatar ${prefix}stats ${prefix}link ${prefix}addrole ${prefix}timer ${prefix}personal ${prefix}clear`, true)
  .addField('Модерация', `${prefix}ban ${prefix}unban ${prefix}mute ${prefix}warn ${prefix}warns ${prefix}rem-warns                                                    ￼ `, true)
  .setColor('704c84')
  .addField('Аниме', `${prefix}hentai ${prefix}tits ${prefix}yuri ${prefix}neko ${prefix}nekogif ${prefix}pussy ${prefix}trap                                         ￼ `, true)
  //.addField('Музыка', `${prefix}play ${prefix}stop                                                                                                                    ￼ `, true)
  .addField('Помощь',` ${prefix}helper  ${prefix}bug                                                                                                               ￼ `, true)
  .setDescription(`*Что-бы узнать подробную информацию о категории,\nпиши +help {номер категории}*`)
  .setTimestamp()
  .setFooter('°Они Сан° © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/607886466965700629/611655192894767104/20203f5d2172eebe.jpg?width=674&height=674");

  message.channel.send(help);
  } else if(message.content == "+help 1") { 
  const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setAuthor('*Весёлые*', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField(`${prefix}cat`, `Рандомное фото с котом \n                                    ￼ `, true)
  .addField(`${prefix}8ball [вопрос]`, `Волшебный щар, который ответит на твой вопрос\n                                      ￼ `, true)
  .addField(`${prefix}tableflip`, `Подкинуть монетку\n                                       ￼ `, true)
  .addField(`${prefix}ship [@пользователь] [@пользователь]`, `Проверить на сколько подходят друг другу пользователи                                       ￼ `, true)
  .addField(`${prefix}kiss [@пользователь]`, `Поцеловать пользователя за валюту \n                                    ￼ `, true)
  .addField(`${prefix}punch [@пользователь]`, `Ударить пользователя за валюту\n                                      ￼ `, true)
  .addField(`${prefix}smug`, `Улыбнутся\n                                      ￼ `, true)
  .setTimestamp()
  .setFooter('°Они Сан° © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/607886466965700629/611655192894767104/20203f5d2172eebe.jpg?width=674&height=674");

  message.channel.send(help);
  } else if(message.content.startsWith("+help 2") || message.content.startsWith("+help Валюта") || message.content.startsWith("+help валюта")) { 
  const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setAuthor('*Валюта*', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField(`${prefix}daily`, `Получить дневную награду \n                                                                                                                                         ￼ `, true)
  .addField(`${prefix}weekly`, `Получить недельную награду \n                                                                                                                                       ￼ `, true)
  .addField(`${prefix}work`, `Работать                  \n                                                                                                                                        ￼ `, true)
  .addField(`${prefix}balance`, `Посмотреть баланс     \n                                                                                                                                             ￼ `, true)
  .addField(`${prefix}slots`, `Сыграть в казино         \n                                                                                                                                          ￼ `, true)
  .setTimestamp()
  .setFooter('°Они Сан° © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/607886466965700629/611655192894767104/20203f5d2172eebe.jpg?width=674&height=674");

  message.channel.send(help);
  } else if(message.content.startsWith("+help 3") || message.content.startsWith("+help Магазин") || message.content.startsWith("+help магазин")) { 
  const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setAuthor('*Магазин*', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField(`${prefix}shop`, `Открыть магазин\n                                                                                                                                                 ￼ `, true)
  .addField(`${prefix}shopadd [номер роли в магазине] [@роль] {цена}`, `Добавить роль в магазин\n                                                                                               ￼ `, true)
  .addField(`${prefix}buy [номер роли в магазине]`, `Купить роль в магазине \n                                                                                                                  ￼ `, true)
  .setTimestamp()
  .setFooter('°Они Сан° © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/607886466965700629/611655192894767104/20203f5d2172eebe.jpg?width=674&height=674");

  message.channel.send(help);
  } else if(message.content.startsWith("+help 4") || message.content.startsWith("+help Утилиты") || message.content.startsWith("+help утилиты")) { 
  const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setAuthor('*Утилиты*', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField(`${prefix}like [@пользователь]￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼`, `Лайкнуть пользователя \n                                                                              ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼\n `, true) //${prefix}bug
  .addField(`\n\n\n\n\n${prefix}bug [*описание бага*]`, `Отправить баг создателю бота\n                                                                              ￼ ￼ ￼ ￼ ￼ ￼ ￼ `, true) //${prefix}bug
  .addField(`${prefix}date`, `Посмотреть дату\n                                                                                                                                ￼ `, true)
  .addField(`${prefix}profile [@пользователь]`, `Показать профиль указаного пользователя\n                                                                ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ `, true)
  .addField(`${prefix}avatar [@пользователь]`, `Показать аватарку указаного пользователя \n                                                                ￼ ￼ ￼ ￼ ￼ ￼ ￼   ￼ `, true)
  .addField(`${prefix}set-autorole  [@роль]`, `Установить авто-роль при заходе на сервер                                                                    ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼ `, true)
  .addField(`${prefix}addrole [@пользователь]`, `Выдать роль пользователю      \n                                                                            ￼ ￼ ￼ ￼ ￼ ￼ ￼ ￼    ￼ `, true)
  .addField(`${prefix}timer [*время*]`, `Установить таймер на указанное\n                                                                                                                          ￼ `, true)
  .addField(`${prefix}personal [@пользователь]`, `Показать персональную информацию о пользователе       \n                                                    ￼ ￼ ￼ ￼     ￼ `, true)
  .addField(`${prefix}personalset [*текст*]`, `Установить вашу персональную информацию         \n                                                              ￼ ￼ ￼ ￼ ￼ ￼ ￼   ￼ `, true)
  .addField(`${prefix}clear [Количество сообщений]`, `Очистить чат от сообщений                                                                         \n   ￼                                ￼ `, true)
  .addField(`${prefix}role-info [@роль]`, `Узнать информацию о роли￼  \n   ￼ `, true)
  .addField(`${prefix}set-lvlrole <@roleName> [lvl]`, `Установить лвл-роль`, true)
  .setTimestamp()
  .setFooter('°Они Сан° © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/607886466965700629/611655192894767104/20203f5d2172eebe.jpg?width=674&height=674");

  message.channel.send(help);
  } else if(message.content == "+help 5" || message.content == "+help Модерация" || message.content == "+help модерация") { 
  const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setAuthor('*Модерация*', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField(`${prefix}ban [@пользователь]`, `Забанить пользователя                                                                                                                                     ￼ `, true)
  .addField(`${prefix}unban [@пользователь]`, `Разбанить пользователя                                                                                                                                      ￼ `, true)
  .addField(`${prefix}mute [@пользователь]`, `Дать мут пользователю                                                                                                                                      ￼ `, true)
  .addField(`${prefix}warn [@пользователь]`, `Дать варн пользователю                                                                                                                                      ￼ `, true)
  .addField(`${prefix}warns [@пользователь]`, `Посмотреть варны пользователя                                                                                                                                   ￼ `, true)
  .addField(`${prefix}rem-warns [@пользователь] [количество]`, `Снять варны с пользователя                                                                                                                                      ￼ `, true)
  .setColor('704c84')                                                                                             
  .setTimestamp()
  .setFooter('°Они Сан° © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/607886466965700629/611655192894767104/20203f5d2172eebe.jpg?width=674&height=674");

  message.channel.send(help);
  } else if(message.content.startsWith("+help 6") || message.content.startsWith("+help Аниме") || message.content.startsWith("+help аниме")) { 
  const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setAuthor('*Аниме*', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setColor('704c84')
  .addField(`${prefix}hentai`, `Отправляет картинку с Хентаем                                                                                                                     ￼ `, true)
  .addField(`${prefix}tits`, `Отправляет картинку с Грудью                                                                                                                       ￼ `, true)
  .addField(`${prefix}yuri`, `Отправляет картинку с Юри                                                                                                                          ￼ `, true)
  .addField(`${prefix}neko`, `Отправляет картинку с Неко                                                                                                                         ￼ `, true)
  .addField(`${prefix}nekogif`, `Отправляет гифку с Неко \n                                                                                                                          ￼ `, true)
  .addField(`${prefix}pussy`, `Отправляет картинку с ||пиздой||                                                                                                                       ￼ `, true)
  .addField(`${prefix}trap`, `Отправляет картинку с трапом.                                                                                                                           ￼ `, true)
  .setTimestamp()
  .setFooter('°Они Сан° © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/607886466965700629/611655192894767104/20203f5d2172eebe.jpg?width=674&height=674");

  message.channel.send(help);
  } else if(message.content.startsWith("+help 7") || message.content.startsWith("+help Помощь") || message.content.startsWith("+help помощь")) { 
  const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setAuthor('*Помощь*', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setColor('704c84')
  .addField(`${prefix}helper ["Ваше сообщение разроботчику бота."]`,`Отправить сообщение разработчику бота                                                                                                              ￼ `)
  .addField(`${prefix}bug ["Ваше сообщение разроботчику бота."]`,`Отправить сообщение разработчику бота                                                                                                              ￼ `)
  .setTimestamp()
  .setFooter('°Они Сан° © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/607886466965700629/611655192894767104/20203f5d2172eebe.jpg?width=674&height=674");

  message.channel.send(help);
  }
}
 
module.exports.help = {
  name: "help"
}