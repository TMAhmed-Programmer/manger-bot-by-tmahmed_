const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "hide-all",
  aliases: ["ha"],
  description: "to hide all chat",
  usage: ["!hide-all"],
  category: "admin",
  botPermission: ["MANAGE_CHANNELS"],
  authorPermission: ["MANAGE_CHANNELS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.permissionOverwrites.create(everyone, {VIEW_CHANNEL: false}).then(() => {
      });
    })
    message.channel.send(`:white_check_mark: **all roms have been hidden**`)
    }
};
