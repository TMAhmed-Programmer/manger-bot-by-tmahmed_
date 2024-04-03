const Discord = require("discord.js" )
const { MessageEmbed } = require("discord.js");
const {prefix} = require("../../config.js")

module.exports = {
  name: "invite",
  aliases: [""],
  description: "invite bot to ur server",
  usage: ["!help"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [5],
  ownerOnly: false,
  run: async (client, message, args, config) => {



let embed = new Discord.MessageEmbed()
.setAuthor({name: message.author.tag,iconURL: 
message.author.avatarURL({dynamic:true})})
.setTitle(`:arrow_right: Invite Me`)
.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client. user.id}&permissions=0&scope=bot`)
.setTimestamp()
message.channel.send({ embeds: [embed] })
message.react(`✅`)
      },
};   