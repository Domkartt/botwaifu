const db = require('quick.db')
const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
    let roles = args[0]
    
      let rolebuy = await db.fetch(`role${roles}name_${message.guild.id}`)
      
      let pricerole = await db.fetch(`role${roles}price_${message.guild.id}`)
      
      let price = parseInt(pricerole);
      
      let role = message.guild.roles.get(rolebuy.id); //member.addRole(role);
     
  let money = db.fetch(`moneys_${message.author.id}_${message.guild.id}`);
  
  if(money < price) {
    const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setTitle(`+buy`)
  .setAuthor('Не достаточно денег!', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField(`Что-бы заработать денег, используй команду:` , `+work`)
  .setTimestamp()
  .setFooter('broken smile. © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/482848904786739210/601846728718811157/61543cbc51299794.jpg");
message.channel.send(help);
    return;
  } else {
  
const help = new Discord.RichEmbed()
  .setColor('704c84')
  .setTitle(`+shopbuy`)
  .setAuthor('Куплена вещь:', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg', 'https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
  .addField(`Роль ` + role.name , `Успешно куплена`)
  .setTimestamp()
  .setFooter('broken smile. © 2019 Все права заморожены.', "https://media.discordapp.net/attachments/482848904786739210/601846728718811157/61543cbc51299794.jpg");
message.channel.send(help);
  
  db.add(`moneys_${message.author.id}_${message.guild.id}`, -price)
  
          message.member.addRole(role)
  }
}
module.exports.help = {
    name: "buy"
}