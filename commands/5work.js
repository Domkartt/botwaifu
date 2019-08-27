const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
if(message.content.charAt(0) !== "+") return;
    let timeout = 600000
    
    let works = ["Безработный","Дворник","Строитель","Уборщик","Официант","Бизнесмен",]

    let numberwork = await db.fetch(`work_${message.author.id}_${message.guild.id}.position`);
  
    let numbercount = await db.fetch(`work_${message.author.id}_${message.guild.id}.count`);
  
    if(!numberwork) db.set(`work_${message.author.id}_${message.guild.id}.position`, 0);
  
    let amount = 201
    
    if(numbercount == 0) 
    {
      db.add(`work_${message.author.id}_${message.guild.id}.position`, 1);
    } else if(numbercount == 5){
      db.add(`work_${message.author.id}_${message.guild.id}.position`, 1);
    } else if(numbercount == 15){
      db.add(`work_${message.author.id}_${message.guild.id}.position`, 1);
    } else if(numbercount == 25){
      db.add(`work_${message.author.id}_${message.guild.id}.position`, 1);
    } else if(numbercount == 30){
      db.add(`work_${message.author.id}_${message.guild.id}.position`, 1);
    } else if(numbercount == 55){
      db.add(`work_${message.author.id}_${message.guild.id}.position`, 1);
    }
  
        numberwork = await db.fetch(`work_${message.author.id}_${message.guild.id}.position`);
  
        //if(!numberwork) db.set(`work_${message.author.id}_${message.guild.id}.position`, 0);
  
      if(numberwork == 0) 
    {
      amount = 50
    } else if(numberwork == 1){
      amount = 100
    } else if(numberwork == 2){
      amount = 450
    } else if(numberwork == 3){
      amount = 550
    } else if(numberwork == 4){
      amount = 600
    } else if(numberwork == 5){
      amount = 800
    } 
  
    let work = await db.fetch(`work_${message.author.id}_${message.guild.id}.time`);

    if (work !== null && timeout - (Date.now() - work) > 0) {
        let time = ms(timeout - (Date.now() - work));
      
        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .addField(`Ты уже поработал, возвращайся через`, `**${time.hours}h ${time.minutes}m ${time.seconds}s**`)
        .setColor("704c84")
        
    
        message.channel.send(embed)
    } else {
      
      let a = message.author.id

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, поработал на профессии **${works[numberwork]}** за ${amount}$!`)
        //.addField(`До следующей профессии осталось поработать ${ostalos}`)
        .setColor("704c84")
        
    
        message.channel.send(embed)
        
        
      db.add(`moneys_${message.author.id}_${message.guild.id}`, amount);
      
        db.set(`work_${message.author.id}_${message.guild.id}.time`, Date.now());
      
      db.add(`work_${message.author.id}_${message.guild.id}.count`, 1);
      
      db.add(`work_${message.author.id}_${message.guild.id}.worked`, 1);
      
      
      }
  };
module.exports.help = {
    name: "work"
};