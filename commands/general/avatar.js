const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "avatar",
  aliases: ["a"],
  description: "Displays your avatar or someone else's avatar",
  usage: ["!help"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [10],
  ownerOnly: false,
  run: async (client, message, args, config) => {


      
       
        
      const embed = new MessageEmbed()
.setColor(message.member.displayHexColor)
.setTitle("Avatar Link")  
.setFooter({text: `Requested By ${message.author.username}`, iconURL: `${message.author.avatarURL({ dynamic: true , size:1024 })}`});

if (args[0]) {
  if(args[0] === "server") {
    embed.setURL(message.guild.iconURL({ dynamic: true , size: 1024, default: "png" }));
    embed.setImage(message.guild.iconURL({ dynamic: true , size: 1024, default: "png" }));
  } else {
    const user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => {});
    if (!user) return message.channel.send(":rolling_eyes: **Please mention a user or provide a valid ID**");
  
    embed.setTitle(`Avatar Link ${user.tag}`)
    embed.setURL(user.avatarURL({ dynamic: true , size: 1024, default: "png" }));
    embed.setImage(user.avatarURL({ dynamic: true , size: 1024, default: "png" }));
  }
} else {
  embed.setURL(message.author.avatarURL({ dynamic: true , size: 1024, default: "png" }));
  embed.setImage(message.author.avatarURL({ dynamic: true , size: 1024, default: "png" }));
}

message.reply({embeds: [embed]});
}
}