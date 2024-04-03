const { MessageEmbed } = require("discord.js");
const db = require("pro.db"); 


module.exports = {
  name: "setprefix",
  aliases: ["sp"],
  description: "change prefix the bot",
  usage: ["!setprefix"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  run: async (client, message, args, config) => {
const db2 = require("pro.db")
    
	const db3 =  db2.get("prefix")
const dba = `${config.prefix}` && db3
    
    if (!args[0]) return message.channel.send(`:rolling_eyes: **Please Write New Prefix!**`);
    db.set("prefix", args[0]);
      client.user.setActivity(`${args[0]}help`, { type: 'PLAYING' });

    message.channel.send(
      `**Prefix Successfuly Changed To : \`${args[0]}\`**`
    );

  } }

 