const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "role-all",
  aliases: [""],
  description: "give role to all members",
  usage: ["!role-all namerole"],
  category: "admin",
  botPermission: ["MANAGE_ROLES"],
  authorPermission: ["MANAGE_ROLES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {
    
          
     const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);




  const members = await message.guild.members.fetch()
        const role = message.guild.roles.cache.find(role => role.name === `${message.content.split(" ").slice(1).join(" ")}`)
        if(!role) return message.reply(":rolling_eyes: **type the name of the role please!**")
        members.filter(m => !m.user.bot).forEach(member => member.roles.add(role))
        await message.reply(`**role \`${message.content.split(" ").slice(1).join(" ")}\` has been added to members **✅`)
    }
}