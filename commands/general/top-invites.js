const Discord = require("discord.js" )
const { MessageEmbed } = require("discord.js");
const {prefix} = require("../../config.js")

module.exports = {
  name: "top-invites",
  aliases: [""],
  description: "show the list of invites",
  usage: ["!top-invites"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [5],
  ownerOnly: false,
  run: async (client, message, args, config) => {

var { inviteTracker } = require("discord-inviter")
          var top = await inviteTracker.getTopInvites(message.guild);
   
     var x = top.map((i, n) => `\`#${n + 1}\`- **${i.user.tag}** has __${i.count}__`).join("\n");
      
    const embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
.setDescription(`**${x}**`)

    message.channel.send({ embeds: [embed] })
  

}
}