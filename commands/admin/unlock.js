const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "unlock",
  aliases: ["فتح"],
  description: "unlock chat",
  usage: ["!unlock"],
  category: "admin",
  botPermission: ["MANAGE_CHANNELS"],
  authorPermission: ["MANAGE_CHANNELS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


    

  
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
message.channel.permissionOverwrites.edit(everyone, {
          SEND_MESSAGES : true
            }).then(() => {
message.reply(`**🔓 ${message.channel} has been unlock.**`)
     })
    

  }}