const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "lock", // الأسم
  aliases: ["قفل",""], // امر الأحتياط
  description: "lock chat", // دسكربشن تاع الأمر
  usage: ["!lock"], // كيف تستخدمه
  category: "admin", // مثلا هو في الأدمن او في الجينرال او الأنفو
  botPermission: ["MANAGE_CHANNELS"], // صلاحيات لـ بوت
  authorPermission: ["MANAGE_CHANNELS"], // صلاحيات المستخدم
  cooldowns: [], // كم لازم يستنى ليغير الأمر
  ownerOnly: false, // ذا الامر كان للأونر او لا لو كان ل الاونر سوي true
  run: async (client, message, args, config) => {

    
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: false
                }).then(() => {
                        message.reply({ content: `**:lock:  ${message.channel} has been looked.** `, ephemeral: true }).catch((err) => {
                                
                          console.log(`i couldn't reply to the message: ` + err.message)

           })
                })

  }} 