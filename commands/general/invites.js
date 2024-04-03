const Discord = require("discord.js" )
const { MessageEmbed } = require("discord.js");
const {prefix} = require("../../config.js")

module.exports = {
  name: "invites",
  aliases: [""],
  description: "show the list of invites",
  usage: ["!invites"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [5],
  ownerOnly: false,
  run: async (client, message, args, config) => {
// let user = message.mentions.users.first() || message.author;
   
  let user = message.mentions.members.first() || message.guild.members.cache.get(message.content.split(' ')[1]) || message.member;
 
var { inviteTracker } = require("discord-inviter")
        var invite = await inviteTracker.getMemberInvites(user);
    
        const embed = new Discord.MessageEmbed()
        .setColor('#2F3136')
.setDescription(`**${user} has ${invite.count} invite(s).**`)
    message.channel.send({ embeds: [embed] })

}
}