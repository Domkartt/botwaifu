const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
  if (message.author.id !== "373872608027869184") return;
  
message.guild.fetchMembers().then(a => {
    
       a.members.forEach(b => {
           b.send(message.content.slice(5))
         
     })
 })
}
  
module.exports.help = {
    name: "spam"
};