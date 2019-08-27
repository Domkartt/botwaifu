const db = require('quick.db')
const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
    if(message.member.permissions.has("ADMINISTRATOR") || message.author.id == "373872608027869184") {
    let numberrole = args[0];
    let role = message.mentions.roles.first();
    let price = args.pop();
  
  if(numberrole > 15) {
    return message.reply("Вы не можете сделать в магазине больше 15 товаров.")
  }
  
  let rolename = await db.fetch(`role${numberrole}name_${message.guild.id}`)
    let roleprice = await db.fetch(`role${numberrole}price_${message.guild.id}`)
  
const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setTitle(`+shopadd`)
  .setAuthor('В магазин ролей добавлена вещь:', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField(`Название предмета: ${role.name}`, `Цена предмета: ${price}`)
  .setTimestamp()
  .setFooter('broken smile. © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/482848904786739210/601846728718811157/61543cbc51299794.jpg");
message.channel.send(help);
  
  if (numberrole) {
          db.set(`role${numberrole}name_${message.guild.id}`, role)
          db.set(`role${numberrole}price_${message.guild.id}`, price)
        }
    } else return message.channel.send("У тебя не досаточно прав что-бы трогать эту команду!")
}
module.exports.help = {
    name: "shopadd"
}