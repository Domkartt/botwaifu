const Discord = require('discord.js'); 
const db = require('quick.db');
exports.run = async (client, message, args) => {
  if(message.content.charAt(0) !== "+") return;
  
    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
      let result1 = Math.floor((Math.random() * slots.length));
      let result2 = Math.floor((Math.random() * slots.length));
      let result3 = Math.floor((Math.random() * slots.length));

      if (slots[result1] === slots[result2] && slots[result3]) {
        
          let embed = new Discord.RichEmbed() 
              .setFooter('Ты победил!', message.author.displayAvatarURL)
              .setTitle(':slot_machine: Slots :slot_machine:')
              .addField('Результат:', slots[result1] + slots[result2] + slots[result3], true)
              .setColor('#704c84')
          message.channel.send({embed});
        db.add(`moneys_${message.author.id}_${message.guild.id}`, 5)
    db.set(`weekly_${message.author.id}_${message.guild.id}`, Date.now())
      } else {

        let embed = new Discord.RichEmbed()
            .setFooter('Ты проиграл!', message.author.displayAvatarURL)
            .setTitle(':slot_machine: Slots :slot_machine:')
            .addField('Результат:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor('#704c84')
        message.channel.send({embed});
    }
}
module.exports.help = {
    name: "donate"
};