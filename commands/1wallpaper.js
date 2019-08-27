const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
if(message.content.charAt(0) !== "+") return;
    superagent.get('https://nekos.life/api/v2/img/wallpaper')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Wallpaper")
      .setImage(response.body.url)
      .setColor(`#704c84`)
      .setFooter(`Tags: wallpaper`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}

module.exports.help = {
  name: "wallpaper"
}