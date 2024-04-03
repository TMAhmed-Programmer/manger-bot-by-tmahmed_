const Discord = require("discord.js");


module.exports = {
  name: "setgame",
  aliases: ["sg"],
  description: "change game the bot",
  usage: ["!setgame"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  run: async (client, message, args, config) => {
    let owners = config.owners

  let statusfetch = message.content.split(" ").slice(1).join(" ")
    if (!owners.includes(message.author.id)) return
    client.user.setActivity(statusfetch)
    message.channel.send('`\✅ Changed bot status sucessfully`').catch(() => {
      message.channel.send('`\❌ Please provide a short description!`')
    })

  }
}