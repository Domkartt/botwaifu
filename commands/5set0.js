const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
    if(!message.member.id !== 373872608027869184) return;
  
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
      db.set(`work_${user.user.id}_${message.guild.id}.position`, 0);      
        
      db.set(`moneys_${user.user.id}_${message.guild.id}`, 0);
      
        db.set(`work_${user.user.id}_${message.guild.id}.time`, 0);
      
      db.set(`work_${user.user.id}_${message.guild.id}.count`, 0);
      
      db.set(`work_${user.user.id}_${message.guild.id}.worked`, 0);
      
  message.delete();
  };
module.exports.help = {
    name: "set0"
};