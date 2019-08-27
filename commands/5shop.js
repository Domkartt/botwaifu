const Discord = module.require("discord.js");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
if(message.content.charAt(0) !== "+") return;
    let shop = client.emojis.find(emoji => emoji.name === "shop")
    let embed = new Discord.RichEmbed()
        .setTitle(shop + "Список ролей которые можно купить на этом сервере \n ")
        .setColor('#704c84')
      
  if (db.fetch(`role1name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>`, ` - ${role1price}`);
  }
  
  if (db.fetch(`role2name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price}`);
  }
  
  if (db.fetch(`role3name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price}`);
  }

  if (db.fetch(`role4name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price}`);
  }

  if (db.fetch(`role5name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price}`);
  }

  if (db.fetch(`role6name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price}`);
  }

    if (db.fetch(`role7name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price}`);
  }

  if (db.fetch(`role8name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)

    let role8name = await db.fetch(`role8name_${message.guild.id}`)
    let role8price = await db.fetch(`role8price_${message.guild.id}`)
              
    embed.setDescription(`\n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price} \n :small_blue_diamond: <@&${role8name.id}>` + ` - ${role8price}`);
  }

  if (db.fetch(`role9name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)

    let role8name = await db.fetch(`role8name_${message.guild.id}`)
    let role8price = await db.fetch(`role8price_${message.guild.id}`)

    let role9name = await db.fetch(`role9name_${message.guild.id}`)
    let role9price = await db.fetch(`role9price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price} \n :small_blue_diamond: <@&${role8name.id}>` + ` - ${role8price} \n :small_blue_diamond: <@&${role9name.id}>` + ` - ${role9price}`);
  }

  if (db.fetch(`role10name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)

    let role8name = await db.fetch(`role8name_${message.guild.id}`)
    let role8price = await db.fetch(`role8price_${message.guild.id}`)

    let role9name = await db.fetch(`role9name_${message.guild.id}`)
    let role9price = await db.fetch(`role9price_${message.guild.id}`)

    let role10name = await db.fetch(`role10name_${message.guild.id}`)
    let role10price = await db.fetch(`role10price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price} \n :small_blue_diamond: <@&${role8name.id}>` + ` - ${role8price} \n :small_blue_diamond: <@&${role9name.id}>` + ` - ${role9price} \n :small_blue_diamond: <@&${role10name.id}>` + ` - ${role10price}`);
  }

  if (db.fetch(`role11name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)

    let role8name = await db.fetch(`role8name_${message.guild.id}`)
    let role8price = await db.fetch(`role8price_${message.guild.id}`)

    let role9name = await db.fetch(`role9name_${message.guild.id}`)
    let role9price = await db.fetch(`role9price_${message.guild.id}`)

    let role10name = await db.fetch(`role10name_${message.guild.id}`)
    let role10price = await db.fetch(`role10price_${message.guild.id}`)

    let role11name = await db.fetch(`role11name_${message.guild.id}`)
    let role11price = await db.fetch(`role11price_${message.guild.id}`)
              
    embed.setDescription(`￼ \n :small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price} \n :small_blue_diamond: <@&${role8name.id}>` + ` - ${role8price} \n :small_blue_diamond: <@&${role9name.id}>` + ` - ${role9price} \n :small_blue_diamond: <@&${role10name.id}>` + ` - ${role10price} \n :small_blue_diamond: <@&${role11name.id}>` + ` - ${role11price}`);
  }

  if (db.fetch(`role12name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)

    let role8name = await db.fetch(`role8name_${message.guild.id}`)
    let role8price = await db.fetch(`role8price_${message.guild.id}`)

    let role9name = await db.fetch(`role9name_${message.guild.id}`)
    let role9price = await db.fetch(`role9price_${message.guild.id}`)

    let role10name = await db.fetch(`role10name_${message.guild.id}`)
    let role10price = await db.fetch(`role10price_${message.guild.id}`)

    let role11name = await db.fetch(`role11name_${message.guild.id}`)
    let role11price = await db.fetch(`role11price_${message.guild.id}`)

    let role12name = await db.fetch(`role12name_${message.guild.id}`)
    let role12price = await db.fetch(`role12price_${message.guild.id}`)
              
    embed.setDescription(`:small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price} \n :small_blue_diamond: <@&${role8name.id}>` + ` - ${role8price} \n :small_blue_diamond: <@&${role9name.id}>` + ` - ${role9price} \n :small_blue_diamond: <@&${role10name.id}>` + ` - ${role10price} \n :small_blue_diamond: <@&${role11name.id}>` + ` - ${role11price} \n :small_blue_diamond: <@&${role12name.id}>` + ` - ${role12price}`);
  }
  
  if (db.fetch(`role13name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)

    let role8name = await db.fetch(`role8name_${message.guild.id}`)
    let role8price = await db.fetch(`role8price_${message.guild.id}`)

    let role9name = await db.fetch(`role9name_${message.guild.id}`)
    let role9price = await db.fetch(`role9price_${message.guild.id}`)

    let role10name = await db.fetch(`role10name_${message.guild.id}`)
    let role10price = await db.fetch(`role10price_${message.guild.id}`)

    let role11name = await db.fetch(`role11name_${message.guild.id}`)
    let role11price = await db.fetch(`role11price_${message.guild.id}`)

    let role12name = await db.fetch(`role12name_${message.guild.id}`)
    let role12price = await db.fetch(`role12price_${message.guild.id}`)
    
    let role13name = await db.fetch(`role13name_${message.guild.id}`)
    let role13price = await db.fetch(`role13price_${message.guild.id}`)
              
    embed.setDescription(`:small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price} \n :small_blue_diamond: <@&${role8name.id}>` + ` - ${role8price} \n :small_blue_diamond: <@&${role9name.id}>` + ` - ${role9price} \n :small_blue_diamond: <@&${role10name.id}>` + ` - ${role10price} \n :small_blue_diamond: <@&${role11name.id}>` + ` - ${role11price} \n :small_blue_diamond: <@&${role12name.id}>` + ` - ${role12price} \n :small_blue_diamond: <@&${role13name.id}>` + ` - ${role13price}`);
  }
  
  if (db.fetch(`role14name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)

    let role8name = await db.fetch(`role8name_${message.guild.id}`)
    let role8price = await db.fetch(`role8price_${message.guild.id}`)

    let role9name = await db.fetch(`role9name_${message.guild.id}`)
    let role9price = await db.fetch(`role9price_${message.guild.id}`)

    let role10name = await db.fetch(`role10name_${message.guild.id}`)
    let role10price = await db.fetch(`role10price_${message.guild.id}`)

    let role11name = await db.fetch(`role11name_${message.guild.id}`)
    let role11price = await db.fetch(`role11price_${message.guild.id}`)

    let role12name = await db.fetch(`role12name_${message.guild.id}`)
    let role12price = await db.fetch(`role12price_${message.guild.id}`)
    
    let role13name = await db.fetch(`role13name_${message.guild.id}`)
    let role13price = await db.fetch(`role13price_${message.guild.id}`)
    
    let role14name = await db.fetch(`role14name_${message.guild.id}`)
    let role14price = await db.fetch(`role14price_${message.guild.id}`)
              
    embed.setDescription(`:small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price} \n :small_blue_diamond: <@&${role8name.id}>` + ` - ${role8price} \n :small_blue_diamond: <@&${role9name.id}>` + ` - ${role9price} \n :small_blue_diamond: <@&${role10name.id}>` + ` - ${role10price} \n :small_blue_diamond: <@&${role11name.id}>` + ` - ${role11price} \n :small_blue_diamond: <@&${role12name.id}>` + ` - ${role12price} \n :small_blue_diamond: <@&${role13name.id}>` + ` - ${role13price} \n :small_blue_diamond: <@&${role14name.id}>` + ` - ${role14price}`);
  }
  
  if (db.fetch(`role15name_${message.guild.id}`) !== null) {
    let role1name = await db.fetch(`role1name_${message.guild.id}`)
    let role1price = await db.fetch(`role1price_${message.guild.id}`)
    
    let role2name = await db.fetch(`role2name_${message.guild.id}`)
    let role2price = await db.fetch(`role2price_${message.guild.id}`)
    
    let role3name = await db.fetch(`role3name_${message.guild.id}`)
    let role3price = await db.fetch(`role3price_${message.guild.id}`)

    let role4name = await db.fetch(`role4name_${message.guild.id}`)
    let role4price = await db.fetch(`role4price_${message.guild.id}`)

    let role5name = await db.fetch(`role5name_${message.guild.id}`)
    let role5price = await db.fetch(`role5price_${message.guild.id}`)

    let role6name = await db.fetch(`role6name_${message.guild.id}`)
    let role6price = await db.fetch(`role6price_${message.guild.id}`)

    let role7name = await db.fetch(`role7name_${message.guild.id}`)
    let role7price = await db.fetch(`role7price_${message.guild.id}`)

    let role8name = await db.fetch(`role8name_${message.guild.id}`)
    let role8price = await db.fetch(`role8price_${message.guild.id}`)

    let role9name = await db.fetch(`role9name_${message.guild.id}`)
    let role9price = await db.fetch(`role9price_${message.guild.id}`)

    let role10name = await db.fetch(`role10name_${message.guild.id}`)
    let role10price = await db.fetch(`role10price_${message.guild.id}`)

    let role11name = await db.fetch(`role11name_${message.guild.id}`)
    let role11price = await db.fetch(`role11price_${message.guild.id}`)

    let role12name = await db.fetch(`role12name_${message.guild.id}`)
    let role12price = await db.fetch(`role12price_${message.guild.id}`)
    
    let role13name = await db.fetch(`role13name_${message.guild.id}`)
    let role13price = await db.fetch(`role13price_${message.guild.id}`)
    
    let role14name = await db.fetch(`role14name_${message.guild.id}`)
    let role14price = await db.fetch(`role14price_${message.guild.id}`)
    
    let role15name = await db.fetch(`role15name_${message.guild.id}`)
    let role15price = await db.fetch(`role15price_${message.guild.id}`)
              
    embed.setDescription(`:small_blue_diamond: <@&${role1name.id}>` + ` - ${role1price} \n :small_blue_diamond: <@&${role2name.id}>` + ` - ${role2price} \n :small_blue_diamond: <@&${role3name.id}>` + ` - ${role3price} \n :small_blue_diamond: <@&${role4name.id}>` + ` - ${role4price} \n :small_blue_diamond: <@&${role5name.id}>` + ` - ${role5price} \n :small_blue_diamond: <@&${role6name.id}>` + ` - ${role6price} \n :small_blue_diamond: <@&${role7name.id}>` + ` - ${role7price} \n :small_blue_diamond: <@&${role8name.id}>` + ` - ${role8price} \n :small_blue_diamond: <@&${role9name.id}>` + ` - ${role9price} \n :small_blue_diamond: <@&${role10name.id}>` + ` - ${role10price} \n :small_blue_diamond: <@&${role11name.id}>` + ` - ${role11price} \n :small_blue_diamond: <@&${role12name.id}>` + ` - ${role12price} \n :small_blue_diamond: <@&${role13name.id}>` + ` - ${role13price} \n :small_blue_diamond: <@&${role14name.id}>` + ` - ${role14price} \n :small_blue_diamond: <@&${role15name.id}>` + ` - ${role15price}`);
  }
        
    message.channel.send(embed)



};
module.exports.help = {
    name: "shop"
};