const {RichEmbed} = require('discord.js'); 
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.content.charAt(0) !== "+") return;
    let user = message.mentions.members.first() || message.member;
  
    let boxs = db.fetch(`boxs_${user.user.id}_${message.guild.id}`);
  
    let works = ["Безработный","Дворник","Строитель","Уборщик","Официант","Бизнесмен",]

    let numberwork = await db.fetch(`work_${message.author.id}_${message.guild.id}.position`);
  
    let likes = db.fetch(`likes_${message.guild.id}_${user.id}`);
  
    let members = message.mentions.members.first() || message.member;
 
    let personal = await db.fetch(`personal_${members.user.id}_${message.guild.id}`);

    let warns = db.fetch(`warns_${message.guild.id}_${user.id}`);

    let money = client.emojis.find(emoji => emoji.name === "money")
    let like = client.emojis.find(emoji => emoji.name === "like")
    let profile = client.emojis.find(emoji => emoji.name === "profile")
    let msg = client.emojis.find(emoji => emoji.name === "message")
    let status = client.emojis.find(emoji => emoji.name === "status")
    let personale = client.emojis.find(emoji => emoji.name === "personal")
    let roles = client.emojis.find(emoji => emoji.name === "roles")
    let marry = client.emojis.find(emoji => emoji.name === "marry")
    let game = client.emojis.find(emoji => emoji.name === "game")
    let boxe = client.emojis.find(emoji => emoji.name === "box")
  
  
     const member = message.guild.member(user);

    if (user.user.id == "552790813839720451") {
       const embed = new RichEmbed() 
        .setColor('704c84')
        .setThumbnail("https://images-ext-1.discordapp.net/external/8p1ut-s_MuRZQUJ-pcJzuOiyR1D5xcy8DF2uJwBh3Tw/https/media.discordapp.net/attachments/528513269321826304/605488747181637633/image0.gif")
        .setTitle(`${user.user.tag}`,`${user.user.diplayAvatarURL}`)
        .addField(profile+' ID', `${user.id}`, true)
        .addField(profile+' Ник', `${user.user.tag}`, true)
        .addField(like+' Лайков', `∞`, true) 
        .addField(msg+' Сообщений', `∞`, true) //:e_mail: Сообщений 🚩
        .addField(status+' Статус', `${user.presence.status}`, true)
        .addField(personale+" Персональная информация", `*люблю Они-Сана...*`)
        .addField(game+' Играет в', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        .addField(marry+' Жената на', "broken smile.")
        .addField(money+' Денег:', "∞")
        .addField(roles+' Роли:', member.roles.map(roles => `${roles.name}`).join("  "), true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({embed});
      
    } if (user.user.id == "373872608027869184") {
       const embed = new RichEmbed() 
        .setColor('704c84')
        .setThumbnail("https://images-ext-1.discordapp.net/external/8p1ut-s_MuRZQUJ-pcJzuOiyR1D5xcy8DF2uJwBh3Tw/https/media.discordapp.net/attachments/528513269321826304/605488747181637633/image0.gif")
        .setTitle(`${user.user.tag}`,`${user.user.diplayAvatarURL}`)
        .addField(profile+' ID', `${user.id}`, true)
        .addField(profile+' Ник', `${user.user.tag}`, true)
        .addField(like+'Лайков', `∞`, true) 
        .addField(msg+' Сообщений', `∞`, true) //:e_mail: Сообщений 🚩
        .addField(status+' Статус', `${user.presence.status}`, true)
        .addField(game+' Играет в', `${user.presence.game ? user.presence.game.name : 'твою злую душу.'}`, true)
        .addField(marry+' Женат на', "IceWaifu", true)
        .addField(money+' Денег:', "∞")
        .addField(boxe+' Боксов:', box, true)
        .addField(personale+" Персональная информация", `*написал бота, IceWaifu*`)
        .addField(roles+' Роли:' , member.roles.map(roles => `${roles.name}`).join("  "), true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({embed})} else {
  
      let moneys = db.fetch(`moneys_${user.user.id}_${message.guild.id}`);
      
      if(moneys == null) {var moneynull = 0;} else {
        var moneynull = db.fetch(`moneys_${user.user.id}_${message.guild.id}`);
      }
      
      let lvl = db.fetch(`user_${user.user.id}_${message.guild.id}.level`)
      
      if(lvl == null) {var lvls = 0;} else {
        var lvls = db.fetch(`user_${members.user.id}_${message.guild.id}.level`);
      }
      
      if(boxs == null) {var box = 0;} else {
        var box = db.fetch(`boxs_${user.user.id}_${message.guild.id}`);
      }
      
      if(db.fetch(`personal_${members.user.id}_${message.guild.id}`) == null) 
         { 
         let personal_info = "Пусто"
         } else 
         {
         let personal_info = db.fetch(`personal_${members.user.id}_${message.guild.id}`)
         }
      
    let messages = db.fetch(`user_${user.user.id}_${message.guild.id}.message`);
      
     const embed = new RichEmbed() 
        .setColor('704c84')
        .setThumbnail(user.user.avatarURL)
        .setTitle(`Профиль ${user.user.tag}`,`${user.diplayAvatarURL}`)
        .addField(profile+' ID:', `${user.id}`, true)
        .addField(profile+' Ник:', `${user.user.tag}`, true)
        .addField(like+' Лайков:', `${likes}`, true)
        .addField(msg+' Сообщений: ', messages, true) //:e_mail: Сообщений
        .addField('Варнов', warns, true) //:e_mail: Сообщений 
        .addField(status+' Статус:', `${user.presence.status}`, true)
        .addField('Уровень:', lvls, true)
        .addField('Профессия:', works[numberwork], true)
        .addField(game+' Играет:', `${user.presence.game ? user.presence.game.name : 'Не во что'}`, true)
        .addField(money+' Денег:', moneynull, true)
        .addField(boxe+' Боксов:', box, true)
        .addField(personale+" Персональная информация", `*${db.fetch(`personal_${members.user.id}_${message.guild.id}`)}*`)
        .addField(roles+' Роли:', member.roles.map(roles => `${roles.name}`).join("  "))
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({embed});
    }
}
module.exports.help = {
    name: "profile"
};