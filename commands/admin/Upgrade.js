const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "upgrade",
  description: "Add/remove a role for a user.",
  category: "admin",
  botPermission: ["MANAGE_ROLES"],
  authorPermission: ["MANAGE_ROLES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (client, message, args, config) => {
    const member =
      message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!args[0]) {
      const embed = new MessageEmbed()
        .setDescription(":rolling_eyes: **Please mention member or id**")
        .setColor("#ff0000");
      return message.reply({ embeds: [embed], ephemeral: true }).catch(console.error);
    }

    if (!member) {
      const embed = new MessageEmbed()
        .setDescription(":rolling_eyes: **I can't find this member**")
        .setColor("#ff0000");
      return message.reply({ embeds: [embed], ephemeral: true }).catch(console.error);
    }

    if (message.member.roles.highest.position < member.roles.highest.position) {
      const embed = new MessageEmbed()
        .setDescription(
          `:rolling_eyes: **You can't add role ${member.user.username} has a higher role than you**`
        )
        .setColor("#ff0000");
      return message.reply({ embeds: [embed], ephemeral: true }).catch(console.error);
    }

    let role =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find((r) =>
        r.name.toLocaleLowerCase().includes(args[1])
      ) ||
      message.guild.roles.cache.get(args[1]);

    if (!role) {
      const embed = new MessageEmbed()
        .setDescription(":rolling_eyes: - ** Please specify one role name **")
        .setColor("#ff0000");
      return message.reply({ embeds: [embed], ephemeral: true }).catch(console.error);
    }

    if (!member.roles.cache.has(role.id)) {
      member.roles.add(role.id);

      const embed = new MessageEmbed()
        .setDescription(`:white_check_mark: Changed roles for ${member.user.username}, + **${role.name}**`)
        .setColor(message.guild.me.displayHexColor);

      message.reply({ embeds: [embed] }).catch(console.error);

      // Send a private message to the member
      member.send({
  embeds: [
    new MessageEmbed()
      .setTitle("**Upgrade Notification**")
      .setDescription(`
      > **You have been upgraded** \n 
> **Role :** **${role.name}** \n 
> **Upgrade by :** **${message.author.username}**`)
      .setColor(message.guild.me.displayHexColor)
  ]
}).catch(console.error);

    } else {
      member.roles.remove(role.id);

      const embed = new MessageEmbed()
        .setDescription(`:white_check_mark: Changed roles for ${member.user.username}, - **${role.name}**`)
        .setColor(message.guild.me.displayHexColor);

      message.reply({ embeds: [embed] }).catch(console.error);

      // Send a private message to the member
      member.send({
        embeds: [
          new MessageEmbed()
            .setDescription(`**Your role has been removed by** **${message.author.username}**`)
            .setColor(message.guild.me.displayHexColor),
        ],
      }).catch(console.error);
    }
  },
};
