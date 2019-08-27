const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.reply("укажите баг.").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("704c84")
   
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`[${message.guild.name}](${Invite.url})`)
   .setTitle("Сервер:")
   .addField("Отправитель", Sender, true)
   .addField("ID отправителя: ", Sender.id, true)
   .addField("Баг: ", sayMessage)
   .setTimestamp()

    bot.users.get("373872608027869184").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("704c84")
    .setTitle("Баг успешно отправлен!")
    .addField("Запрошено", Sender)
    .addField("Баг: ", sayMessage)
    .setFooter("Мы рассмотрим вашу проблему")

    message.channel.send(embed);


      }
module.exports.help = {
    name: "bug",
    aliases: ["баг"]
}