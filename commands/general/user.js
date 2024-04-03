const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "user",
  aliases: ["u"],
  description: "user the account",
  usage: ["!user"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


  let user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]) || message.member;
    const { MessageEmbed } = require('discord.js');
    const moment = require('moment'); 
    let Embed = new MessageEmbed()
        .setColor('black')
        .setFields(
            { name: 'Joined Discord :', value: `**<t:${Math.floor(user.user.createdTimestamp / 1000)}:R>**`, inline: true },
            { name: 'Joined Server :', value: `**<t:${Math.floor(user.joinedAt / 1000)}:R>**`, inline: true },
        )
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setFooter(`${user.user.tag}`, user.user.avatarURL({ dynamic: true }))
        message.reply({embeds:[Embed], allowedMentions:[{repliedUser:false}]})

  
  
  
  
  }
  }