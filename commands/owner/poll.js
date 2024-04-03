const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poll",
  aliases: [""],
  description: "sends a message to the target channel",
  usage: ["!poll"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  
  run: async (client, message, args, config) => {
    let args1 = args.slice(0).join(' ');
                 
    if (!args1) {
      return message.reply({ content: `:rolling_eyes: **Please provide some args.**` });
    }

    let embed = new MessageEmbed()
      .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
      .setColor(message.guild.me.displayHexColor)
      .setTimestamp();

    let attach = message.attachments.first();
    if (attach) {
      embed.setImage(attach.proxyURL);
    }
    
    embed.setDescription(args1);

    const sentMessage = await message.channel.send({ embeds: [embed] });
    await sentMessage.react('✅');
    await sentMessage.react('❌');
    
    message.delete();
  },
};
