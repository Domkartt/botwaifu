const Discord = require('discord.js'); 
const db = require('quick.db');
exports.run = async (client, message, args) => {
  if(message.content.charAt(0) !== "+") return;
  if(message.author.id !== "373872608027869184") return;
try {
        let evaled = eval(args.join(' ')); 
let eevaled = typeof evaled; 
const tyype = eevaled[0].toUpperCase() + eevaled.slice(1)
if(typeof evaled!== 'string') evaled = require('util').inspect(evaled); 
message.channel.send(`\`\`\`fix
Successfully ✅
Type: ${tyype}
Done for: ${new Date().getTime() - message.createdTimestamp + 'ms'}\`\`\`
\`\`\`js
${evaled}\`\`\``, {split: '\n'}).then(() => message.react("✅"))
} catch(err) {
message.channel.send(`\`\`\`fix
Error ❎\`\`\`
\`\`\`js
${err}\`\`\``).then(() => message.react("❎"))}
  
}
module.exports.help = {
    name: "eval"
};