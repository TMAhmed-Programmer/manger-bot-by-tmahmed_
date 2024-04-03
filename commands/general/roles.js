const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "roles",
  aliases: ["info"],
  description: "'Get a list of server roles and member counts",
  usage: ["!roles"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {

  
     let roles = '\`\`\`\n';
        let names = message.guild.roles.cache.map(role => `${role.name}`);
        let longest = names.reduce((long, str) => Math.max(long, str.length), 0);
message.guild.roles.cache.forEach(role => {
            roles += `${role.name}${' '.repeat(longest - role.name.length)} : ${
                role.members.size
            } members\n`;
        });
        roles += '\`\`\`';
        message.reply({content: roles});
    }
};