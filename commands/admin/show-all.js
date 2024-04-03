const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "show-all",
  aliases: ["sa"],
  description: "to show all chat",
  usage: ["!show-all"],
  category: "admin",
  botPermission: ["MANAGE_CHANNELS"],
  authorPermission: ["MANAGE_CHANNELS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: true}).then(() => {
      });
    })
    message.channel.send(`:white_check_mark: **all roms have been shown**`)
    }


}