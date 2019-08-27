const {RichEmbed} = require('discord.js'); 
const db = require('quick.db');
exports.run = async (client, message, args) => {
  if(message.content.charAt(0) !== "+") return;
    if (message.content.startsWith("+8ball")) {
	  let replies = ["Да", "Нет", "Ну, не знаю", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?"];

    let result = Math.floor((Math.random() * replies.length));
    let question = message.content.slice(7);
    if(!question.includes('?')) return message.reply(' а где вопросительный знак?')

    if(question === "У меня есть смысл жить?") replies[result] = 'Нет, умри нахуй'
    if(question === "Где смотреть аниме?") replies[result] = 'Только на youmiteru.ru!' 
    if(question === "8ball") replies[result] = '???????'
    if(question === "Когда будет война?") replies[result] = 'В 2020 году'
    if(question === "Из-за чего пиздец?") replies[result] = 'ХЗ'

	    
	    if (message.content.slice(6) == "") return message.channel.send ("Кажеться ты что-то забыл.")
	    
	const ball8 = new Discord.RichEmbed()
	.setColor('#704c84')
	.setTitle('Вопрос:')
	.setAuthor('8ball',)
	.setDescription(`${question}`)
	.addField(replies[result], 'Но это не точно. \:D')
        message.channel.send(ball8);
    }
}
const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {
  
	  let replies = ["Да", "Нет", "Ну, не знаю", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?"];

    let result = Math.floor((Math.random() * replies.length));
    let question = message.content.slice(7);
    if(!question.includes('?')) return message.reply(' а где вопросительный знак?')

    if(question === "У меня есть смысл жить?") replies[result] = 'Нет, умри нахуй'
    if(question.includes('отсосёшь')||question.includes('сосать')) replies[result] = 'Нет, умри нахуй'
    if(question === "Где смотреть аниме?") replies[result] = 'Только на youmiteru.ru!' 
    if(question === "8ball") replies[result] = '???????'
    if(question === "Когда будет война?") replies[result] = 'В 2020 году'
    if(question === "Из-за чего пиздец?") replies[result] = 'ХЗ'

	    
	    if (message.content.slice(6) == "") return message.channel.send ("Кажеться ты что-то забыл.")
	    
	const ball8 = new Discord.RichEmbed()
	.setColor('#704c84')
	.setTitle('Вопрос:')
	.setAuthor('8ball',)
	.setDescription(`${question}`)
	.addField(replies[result], 'Но это не точно. \:D')
        message.channel.send(ball8);
}
module.exports.help = {
    name: "8ball"
};