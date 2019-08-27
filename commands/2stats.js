const { version } = require("discord.js");
const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
if(message.content.charAt(0) !== "+") return;
  if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == "373872608027869184") {
let commands = 49
    const embed = new Discord.RichEmbed()
        .setAuthor("Показатели бота")
        .setColor("704c84")
        .setThumbnail('https://media.discordapp.net/attachments/482848904786739210/600053312301039637/images.jpg')
        .setTimestamp()
        .addField("⭕ | Использование памяти", `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB | 512 MB`, true)
        .addField("👥 | Пользователей", `${client.users.size.toLocaleString()}`, true)
        .addField("🌐 | Серверов", `${client.guilds.size.toLocaleString()}`, true)
        .addField("🗨 | Каналов", `${client.channels.size.toLocaleString()}`, true)
        .addField("⚙ | Кол-во команд", `${commands}`, true)
        .addField("💡 | Discord.js", `v${version}`, true)
 
    message.channel.send(embed);
};}

module.exports.help = {
name: "stats"
}