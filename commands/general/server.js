const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "server",
  aliases: ["s"],
  description: "information the server",
  usage: ["!server"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {

if (message.guild.memberCount !== message.guild.members.cache.size) await message.guild.members.fetch()
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache.size;
              const stickers = message.guild.stickers.cache.size;

const bots = message.guild.members.cache.filter(member => member.user.bot).size; 
      const human = message.guild.members.cache.filter(member => !member.user.bot).size; 

let onlineMembers = message.guild.members.cache.filter(member => member.presence?.status == "online").size

      let dndMembers = message.guild.members.cache.filter(member => member.presence?.status == "dnd").size

            let idelMembers = message.guild.members.cache.filter(member => member.presence?.status == "idle").size


      
  let Embed = new MessageEmbed()            .setColor('BLACK')            .setAuthor({ name: `${message.guild.name}'s Info`, iconURL: message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }) })            .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))            .addFields(               
    { name: '🆔 Server ID:', value: `${message.guildId}`, inline: true },                { name: '📆 Created On:', value: `**<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>**`, inline: true },               
    { name: '👑 Owned by:', value: `<@!${message.guild.ownerId}>`, inline: true },                     { name: `👥  Members (${message.guild.memberCount}):`, value: ` **${onlineMembers + dndMembers + idelMembers}** Online | **${bots}** Bots | **${human}** Humans  `, inline: true}, 
    { name: `💬 Channels (${message.guild.channels.cache.size}) & Roles:`, value: `** ${channels.filter(channel => channel.type === 'GUILD_TEXT').size}** Text |  **${channels.filter(channel => channel.type === 'GUILD_VOICE').size} ** Voice | ** ${message.guild.roles.cache.size} **Roles `, inline: true }, { name: '⭐ Emojies & stickers:', value: `** ${stickers} ** Stickers | ** ${emojis} **Emojies `, inline: true },
    { name: `💎 Boost Tier(${message.guild.premiumTier.replace("TIER_", "")}) state : `, 
 value: `Boost Tier(** ${message.guild.premiumTier.replace("TIER_", "")} **)  |   ** ${message.guild.premiumSubscriptionCount} ** Boosts `},
    //{ name: `Other`, value:`${message.guild.roles.cache.size}`},
    { name: `🌐 Region: `, value: `${message.guild.preferredLocale}`, inline: true },
        { name: `🔒 Verification: `, value: `${message.guild.verificationLevel}`, inline: true }

    ) 
            
        message.reply({ embeds: [Embed] });
    }
}
