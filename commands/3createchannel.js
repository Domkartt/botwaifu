const Discord = module.require("discord.js");
module.exports.run = async (client,message,args) => {
  if(message.member.hasPermission("ADMINISTRATOR") || message.author.id == "373872608027869184") {
if(message.content.charAt(0) !== "+") return;
message.delete()
let type = ["text","voice"]
if(type.indexOf(args[1]) == -1) return message.channel.send("Я не могу создать канал с таким типом, используйте !createchannel <ИМЯ> <text или voice>")
if(!args[0] | !args[1]) return message.channel.send("У вас нет одного из значений!")
message.guild.createChannel(args[0], args[1])
};
}


module.exports.help = {
    name: "createchannel"
};