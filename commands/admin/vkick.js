const { MessageEmbed } = require("discord.js");

const db = require("quick.db");
module.exports = {
  name: "vkick",
  aliases: [],
  description: "Kicks a member from the voice channel",
  usage: ["!vkick @user"],
  category: "admin",
  botPermission: ["MOVE_MEMBERS"],
  authorPermission: ["MOVE_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {
                
          
          
          const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

          
                /*if (!permission) return message.reply({ content: ":x: **You don't have permission to use this command**" }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })*/

		
                if (!args[0]) return message.reply({ content: `:rolling_eyes: **Please mention member or id**` }).catch((err) => {
                        console.log(`I Couldn't Reply To The Message: ` + err.message)
                })

                if (!member) return message.reply({ content: `:rolling_eyes: **I can't find this member**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (message.member.roles.highest.position < member.roles.highest.position) return message.reply({ content: `:rolling_eyes: **${member.user.username} have higher role than you**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

         
                if (!message.member.voice.channel) return message.reply({ content: `:x: **You aren't in a voice channel**` })
                if (!member.voice.channel) return message.reply({ content: `:x: **The user aren't in a voice channel**` })
                let vchannel = message.member.voice.channel
                member.voice.disconnect().then(() => {
                        message.reply({ content: `:white_check_mark: **Kicked ${member.user.username} from ${vchannel.name}**` })
                })

        },
};