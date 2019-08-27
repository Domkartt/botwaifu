const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if(message.content.charAt(0) !== "+") return;
  if(message.member.hasPermissions('ADMINISTRATOR') || message.author.id == "373872608027869184"){
  let botmessage = args.join(" ");
  message.delete().catch();
    if (!args[0]) return message.reply(" а где вопрос?");
  if (!args) return message.reply("Тебе должны голосовать")
    const pollTopic = await message.channel.send(botmessage);
    pollTopic.react(`✅`);
    pollTopic.react(`⛔`);
  }
  else {
    message.reply("Недостаточно прав!");
  }
};

module.exports.help = {
    name:"poll"

}
