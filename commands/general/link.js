const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "link",
  aliases: ["رابط"],
  description: "to send link the server in dm",
  usage: ["!link"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [10],
  ownerOnly: false,
  run: async (client, message, args, config) => {



var invite = await message.channel.createInvite({
      maxAge: 604800,
      max: 5
    });

      message.react("✅").catch(err => { })
    .catch(err =>
      message.react("❌").catch(err => { }))
    message.author.send(`**User** : 5\n**Time** : 12h\n**Link** : ${invite.url}`);
  }
}