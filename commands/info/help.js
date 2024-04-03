const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
  name: "help",
  aliases: [""],
  description: "help bot",
  usage: ["!help"],
  category: "info",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {
    const db2 = require("pro.db")
    const db3 =  db2.get("prefix")
    const prefix = `${config.prefix}` && db3

    let button = new Discord.MessageActionRow()
    let Helefl = new Discord.MessageEmbed()
        .setColor('AQUA')
        .setTitle(`it's order me.`)
        .setDescription(`> **admin :**\`\n \`${prefix}ban\` - حظر العضو من السيرفر. \n \`${prefix}unban\` - فك حظر العضو من السيرفر. \n \`${prefix}unban-all\` -  فك حظر جميع الاعضاء من السيرفر. \n \`${prefix}kick\` - لطرد العضو من السيرفر. \n \`${prefix}gstart <time> <winners> <prize>\` - لبدء جيفاواي. \n \`${prefix}lock\` - لاغلاق الشات. \n \`${prefix}unlock\` - لفتح الشات. \n \`${prefix}role\` - لاعطاء عضو رتبه او ازالتها. \n \`${prefix}clear\` - لمسح رسائل الشات. \n \`${prefix}listbans\` - لاظهار جميع الاعضاء المحظورين. \n \`${prefix}hide\` - لاخفاء الشات. \n \`${prefix}show\` - لاظهار الشات. \n \`${prefix}mute\` - لاسكات العضو في الشات. \n \`${prefix}unmute\` -  لفك اسكات العضو في الشات. \n \`${prefix}timeout\` - لاعطاء تايم اوت للعضو. \n \`${prefix}hide-all\` - لاخفاء جميع الرومات. \n \`${prefix}vkick\` -  طرد عضو من الروم الصوتي. \n \`${prefix}role-all\` -  اعطاء رول للجميع. \n \`${prefix}setnick\` -  لتغيير اسم احد فالسيرفر. \n \`${prefix}move\` -  لسحب الاعضاء الى الروم. \n \`${prefix}show-all\` لاظهار جميع الرومات. \n \`${prefix}rooms\` - لاظهار الاعضاء يلي برومات صوتيه. \n \`${prefix}vmute\` - لاعطاء ميوت صوتي.\n \`${prefix}Upgrade\` -لترقية عضو.\n \`${prefix}warn\` -لأعطاء وارن لعضو. \n \`${prefix}vunmute\` - لفك الميوت الصوتي. \n\n > **general :**\n \`${prefix}avatar\` - لاظهار افتار العضو. \n \`${prefix}avatar server\` - لاظهار افتار السيرفر. \n \`${prefix}info\` - لروية جميع الرولات مع معلوماتها. \n \`${prefix}banner\` - لاظهار بنر العضو. \n \`${prefix}roles\` - لاظهار جميع رولات السيرفر. \n \`${prefix}server\` - لاظهار معلومات السيرفر. \n \`${prefix}user\` - لاظهار معلومات المستخدم. \n \`${prefix}color\` - لاختيار لون. \n \`${prefix}colors\` - لاظهار قائمة الالوان. \n \`${prefix}invites\` - لاظهار عدد الدعوات. \n \`${prefix}top-invites\` - لاظهار قائمة عدد الدعوات. \n \`${prefix}link\` - لارسال رابط السيرفر. \n\n > **owner :** \n \`${prefix}setavatar\` - لتغيير صورة البوت. \n \`${prefix}setprefix\` - لتغيير بريفكس البوت. \n \`${prefix}poll <the poll>\` - لبدء تصويت او اقتراح \n \`${prefix}setname\` - لتغيير اسم البوت. \n \`${prefix}setgame\` - لتغيير حالة البوت. \n \`${prefix}embed\` - لارسال رسالة على شكل امبد.\n \`${prefix}come\` -لارسال لشخص خاص \n \`${prefix}say\` - لأرسل رسالة لروم معينه. \n\n > **music :** \n \`${prefix}nowPlaying\` - لتشغيل محتوي وتخطي المحتوي الجاري. \n \`${prefix}pause\` - لايقاف المحتوي بشكل موقت. \n \`${prefix}play\` - لتشغيل محتوي شرط تكون داخل روم صوتي. \n \`${prefix}queue\` - لاستخراج رابط المحتوي. \n \`${prefix}repeat\` - لجعل البوت يعيد تشغيل المحتوي مجددا بشكل تلقائي.\n \`${prefix}resume\` - لالغاب الايقاف الموقت \n \`${prefix}skip\` - في حالة انك مشغل محتويين وعاوز الاول يخلص والتاني يجي \n \`${prefix}stop\` - لايقاف المحتوي نهائيا.\n \`${prefix}volume\` - لتحديد مستوي الصوت اقصي حد 150. \n\n > **coins:** \n \`${prefix}coins\` - لفحص كم عدد العمل التي تمتلكها انت او اي يوزر اخر. \n \`${prefix}daily\` - لاستلام عدد عشوائي من العمل يوميا. \n \`${prefix}tr <user> <number> \` - لتحويل من هذه العملة الي شخص`);

    return message.author.send({embeds:[Helefl]}).then(() => {
      message.react("✅").catch(err => {
        message.react('❌')
      });
    }).catch(() => {
      message.channel.send("لا يمكنني إرسال الرسالة إلى الخاص الخاص بك. تحقق من إعدادات الخصوصية الخاصة بك.");
    });
  }
}
