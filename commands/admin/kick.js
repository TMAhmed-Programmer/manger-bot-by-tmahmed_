const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "kick",
  aliases: ["طرد"],
  description: "kick members",
  usage: [""],
  category: "admin",
  botPermission: ["KICK_MEMBERS"],
  authorPermission: ["KICK_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {


    
  let id = message.content.split(' ').slice(1).join(' ')
    let user = message.mentions.members.first() || message.guild.members.cache.get(id)
    if (!user) return message.reply(`** 🙄 Please mention member or id**`)
    if(user.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) return message.reply(`** ❌ You can't kick this user **`)
    user.kick().then(() => message.reply(`**✅@${user.user.username} kicked from the server!**`)).catch(err => message.reply(err))

   const logdata = require("../../models/channel.js")

          var data = await logdata.findOne({ GuildID: message.guild.id });
if(!data) return;
    if (message.channel.id == `${data.channel}`) {
			const des = new MessageEmbed()
				.setDescription(`user use cmd : ${message.author.id} \n user kick : ${user} `)
message.channel.send({embeds: [des]});		}

		
     }
  }