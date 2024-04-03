const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "move",
  aliases: ["سحب", "اسحب" ],
  description: "moves a member to another voice channel",
  usage: ["!move @user"],
  category: "admin",
  botPermission: ["MOVE_MEMBERS"],
  authorPermission: ["MOVE_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {
    
 var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]); 

                if (!args[0]) return message.reply({ content: `:rolling_eyes: **Please mention member or id**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (!member) return message.reply({ content: `:rolling_eyes: **I can't find this member**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
if(!member.voice.channel)  return message.reply({ content: `:rolling_eyes: **this member is not in voice channel**` })
              
                if (!message.member.voice.channel) {
                  return message.reply({ content: `:rolling_eyes: **You aren't in a voice channel**` })
                }else {
    let vchannel = message.member.voice.channel
                member.voice.setChannel(vchannel).then(() => {
                        message.reply({ content: `:white_check_mark: **Moved ${member.user.username} To ${message.member.voice.channel.name}**` })
                })
                }
     
      
    
              

        },
};