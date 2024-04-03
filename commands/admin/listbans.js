const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "listbans",
  aliases: ["المبندين" , "ab"],
  description: "give you a list of all bans",
  usage: ["!allbans"],
  category: "admin",
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


   // if(!message.member.permissions.has('BAN_MEMBERS')) return;
    message.guild.bans.fetch()
.then(bans => {
          
  let list = bans.map(user => `- ${user.user.username}`).join('\n');
    
  if (list.length >= 1950) list = `${list.slice(0, 1948)}`;

  const embed = new MessageEmbed()
  .setColor(message.guild.me.displayColor)
  .setTitle(`${bans.size} users are banned :`)
  .setDescription(`
**${list}**
      `)
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic : true}))
 message.channel.send({embeds : [embed]})
})
.catch(console.error);
  }
};