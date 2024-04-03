const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "setavatar",
  aliases: ["sa"],
  description: "change avatar the bot",
  usage: ["!setavatar"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  run: async (client, message, args, config) => {


    let imagefetch = message.content.split(" ").slice(1).join(" ") 
      
client.user.setAvatar(imagefetch).catch(() => { message.channel.send('`\❌ Please wait the couldown or povide a valid url!`')
})
         message.channel.send(':white_check_mark: **Changed bot avatar sucessfully**')
     }}