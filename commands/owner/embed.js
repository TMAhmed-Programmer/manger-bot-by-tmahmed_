const { MessageEmbed } = require("discord.js");




module.exports = {
  name: "embed",
  aliases: [""],
  description: "sends a message to the target channel",
  usage: ["!embed"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  
  run: async (client, message, args, config) => {

  let args1 = args.slice(0).join(' ')
                 
                
                if (!args1) {
                        message.reply({ content: `:rolling_eyes: **Please provide some args.**` })
                }
                let embed = new MessageEmbed()
                        .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
                        .setColor(message.guild.me.displayHexColor)
                        .setTimestamp()

                let attach = message.attachments.first();
                if (attach) {
                        embed.setImage(attach.proxyURL)
                        if (args1) {
                                embed.setDescription(`${args1}`)
                        }
                }
                if (args1) {
                        embed.setDescription(`${args1}`)
                        message.channel.send({ embeds: [embed] })
                                .then(() => {
                                        message.delete()
                                })
                }
        },
};
