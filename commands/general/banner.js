const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "banner",
  aliases: ["b"],
  description: "Displays your banner or someone else's banner",
  usage: ["!banner @user"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {
    
    
   let ss = message.content.split(' ')[1];
     let member = message.mentions.users.first() || await client.users.fetch(ss).catch(() => {}) || message.author ;
    if (!member) return message.channel.send(`**please mention the user or get ID** `)
    let banner = false;
    await member.fetch().then(member => {
      if (member.banner) {
        banner = member.bannerURL({ dynamic: true, size: 1024 })
      }
    })
    if (banner === false) return message.reply(`** :rolling_eyes: \`${member.username}\` • don't have banner**`);
    let embed = new MessageEmbed()
      .setTitle(`${member.username} banner`)
      .setImage(`${banner}`)
      .setColor('#2F3136')
      .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
      .setTimestamp()
    message.reply({
      embeds: [embed]
  
  })
  }
}