const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "color",
  aliases: ["لون"],
  description: "to choose  specific color",
  usage: ["!color"],
  category: "general",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [10],
  ownerOnly: false,
  run: async (client, message, args, config) => {


      



  if (!args[0]) return message.channel.send("** :rolling_eyes: type a number of color please!**");
 const allowedColors = ["1","2","3","4","5","6","7","8","9","10" ,"11","12","13","14","15","16","17","18","19" ,"20","21","22","23","24","25","26","27","28" ,"29","30","31","32","33","34","35","36","37"];
    
  if (!allowedColors.includes(args[0]))
    return message.channel.send(
      " :rolling_eyes: **The color you selected doesn't exist!**"
    );
  let a = message.guild.roles.cache.find(
    (r) => r.name.toLowerCase() === `${args.join(" ").toLowerCase()}`
  );
  if (!a) return message.channel.send(":rolling_eyes: **Couldn't find that color role!**");
  if (!a.editable)
    return message.channel.send(" :rolling_eyes: **I don't have permissions to edit/give that role!**");

  const memberRoles =[...message.member.roles.cache.values()]
  memberRoles.forEach((role) => {
    if (
      allowedColors.includes(role.name.toLowerCase()) &&
      args.join(" ").toLowerCase() !== role.name.toLowerCase()
    )
      if (message.member.roles.cache.find((r) => (r.id = role.id)))
        message.member.roles.remove(role).catch((err) => message.channel.send(err.message));
  });
 
      await message.member.roles.add(a).then(() => message.channel.send(`:white_check_mark: **Color has been changed successfully.** `)).catch((err) => message.channel.send(err.message));

}
}