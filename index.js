const Discord = require("discord.js"); 
const client = new Discord.Client();
const fs = require('fs');
const Canvas = require('canvas');
const helper = require('./helper.json');
const ms = require('parse-ms');
const cd = new Set();
const queue = new Map();
client.commands = new Discord.Collection();
const ytdl = require('ytdl-core');
const {
	prefix,
	token,
} = require('./config.json');
const config = require('./config.json'); 
const db = require('quick.db');

var http = require("http")
var express = require('express');
var app = express(); 

//antioff
app.get("/", (request, response) => {
  console.log("You're banned!");
  response.sendStatus(200);
});

// Это позволит боту работать 24/7
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



fs.readdir("./commands/", (err, files) => {
  
  const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};
  
  var messageId = "604044689896636598";
 
client.on("ready", () => {
  var guilds = client.guilds; // - список гильдий
guilds.forEach((singleGuild) => { // обычный цикл foreach с перебором всех элементов коллекции в singleGuild
    console.log(singleGuild.id); // в консоли друг за другом выйдут все айдишники
});
  
});
  
client.on("voiceStateUpdate", function(oldMember, newMember){
 console.log(`a user changes voice state`);
  let myRole = newMember.guild.roles.get("605813038142062613");
  if(!myRole) return;
  
  newMember.addRole(myRole)
  oldMember.removeRole(myRole)
  
});
  
client.on("messageReactionAdd", function(messageReaction, user){
  //let myRole = user.guild.roles.get("264410914592129025");
 //user.addRole(myRole);
  //user.send("123");
});
  
  
  client.on('message', async message => { //Считает каждое сообщение
    if(message.author.id == 373872608027869184) {
      if(message.content.charAt(0) !== ".") return;
        let tyan = client.emojis.find(emoji => emoji.name === "tyan") //берёт эмодзи :nyam: 
        let nyam = client.emojis.find(emoji => emoji.name === "nyam") //берёт эмодзи :nyam: unnamed

        var emoji = Math.floor(Math.random() * (1, 2))
        
        if(emoji == 1) {message.react(tyan)} else {message.react(nyam);}
        
    }
  });
    client.on('message', async message => { //Считает каждое сообщение
    if(message.author.id == 548229951409881153) {
        let nyam = client.emojis.find(emoji => emoji.name === "unnamed"); //берёт эмодзи :nyam: unnamed
      
        message.react(nyam);
      //message.delete();
        
    }
  });

  
  client.on('message', async message => { //Считает каждое сообщение
  
    
    //let ulikes = db.fetch(`likes_${message.guild.id}_${message.member.id}`) || 0;
//if(!db.fetch(`likes_${message.guild.id}_${message.author.id}`)) db.set(`likes_${message.guild.id}_${message.author.id}`,0)
//db.add(`likes_${message.guild.id}_${message.author.id}`,0)
    
    
    if(message.author.bot) return //Сообщения бота не считает.
    if(message.guild.id == "264445053596991498") return;
    db.add(`user_${message.author.id}_${message.guild.id}.message`, 1);
    //if(message.channel.type == "dm") return; //Считает только сообщения с сервера.
    let addxp = Math.floor(Math.random() * 5) + 5 //Количество получаемого xp(от 5 до 10) 
    if(!db.has(`user_${message.author.id}_${message.guild.id}.level`)) { //Если участника нет в базе он его вносит.
        db.set(`user_${message.author.id}_${message.guild.id}.level`, 1) //Левел
        db.set(`user_${message.author.id}_${message.guild.id}.xp`, 0) //Опыт
        db.set(`user_${message.author.id}_${message.guild.id}.maxs`, 100) //Максимальный опыт для которого нужно повышение уровня.
}
    var level = db.fetch(`user_${message.author.id}_${message.guild.id}.maxs`) || 100 //Просмотр максимального опыта.   
    var CurrentLevel = db.fetch(`user_${message.author.id}_${message.guild.id}.level`) || 1 //Просмотр левела.
    var levelrole = db.fetch(`user_${message.author.id}_${message.guild.id}.levelrole.${CurrentLevel + 1}`);
    var CurrentXp = db.fetch(`user_${message.author.id}_${message.guild.id}.xp`) || 0 //Просмотр xp
    db.set(`user_${message.author.id}_${message.guild.id}.xp`, CurrentXp + addxp); //Добавление xp за каждое сообщение.
    if(level < db.fetch(`user_${message.author.id}_${message.guild.id}.xp`)) { //Если опыта становится больше чем надо он повышает уровень и обнуляет xp.
        db.set(`user_${message.author.id}_${message.guild.id}.level`, CurrentLevel + 1) //Добавление левела
        db.set(`user_${message.author.id}_${message.guild.id}.maxs`, parseInt(level) + parseInt(100)); //Увеличевает количество максимального опыта для получения уровня.
        db.set(`user_${message.author.id}_${message.guild.id}.xp`, 0) //Обнуляет xp.
        let embed = new Discord.RichEmbed()
        .setColor('704c84') //Цвет сообщения
        .setDescription(`Вы получили ${CurrentLevel + 1} уровень на сервере ${message.guild.name}!`)
        message.member.send(embed)
      if(levelrole) {
        let role = message.guild.roles.get(levelrole.id);
        message.member.addRole(role); 
      }
      
      if (message.guild.id == "481902964710309908") {
      
     let role = message.guild.roles.get("481913227941380107");
   
      
       if(db.fetch(`user_${message.author.id}_${message.guild.id}.level`) == "5") { message.member.addRole(role); 
       
       }
    }
    
       
    }
})
  

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });

});

/*client.on('message', async message => {
          if(message.author.bot) return;
  if(message.guild.id == "264445053596991498") return;
  
  let spy = new Discord.RichEmbed()
    .setDescription(`**Сервер:** ${message.guild.name} - ${message.guild.id}\n **Канал:** ${message.guild.name} - ${message.guild.id}\n **Юзер:** ${message.author.tag}\n **Содержание** \n${message.content}`)
    .setColor(`704c84`)
  .setTimestamp()
client.channels.get('602165573001936944').send(spy)
  
})*/

client.on("ready", async () => {
  
  /*console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
  setInterval( () => {
   let user = client.guilds.members.get("id", "548229951409881153");
      user.setNickname("Пажилой утканос");
    },2000)*/
});

client.on("message", async message => {
  if (message.author.bot) return;
  
 //if (message.author.id == '204255221017214977') message.delete();
  
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);
});

client.on('ready', (message) => {
  setInterval( () => {
let voice = 0;
client.guilds.get("481902964710309908").channels.filter(chan => chan.type === 'voice').forEach((channel) => {voice += channel.members.size});
client.channels.get("600392871488651287").setName(`Голосовой онлайн: ${voice}`);
client.channels.get("599711379858915328").setName(`Серверов: ${client.guilds.size} | 200`); //${Date.now() - message.createdTimestamp 
client.channels.get("604384539170701312").setName(`Пинг: ${Math.round(client.ping)}`);
client.channels.get("599711012551131137").setName(`Участников: ${client.users.size}`);
    //client.channels.get("600879299872030721").setName(`💜Ролей: ${client.guilds.get('597698132360560650').roles.size}`); //kosmos
    client.channels.get("601894544350511105").setName(`💜Участников: ${client.guilds.get('597698132360560650').members.size}`); //kosmos601908352792002560
      client.channels.get("601908723492978698").setName(`💜Участников: ${client.guilds.get('600765327692922880').members.size}`);//oldgames
    client.channels.get("601908920818335744").setName(`💜Ролей: ${client.guilds.get('600765327692922880').roles.size}`); //oldgames
  }, 15000)
//client.user.setGame(gamePresence[i%gamePresence.length], 'https://www.twitch.tv/monstercat');
 var i = 0;
  var gamePresence = [`IceFamily`,`+set-autorole`,`+help`,`Серверов: ${client.guilds.size}`];//каждое слово через запятую - отдельный статус
    var timer = client.setInterval(function () {    
        client.user.setActivity(gamePresence[i], {
  type: "streaming",
  url: "https://www.twitch.tv/IceFamily"
});
      i++;
      if (i == gamePresence.length) i=1;
    },2000)//время в ms изменения текста (1 секунда - 1000)

  
  client.channels.get('482848904786739210').send('я запущен!');
  
  //const serverUs = client.guild.members.filter(m => m.presence.status === 'online').size;
});



client.on("message", (message) => {
  
    if (message.content.startsWith("бот, заткнись")) {
    message.channel.send ("ну лядно(");
    }
  
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

client.on('guildMemberAdd',(member)=>{
  
  let ar = db.fetch(`autorole_${member.guild.id}`)
  
  if(!ar) return;
  
        let role = member.guild.roles.get(ar.id); //member.addRole(role);
        member.addRole(role)
  
});

client.on('message', (message) => {
  if (message.content.startsWith(prefix + "botinfo")) {
    let boticon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Информация о IceWaifu")
    .setColor("0EDEDA")
    .addField("Имя бота", client.user.username)
    .addField("Меня создали", client.user.createdAt)
    .addField("Серверов", client.guilds.size)
    
    message.channel.send(botembed)
  }
})

client.on('message', async message => {
if(message.author.bot) return;
  if (message.content.startsWith(prefix + "helper")) {
  let editedmessage = message.content.slice (7);
    helper [message.author.username] = {
      message: editedmessage
    }
  fs.writeFile("./helper.json", JSON.stringify (helper, null, 4), err => {
    if (err) throw err;
    message.channel.send ("на вашу заявку ответят в течении суток.");
  }
  )};
});

client.login(token);