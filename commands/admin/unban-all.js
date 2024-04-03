const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const { prefix } = require("../../config.js")

module.exports = {
  name: "unban-all",
  aliases: ["unban all"],
  description: "to untie band from everyone",
  usage: ["!unban all"],
  category: "admin",
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


        let bans = await message.guild.bans.fetch()
        if(!bans.size)return message.channel.send({content: `🙄 **This server has no bans**`})
        bans.forEach(ban => message.guild.members.unban(ban.user))
        message.reply({content: `**Plese wait...**`}).then(m => {
            setTimeout(() => {
            m.reply({content: `✅ **Done successfully unban from \`${bans.size}\` members!**`})
            m.delete()
            }, 4000)
                                                          })
                

  }}
