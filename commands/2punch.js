exports.run = (client, message) => {
if(message.content.charAt(0) !== "+") return;
  var owner = "242263403001937920"
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to punch them.')
        if(user.id === owner){
          return message.reply("Его нельзя бить.");
  } if(user.id === message.author.id){
          return message.reply("Мозахист.");
  }
  else{
          message.reply('Ты ударил '+user.tag +"!")
  }
};
module.exports.help = {
    name: 'punch'
  };