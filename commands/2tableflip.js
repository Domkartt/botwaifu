const Discord = require("discord.js");

const bot = new Discord.Client();

const frames = [

'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬',
  
'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬',

'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬',
  
'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬',
  
'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬',
  
'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬',
  
'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬',
  
'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬'
];

module.exports.run = async(bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
message.delete()

const msg = await message.channel.send('(\\\\°□°)\\\\ ┬─┬');

for (const frame of frames) {

setTimeout(() => {}, 4000);

await msg.edit(frame);

}

return message;

}

module.exports.help= {

name: "tableflip"
} 