const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "say",
  aliases: [""],
  description: "sends a message to the target channel",
  usage: ["!say"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  run: async (client, message, args, config) => {

  
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
                const msg = args.slice(1).join(' ')
               
                if (!channel) {
                        message.reply({ content: `:rolling_eyes: **Please mention a channel**` }).catch((err) => {
                                console.log(`I Couldn't Reply To The Message: ` + err.message)
                        })
                }
                if (channel) {
                        let image = message.attachments.first()
                        if (image) {
                                channel.send({ content: `${msg}`, files: [image.proxyURL] }).then(() => {
                                        message.delete()
                                }).catch((err) => {
                                        console.log(`I Couldn't Reply To The Message: ` + err.message)
                                })
                        }
                        if (!image) {
                                channel.send(`${msg}`).then(() => {
                                        message.delete()
                                }).catch((err) => {
                                        console.log(`I Couldn't Reply To The Message: ` + err.message)
                                })
                        }
                }
        },
};
