const Discord = require("discord.js"),
qr = require('qr-image')
exports.run = async (client, message, args) => {
  if(message.content.charAt(0) !== "+") return;
  if(!args[0]) return;
  var svg_string = qr.imageSync(args.join(" "), { type: 'png' });
  let attachment = new Discord.Attachment(svg_string, 'qrcode.png');
  message.channel.send(
   new Discord.RichEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL, `https://discordapp.com/users/${message.author.id}`)
   .attachFile(attachment)
   .setImage('attachment://qrcode.png')
  )    
}
module.exports.help = {
    name: "qrcode"
};