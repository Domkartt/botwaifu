module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == "373872608027869184") {
  let messagecount = parseInt(args[0]);

  if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please Enter A Numeric Value!");

  if(messagecount > 100){
    message.channel.send(":x: " + "| Извините, вы можете очистить до 100 сообщений одновременно!")
  }else if(messagecount < 2 ) {
    message.channel.send(":x: " + "| Извините, вы можете очистить до 100 сообщений одновременно!")
  } else {

  }{
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
  }
} else {
  return message.reply(":x: " + "| Ты должен иметь права \"ADMINISTRATOR\"!")
}
}

module.exports.help = {
    name: "clear"
}