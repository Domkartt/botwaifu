
const Discord = require("discord.js")
const db = require('quick.db');
 
module.exports.run = async (client, message, args) => {

  let kill = [
    "https://cdn.discordapp.com/attachments/607886922869768221/607954517526315049/1477239628_tumblr_n9k64ldfEk1r4vymlo1_500.gif",
    "https://cdn.discordapp.com/attachments/514879644542173225/514879912151220254/tumblr_onswn9GpX11w0ii2ho1_500.gif",
    "https://images-ext-2.discordapp.net/external/FPFhFlXw_sd4vwr-FjrnIeHyuMYvzI0zmNSrMvFVxBA/https/cdn.discordapp.com/attachments/514879644542173225/514879922938970112/tumblr_oqgp90ONAa1taibz9o1_500.gif"
  ]
  
  let suicide = [
    "https://images-ext-2.discordapp.net/external/AWf91bAaoVIrOd7UfkYZMhA76y8HSBcClNMds8SsZy0/%3Fcid%3D73b8f7b15d4838b26759324967df1d91%26rid%3Dgiphy.mp4/https/media3.giphy.com/media/WsWJZcJoxmLUk/giphy.mp4",
    "https://images-ext-2.discordapp.net/external/aunWfmHJWgEDAuOp-wE_mhmApRMzkz8nW1-h22FSNiw/https/i.gifer.com/BkrM.gif",
    "https://images-ext-1.discordapp.net/external/YHRv0BKTSm1cj1iMUljliyTWruBp2p2BQNJkhmIKyhY/https/cdn.discordapp.com/attachments/514882891751096364/514883248418193418/tenor_2.gif"
  ]
  
  var image = Math.floor(Math.random() * (1, 3))
  
  var money = Math.floor(Math.random() * (5, 25))
  var otvet = db.fetch(`moneys_${message.author.id}_${message.guild.id}`)
  if (otvet <= 5) { return message.reply("Сорри, ты бомжик \c:"); }
  
let killed = message.mentions.members.first();

  let emoney = await client.emojis.find(emoji => emoji.name === "money")
  
if(!killed || killed == message.member) {

let emb = new Discord.RichEmbed()
.setColor("#704c84")
.setAuthor(`${message.author.tag} решил убить себя`, message.author.displayAvatarURL)
.setImage(suicide[image])
.setFooter(`С вашего баланса было снято ${money} `+"💸");

message.channel.send(emb)

} else {

let emb = new Discord.RichEmbed()
.setColor("#704c84")
.setAuthor(`${killed.user.tag} был убит ${message.author.tag}`, message.author.displayAvatarURL)
.setImage(kill[image])
.setFooter(`С вашего баланса было снято ${money} `+"💸");

message.channel.send(emb)

}
db.add(`moneys_${message.author.id}_${message.guild.id}`, -money)
}
module.exports.help = {
  name: "kill"
}