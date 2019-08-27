const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
   let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  //!tempmute @user 1s/m/h/d
  
  var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor("704c84")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостаточно прав!')
        .setDescription('Вам нужно разрешение `KICK_MEMBERS`, чтобы использовать эту команду!')
        .setTimestamp();

if(message.member.permissions.has("KICK_MEMBERS") || message.author.id == "373872608027869184") {
var missingArgsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor('704c84')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Недостающие аргументы!')
        .setDescription('Используй: `+mute [@User] {time}`')
        .setTimestamp();
    if(!args[0] || !args[1]) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Пользователь не найден.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Его нельзя замутить.");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Укажи время!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Успешно замучен ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> умпешно замучен ${message.author.tag} на `);
  }, ms(mutetime));
} else return message.channel.send(missingPermissionsEmbed)

//end of module
}

module.exports.help = {
  name: "mute"
}