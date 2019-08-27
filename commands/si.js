exports.run = (client, msg, args) => {
  if(msg.content.charAt(0) !== "+") return;
  if(msg.content.startsWith !== "+") return;
  const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
  return msg.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Nobody has an invite link as game name.");
};

module.exports.help = {
  name: 'checkinvites',
  aliases: ['ci']
};