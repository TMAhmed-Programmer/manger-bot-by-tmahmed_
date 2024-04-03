const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "setname",
  aliases: ["sn"],
  description: "change name the bot",
  usage: ["!setname"],
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  run: async (client, message, args, config) => {


   //        let owner ="501614676891795458";
   // if(message.author.id !== owner) return;
        let name = message.content.split(" ").slice(1).join(" ");
        if(!name) return message.channel.send(" **:rolling_eyes: Please type the new username** ")
        client.user.setUsername(name);
        message.channel.send(` ✅  **Done setting username to : ${name}**`);
    }};
