const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message) => {
if(message.content.charAt(0) !== "+") return;
  var money = Math.floor(Math.random() * (-5, -25))
  var otvet = db.fetch(`moneys_${message.author.id}_${message.guild.id}`)
  if (otvet <= 5) { return message.reply("Сорри, ты бомжик \c:"); }
  
  let user = message.mentions.users.first();
  
        if(user.id === "552790813839720451"){
          message.reply("Пшол от сюда, я занята <@373872608027869184> !");
          return;
        }
 
    if(user.id === "373872608027869184"){
      message.reply("Ага, щас.");
          return;
  } 
    if(message.author.id === user.id){
      message.reply("Как ты себе это представляешь?");
          return;
  }
    const badmatch = new Discord.RichEmbed()
            .setColor('704c84')
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription('Занялся сексом с **'+user.tag +"**!");
        message.channel.send(badmatch);
  
    db.add(`moneys_${message.author.id}_${message.guild.id}`, money)
}
//};
module.exports.help = {
    name: 'sex'
  };