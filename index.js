//by hira studio
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('VER BOT'
           )
})


  
 
//by hira studio

//by hira studio
//by hira studio
//by hira studio
//by hira studio





const Discord = require("discord.js");
const { Client, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, GatewayIntentBits, Partial } = require("discord.js");
const db2 = require("pro.db")
const config = require("./config.js");
const { prefix } = require("./database.json");
const client = new Discord.Client({
  intents: new Discord.Intents(32767),
  restTimeOffset: 0,
  allowedMentions: { parse: ["everyone", "roles", "users"], repliedUser: false }, partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});
module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
const db = require("quick.db");
const ms = require("ms");


 






client.on('ready', async () => {
  const db3 = await db2.get("prefix")
  const dba = `${config.prefix}` && db3
  console.log(`${client.user.tag} `)
  client.user.setStatus("dnd")
  client.user.setActivity(`${dba}help`, { type: 'PLAYING', })  



	
 
////////////////////////////////


   //by hira studio
//by hira studio
//by hira studio




})
// perry / sys

const linewelcome = 'https://media.discordapp.net/attachments/1221200437957624019/1221419938351419472/20240324_112545.png?ex=661282f6&is=66000df6&hm=e8f015b170a989c5c46290aeb839f6ef665911f33dbf97c016e9d888fcb10a9e&=&format=webp&quality=lossless&width=1224&height=161'; // استبدله برابط صورة الترحيب الخاصة بك
const welcomeChannelId = '1220009948327448586'; // استبدله بمعرف قناة الترحيب في السيرفر

client.on('guildMemberAdd', async (member) => {
  const welcomefukenembed = new MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL({ dynamic: true }))
    .setFooter(member.user.username, member.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(`**
> Hello ${member.user.username} 👋

> Welcome To __${member.guild.name}__ 🫶

> Member Id  \`${member.id}\` 🆔

> Dont Forget Read Roles <#1220002713807355904> 🛑

> Enjoy in server 🔅

> You Are Member Number \`${member.guild.memberCount}\` 
**`) 
    .setImage(linewelcome)
    .setColor("BLACK");

  const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);
  if (welcomeChannel) {
    welcomeChannel.send({ content: `<@!${member.user.id}>`, embeds: [welcomefukenembed] });
  }

  member.send(`**
> Welcome To ${member.guild.name}

> \`#\` 🛒  مرحبا بك ، نورت هيرا ستوديو   

> \`#\`تعريف بسيط : هيرا ستوديو سيرفر مصري يوفر جميع الخدمات ، حيث يتكون من طاقم عمل ممتاز ، ويعمل علي تطوير خدماته دائما بشكل يليق بكم ، .ويوفر جميع الخدمات البرمجية 


# نتمي لك السعاده معنا
**`)
});

//welcome

const ignoredServers = ['1194242291829850212', '912075100067618878', '']; // قم بتعيين معرفات السيرفرات التي تريد تجاهلها

client.on('messageCreate', message => {
    // تحقق مما إذا كانت الرسالة من قناة نصية وليست من رسالة نظام أو من بوت وأن السيرفر غير مُتجاهل
    if (message.channel.type === 'GUILD_TEXT' && !message.author.bot && !ignoredServers.includes(message.guild.id)) {
        // تحديد النص في الرسالة والتحقق مما إذا كان يحتوي على روابط
        if (containsLink(message.content)) {
            // حظر إرسال الرابط وإرسال رسالة تنبيه
            message.delete();
            message.reply('يرجى عدم إرسال الروابط في هذا السيرفر.');
        }
    }
});

// دالة للتحقق مما إذا كانت الرسالة تحتوي على رابط
function containsLink(text) {
    const linkRegex = /(http[s]?:\/\/[^\s]+)/gi; // تحديد روابط باستخدام regex
    return linkRegex.test(text);
}

//anti links
const serverRoleIds = {
    "1207755498628059216": "1223545672796737658",
    "1220535107908145192": "1220778322330390630",
    // يمكنك إضافة المزيد من الأيديات حسب الحاجة
};

client.on('guildMemberAdd', async member => {
    // التحقق مما إذا كان السيرفر مدرجًا في القاموس الخاص بك
    if (serverRoleIds[member.guild.id]) {
        // احصل على الرتبة المراد إعطاؤها للعضو
        const roleId = serverRoleIds[member.guild.id];
        const role = member.guild.roles.cache.get(roleId);
        // التحقق من وجود الرتبة
        if (role) {
            // إعطاء العضو الرتبة
            await member.roles.add(role);
            console.log(`Gave ${member.user.tag} the role ${role.name} in ${member.guild.name}`);
        } else {
            console.log(`Role with id ${roleId} not found in ${member.guild.name}`);
        }
    }
});

//auto role

const fs = require('fs');

const minCredit = 1000;
const maxCredit = 3000;
const dailyCooldownTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
let creditsPerDaily;
let userData = {}; // Object to store user data

// Load user data from credits.json
try {
    const data = fs.readFileSync('credits.json');
    userData = JSON.parse(data);
    console.log('User data loaded successfully.');
} catch (err) {
    console.error('Error loading user data:', err);
}

// Generate random daily credits on bot startup
initializeDailyCredits();

// Event listener for incoming messages
client.on('messageCreate', async message => {
    if (message.author.bot) return;

    // Check if the command is '#coins'
    if (message.content.toLowerCase().startsWith('#coins')) {
        let targetUser = message.author; // Default to the message author
        // Check if the message mentions a user
        if (message.mentions.users.size > 0) {
            targetUser = message.mentions.users.first(); // Update the target user if mentioned
        }
        // Fetch the balance of the target user
        const userDataEntry = userData[targetUser.id] || { balance: 0, lastDailyUsage: 0 };
        const balance = userDataEntry.balance || 0;
        // Reply with the balance of the target user
        message.reply(`:bank: | ${targetUser}, your account balance is ${balance}.`);
    }

    // Check if the command is '#daily'
    if (message.content.toLowerCase() === '#daily') {
        const userDataEntry = userData[message.author.id] || { balance: 0, lastDailyUsage: 0 };
        const lastUsage = userDataEntry.lastDailyUsage || 0;
        const currentTime = Date.now();
        if (currentTime - lastUsage < dailyCooldownTime) {
            const timeLeft = dailyCooldownTime - (currentTime - lastUsage);
            const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            message.reply(`**Wait ${hoursLeft} hours and ${minutesLeft} minutes to use it again**`);
        } else {
            userData[message.author.id] = { ...userDataEntry, lastDailyUsage: currentTime };
            const credits = userDataEntry.balance || 0;
            userData[message.author.id].balance = credits + creditsPerDaily;
            message.reply(`🏛 | You received ${creditsPerDaily}.`);
            saveUserData(); // Save user data after updating daily credits
        }
    }

    // Command to transfer currency
    if (message.content.startsWith('#tr')) {
        const args = message.content.split(' ');
        if (args.length !== 3) {
            return message.reply('Invalid usage! Please use: !transfer <@user> <amount>');
        }

        // Get mentioned user and amount
        const recipient = message.mentions.users.first();
        const amount = parseInt(args[2]);

        if (!recipient || isNaN(amount)) {
            return message.reply('Invalid usage! Please use: !transfer <@user> <amount>');
        }

        const senderId = message.author.id;
        const recipientId = recipient.id;

        // Check if sender has enough currency
        if (!userData[senderId] || userData[senderId].balance < amount) {
            return message.reply('You do not have enough currency to perform this transfer.');
        }

        // Transfer currency
        userData[senderId].balance -= amount;
        userData[recipientId] = (userData[recipientId] || { balance: 0 });
        userData[recipientId].balance += amount;

        // Save user data
        saveUserData(); // Save user data after transferring credits

        message.reply(`Successfully transferred ${amount} currency to ${recipient}`);
    }
});

// Function to initialize daily credits
function initializeDailyCredits() {
    creditsPerDaily = Math.floor(Math.random() * (maxCredit - minCredit + 1)) + minCredit;
}

// Function to save user data to credits.json
function saveUserData() {
    try {
        const data = JSON.stringify(userData);
        fs.writeFileSync('credits.json', data);
        console.log('User data saved successfully.'); // Add console log for success
    } catch (err) {
        console.error('Error saving user data:', err);
    }
}

//credits

process.on("unhandledRejection", error => {
  return console.log(error)
});

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Process Kill")
    process.kill(1);
  } else {
    console.log("You have logged in")
  }
}, 3*1000*60);



client.on('messageCreate', async (message) => {
if(message.author.bot) return;
const db3 = await db2.get("prefix")
const dba = `${config.prefix}` && db3
  if (message.content.toLowerCase().startsWith(dba + "ping")) {
        if (message.channel.type == "dm") return;
        var states = "🟢 Excellent";
        var states2 = "🟢 Excellent";

        var message = message;

        var msg = `${Date.now() - message.createdTimestamp}`;

        var api = `${Math.round(client.ws.ping)}`;

        if (Number(msg) > 70) states = "🟢 Good";

        if (Number(msg) > 170) states = "🟡 Not Bad";

        if (Number(msg) > 350) states = "🔴 Soo Bad";

        if (Number(api) > 70) states2 = "🟢 Good";

        if (Number(api) > 170) states2 = "🟡 Not Bad";

        if (Number(api) > 350) states2 = "🔴 Soo Bad";

        if (message.author.bot) return;
                
                const em = new MessageEmbed()
                        
                .setAuthor(message.author.username, message.author.avatarURL())

                .addField("**Time Taken:**", msg + " ms 📶 | " + states, true)

                .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)

                .setTimestamp()
                .setColor('#076293')

                .setFooter(`Request By ${message.author.tag}`);
                message.channel.send({embeds:[em]})
    }
});

 //by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio




// رد تلقائي
client.on('messageCreate',async message => {
        if (message.author.bot || message.channel.type === 'DM') return
        if(message.content.startsWith('السلام عليكم')) {
                message.reply('وعليكم السلام')
        }
})
client.on('messageCreate',async message => {
        if (message.author.bot || message.channel.type === 'DM') return
        if(message.content.startsWith('برب')) {
                message.reply('تيت')
        }
})
client.on('messageCreate',async message => {
        if (message.author.bot || message.channel.type === 'DM') return
        if(message.content.startsWith('سلام')) {
                message.reply('مع السلامه')
        }
})
client.on('messageCreate',async message => {
        if (message.author.bot || message.channel.type === 'DM') return
        if(message.content.startsWith('باك')) {
                message.reply('ولكم')
        }
})
client.on('messageCreate',async message => {
        if (message.author.bot || message.channel.type === 'DM') return
        if(message.content.startsWith('منور')) {
                message.reply('بنورك')
        }
})
client.on('messageCreate',async message => {
        if (message.author.bot || message.channel.type === 'DM') return
        if(message.content.startsWith('**قام بتحويل**')) {
                message.reply('https://media.discordapp.net/attachments/1221200437957624019/1221419938351419472/20240324_112545.png?ex=661282f6&is=66000df6&hm=e8f015b170a989c5c46290aeb839f6ef665911f33dbf97c016e9d888fcb10a9e&=&format=webp&quality=lossless&width=1224&height=161')
        }
})


// خط تلقائي فروم محدد
let autoline_channel = ['1220020748194680932',""] // ايدي الروم
let  = `https://media.discordapp.net/attachments/1221200437957624019/1221419938351419472/20240324_112545.png?ex=661282f6&is=66000df6&hm=e8f015b170a989c5c46290aeb839f6ef665911f33dbf97c016e9d888fcb10a9e&=&format=webp&quality=lossless&width=1224&height=161`

client.on(`messageCreate`, async message => {
        if(message.channel.type === "DM"|| message.author.bot) return
        if(autoline_channel.includes(message.channel.id)) {
                message.channel.send({files : [line]})
        }
})



// رياكشن تلقائي
let autoreact_channel = ['1220020748194680932'] // ايدي الروم
client.on('messageCreate', async message => {
        if(message.channel.type === 'DM' || message.author.bot) return
        if(autoreact_channel.includes(message.channel.id)) {
   message.react('🌹')
   message.react('❤️')
        }
})


// كود اقتراحات
let sug = ["1220020515935092827","",""]; // حط اي دي روم الاقتراحات
let line = "https://media.discordapp.net/attachments/1221200437957624019/1221419938351419472/20240324_112545.png?ex=661282f6&is=66000df6&hm=e8f015b170a989c5c46290aeb839f6ef665911f33dbf97c016e9d888fcb10a9e&=&format=webp&quality=lossless&width=1224&height=161"; // حط رابط الخط
client.on("messageCreate", function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()
.setAuthor({name: message.author.tag,iconURL: 
 message.author.avatarURL({dynamic:true})})
.setColor(`BLUE`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}//////////////////////////////// SAFAA /////////////////////////////////////////////

message.channel.send({ embeds: [embed] }).then(msg => {
 msg.react(`\<a:emoji_166:1129432252858781706> `).then(() => {
 msg.react('\<a:vote_no:1143935085867978782>')
})
message.channel.send({files: [line]});
})
.catch(console.error) 
  }
});  
 client.on('message', message => {
  if (message.content === 'خط') { 
    if(!message.member.permissions.has("ADMINISTRATOR"))return
    message.delete();
     message.channel.send('https://media.discordapp.net/attachments/1221200437957624019/1221419938351419472/20240324_112545.png?ex=661282f6&is=66000df6&hm=e8f015b170a989c5c46290aeb839f6ef665911f33dbf97c016e9d888fcb10a9e&=&format=webp&quality=lossless&width=1224&height=161'); 
    
  }
});

/////warn






client.on('messageCreate', async (message) => {
  if (!message.guild || message.author.bot) return;

  const { content, member, guild } = message;
  const isOwner = member.id === guild.ownerId;
  const isAdmin = member.permissions.has('MUTE_MEMBERS');

  const [command, ...args] = content.trim().split(/\s+/);

  if (command.toLowerCase() === prefix + 'warn' && (isOwner || isAdmin)) {
    const mention = message.mentions.users.first();
    if (!mention) {
      return message.reply(':rolling_eyes: **Please mention member or id**');
    }

    try {
      const user = await client.users.fetch(mention.id);
      const reason = args.slice(1).join(" ");

      const warnEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('لقد اخذت تحذير')
        .setDescription(` 
        ${reason}`)
        .setTimestamp()
        .setFooter('⚠️');
        

      await user.send({ embeds: [warnEmbed] });

      const successEmbed = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setDescription(`تم إرسال تحذير لـ ${user}`);

      message.channel.send({ embeds: [successEmbed] });
    } catch (error) {
      console.error('حدث خطأ أثناء إرسال التحذير:', error);

      const errorEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setDescription('حدث خطأ أثناء محاولة إرسال التحذير!');

      message.channel.send({ embeds: [errorEmbed] });
    }
  }
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith(prefix + "come")) {
    if (message.author.bot) return;
    if (!message.member.roles.cache.has("1125519983414362203"))
      if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let user = message.mentions.members.first();
    if (!user) return message.reply(`**Usage: \`${prefix}come\` @user**`);
    user.send(`
    **Hey** ${user} 👋
    
    > **Someone need you** 🗣️
    
    > **in** <#${message.channel.id}> 
    `);
    const embed = new MessageEmbed()
      .setTitle("Hira Studio")
      .setColor("#1827ee")
      .setDescription(`**✅ Done Send Private To ${user} ** \n\n **please wait him to come**`);
    message.channel.send({ embeds: [embed] });
  }
});


// ========================== Const ======================== \\

const TaxChannel = "1221810950596857926" // ايدي الات شانل الاوتو تاكس

// ==================== Auto Tax ====================== \\

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(TaxChannel.includes(message.channel.id)){

  var args = message.content.split(' ').slice(0).join(' ')
if(!args) return;
  
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
     let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
      
    let Taxembed = new MessageEmbed()
      
.setAuthor(`TAX CALCULATOR`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   
      
.addFields([
    {
    name: `الضريبه: `,
    value: `${tax}`
},
  {
    name: `ضريبة الوسيط: `, 
    value: `${tax4}`
},
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
message.reply({embeds: [Taxembed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 

// ================= Cmd Tax ================ \\

client.on("messageCreate", async message => {
    if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); 
    if(!args) return message.reply("**:rolling_eyes: Please enter a number**").catch((err) => {
   console.log(err.message)
   });
    
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
     let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    
    let embed = new MessageEmbed()
      
.setAuthor(`TAX CALCULATOR`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   
      
.addFields([
    {
    name: `الضريبه : `,
    value: `${tax}`
},
   {
    name: `ضريبة الوسيط : `, 
    value: `${tax4}`
  }
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
    
   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 


const timeMs = require('ms');

client.on('messageCreate', async message => {
    if (message.content.startsWith('#gstart')) {
        // Check if the member has the ADMINISTRATOR permission
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.reply('You do not have permission to use this command.');
        }

        // Delete the message that triggered the command
        message.delete();

        const args = message.content.split(' ');
        if (args.length < 5) {
            return message.reply('Usage: #gstart <time> <winnersCount> <prize>');
        }
        const time = args[1];
        const winnersCount = parseInt(args[2]);
        const prize = args.slice(3).join(' ');

        const embed = new MessageEmbed()
            .setColor('#00C7FF')
            .setTitle('🎉 New Giveaway! 🎉')
            .setDescription(`React with 🎉 to enter the giveaway!\n**Prize:** ${prize}\n**Winners:** ${winnersCount}\n**Ends In:** ${time}`)
            .setTimestamp();

        const sentMessage = await message.channel.send({ embeds: [embed] });
        await sentMessage.react('🎉');

        const filter = (reaction, user) => reaction.emoji.name === '🎉';
        const collector = sentMessage.createReactionCollector({ filter, time: parseInt(timeMs(time)) });

        collector.on('end', async collected => {
            if (!collected) {
                return message.channel.send('No participants in the giveaway. Winners were not chosen.');
            }

            const participants = collected.get('🎉')?.users.cache.filter(user => !user.bot).map(user => user.id) || [];
            if (participants.length === 0) {
                return message.channel.send('No participants in the giveaway. Winners were not chosen.');
            }

            // Rest of the code to choose winners and send messages to them
            const winners = [];
            for (let i = 0; i < winnersCount; i++) {
                const randomIndex = Math.floor(Math.random() * participants.length);
                winners.push(participants[randomIndex]);
                participants.splice(randomIndex, 1);
            }

            if (winners.length === 0) {
                message.channel.send('No winners were chosen for the giveaway.');
            } else {
                winners.forEach(async winner => {
                    try {
                        const user = await message.guild.members.fetch(winner);
                        const channel = sentMessage.channel;
                        channel.send(`<@${winner}>, Congratulations! You won ${prize} in the giveaway!`);
                    } catch (error) {
                        console.error(`Failed to send message to winner ${winner}:`, error);
                    }
                });
            }
        });

        // Add timeout to announce no winners if time is up
        setTimeout(() => {
            if (!collector.ended) {
                collector.stop();
                message.channel.send('Giveaway time is up. No winners were chosen.');
            }
        }, timeMs(time));
    }
});

//sugg pre

//تعامل مع  رسائل
const channelIds = ['1223738263039250533', '1222553840927379587'];

client.on('messageCreate', async message => {
  if (channelIds.includes(message.channelId) && message.content.toLowerCase() === 'off') {
    const embed = new MessageEmbed()
      .setTitle('<a:ArabTeam_No:1224096601514049598> **The Bot Is Offline**')
      .setDescription('تم ايقاف البوت موقتا لاضافة تحديثات.')
      .setColor('#FF0000');

    const sentMessage = await message.channel.send({ embeds: [embed] });
  }
});


client.on('messageCreate', async message => {
  if (channelIds.includes(message.channelId) && message.content.toLowerCase() === 'on') {
    const embed = new MessageEmbed()
      .setTitle('<a:ArabTeam_Yes:1224096599903436952> **The Bot Is Online**')
      .setDescription('البوت جاهز للعمل.')
      .setColor('#2aff00');

    const sentMessage = await message.channel.send({ embeds: [embed] });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const characters = [
    { name: 'ايانوكوجي', image: 'https://media.discordapp.net/attachments/1183299827996557363/1224261615248085013/Classroom_Of_The_Elite_-_Icon_.jpg?ex=661cd97a&is=660a647a&hm=956b75028bad96e6dc9279167017ae88cdfb88b93db2efb2358840118390f7b0&=&format=webp&width=608&height=608' },
    { name: 'غوجو ساتورو', image: 'https://media.discordapp.net/attachments/1183299827996557363/1224261613339545650/293c9db14a39ea99.jpg?ex=661cd97a&is=660a647a&hm=4236e1f9f0b6ef9b9d2b4d844dfb5d0fdc6511e992fb34d799a8a3bcb5dfda28&=&format=webp' },
    { name: 'كورابيكا', image: 'https://media.discordapp.net/attachments/1183299827996557363/1224261614400835584/bdcde00832c2d963.jpg?ex=661cd97a&is=660a647a&hm=fef1778d47e32013f41a42c0dcf2a2fb43f6c13cf3338b341caaa8f15f5507a9&=&format=webp' },
    { name: 'سون غوكو', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224723098247630980/1712067018684.jpg?ex=661e8744&is=660c1244&hm=c2d9b72064104ba513c4de282f7e4df1b3d95be2ac907c3ca6243544a3ce2cdc&=&format=webp' },
    { name: 'فريزا', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224723189574139994/1712067062732.jpg?ex=661e875a&is=660c125a&hm=cc0eb2ecd2e17d05ebb9da2026b3ff02399fb476921af7b1e3eb5681ede90146&=&format=webp' },
    { name: 'فيجيتا', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224723257274531931/1712067071943.jpg?ex=661e876a&is=660c126a&hm=358a239ccd8c89020d3a87a51fef0ac58230102b483eb485d63e804399e9757f&=&format=webp' },
    { name: 'اغريس', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224723545096060948/1712067204965.jpg?ex=661e87af&is=660c12af&hm=294b69540d640a29293b4cfe490fd9df35682dbe2d3761284ab41bad1131d422&=&format=webp&width=504&height=608' }, 
    { name: 'سونغ جين', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224723753087402004/1712067258613.png?ex=661e87e1&is=660c12e1&hm=eb94e1c2e8e4bb80ce8c44d159df0f0f765d280d188791a058ba85bb1fdba35b&=&format=webp&quality=lossless&width=391&height=608' },
    { name: 'لوفي', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224723887972024485/1712067311689.jpg?ex=661e8801&is=660c1301&hm=f6ffabdc98cd5834019dcd561ff4198a23a09e48aa9d2b3ca84c62ce3a106353&=&format=webp' },
    { name: 'زورو', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224724275206819870/1712067343104.jpg?ex=661e885d&is=660c135d&hm=f8855c17e329db7b008dafd59e628f7673aeaba4d64cfbc8d9b7a7fd493a0d39&=&format=webp&width=350&height=350' },
    { name: 'شانكس', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224724339941703781/1712067359101.jpg?ex=661e886c&is=660c136c&hm=2faa8526eb8414a0f2a067561ec4eb6ccdd423df68b6d7bda1df17f26337134b&=&format=webp' },
    { name: 'الحية البيضاء', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224724405318451231/1712067353415.jpg?ex=661e887c&is=660c137c&hm=6b89c9168414e9dbe098a8cbe8285b87e97e06ae301e48ce32e2f39092c21178&=&format=webp' },
    { name: 'روجر', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224724466987307170/1712067364902.jpg?ex=661e888b&is=660c138b&hm=d03bcfa5f78532f489fb95797df5e0bed65a45272d5abbceadc44e75e9e89dba&=&format=webp' },
    { name: 'لاو', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224724740111863818/1712067372239.jpg?ex=661e88cc&is=660c13cc&hm=a7a1247ca7658e6a6115066fc602b28b897a43ad8d0fd633e19f02ee4245a59f&=&format=webp&width=608&height=608' },
    { name: 'كيلوا', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224818973367865384/Killua.jpg?ex=661ee08f&is=660c6b8f&hm=e23f651f36b7bd474df6a2e2e5acca1b7917573a691fe6b9c3a213a86ae8b356&=&format=webp&width=608&height=608' },
    { name: 'سوكونا', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224819025377235045/1ec10cc0-271f-4ad0-a9ca-a53bc4b0537d.jpg?ex=661ee09b&is=660c6b9b&hm=dba91d2a5deb67e431e069028b76795ad88e0dea2fd64858c9d556c8615fe0d8&=&format=webp&width=351&height=350' },
    { name: 'ايرين', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224818973128917002/-_.jpg?ex=661ee08f&is=660c6b8f&hm=d130971f48e15a2ee101596fffad6fc1ce73334f37934a05878158326916f0df&=&format=webp&width=608&height=608' },
       { name: 'داكي', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224873744493969428/1712103038297.jpg?ex=661f1391&is=660c9e91&hm=62d0e489322dc620aafe44f92bc69d8912ebbb141d056d39b140202f3344eb8d&=&format=webp' },
     { name: 'أوباياشيكي كاجايا', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224873390670872668/1712102661049.jpg?ex=661f133d&is=660c9e3d&hm=618512d700d94cc32be56da166f6459313e41e246148d352d1d12c9d986082c2&=&format=webp' }, 
     { name: 'كيرا', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224873063603245226/1712102440531.jpg?ex=661f12ef&is=660c9def&hm=f987658881fe17ea791f6a183f27d0e16a76b6cb80eebf20819fa954c3e3b3e6&=&format=webp&width=391&height=608' },
     { name: 'كانجي', image: 'https://media.discordapp.net/attachments/1224406657287852186/1224873000172523561/1712102564191.jpg?ex=661f12e0&is=660c9de0&hm=eeeb14ec59a08a88a260dae60d9aa7d9a30e71500f34d4806be4b376bab06bc7&=&format=webp' },
     { name: 'ناجي', image: 'https://media.discordapp.net/attachments/1224406657287852186/1225018273670758430/Nagi.jpg?ex=661f9a2c&is=660d252c&hm=9575db835c57b4aa3f91ebede4f12c67c078c08e49720f6561b2e6a86c5dfa67&=&format=webp&width=608&height=608' },
     { name: 'رايزل', image: 'https://media.discordapp.net/attachments/1224406657287852186/1225018546099195934/4e950c27e3d4e5f8.jpg?ex=661f9a6d&is=660d256d&hm=5b581d234166873e8eef150a4d5d9175b70ac2bfe4e5070263eb88e3fba32cc7&=&format=webp&width=608&height=608' },
     { name: 'فيوليت', image: 'https://media.discordapp.net/attachments/1224406657287852186/1225018852740567110/1.jpg?ex=661f9ab6&is=660d25b6&hm=247f46858fce7dd7ae5630ca7e1e230f03c4fc13db0f51f8b771e4690ff3a25a&=&format=webp&width=664&height=608' },
    // Add more characters with their images here
];


let lastCharacter = null; // Variable to store the last character used

client.on('messageCreate', async message => {
    if (message.content === '#anime-guess') {
        let character = characters[Math.floor(Math.random() * characters.length)];

        // Ensure the current character is not the same as the last character used
        while (character === lastCharacter) {
            character = characters[Math.floor(Math.random() * characters.length)];
        }

        // Update the last character variable with the current character
        lastCharacter = character;

        const embed = new MessageEmbed()
            .setTitle('Guess the Character')
            .setDescription(`Guess the name of this character within 10 seconds.`)
            .setImage(character.image)
            .setColor('#0099ff');

        const sentMessage = await message.channel.send({ embeds: [embed] });

        const filter = m => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector({ filter, time: 10000 });

        collector.on('collect', m => {
            collector.stop(); // Stop the collector immediately after collecting a message
            if (m.content.toLowerCase() === character.name.toLowerCase()) {
                sentMessage.edit(`Congratulations ${m.author}! You guessed the character correctly. It's ${character.name}.`);

                const winnerEmbed = new MessageEmbed()
                    .setTitle('Congratulations!')
                    .setDescription(`Congratulations ${m.author}! You guessed the character correctly.`)
                    .addField('Winner', m.author.username)
                    .addField('Correct Answer', character.name)
                    .setColor('#00ff00');
                message.channel.send({ embeds: [winnerEmbed] });
            } else {
                sentMessage.edit(`Hard luck! You didn't guess the character correctly. The correct answer is ${character.name}.`);
            }
        });

        collector.on('end', () => {
            if (!sentMessage.deleted) { // Check if the message is not deleted
                if (!sentMessage.embeds[0].description.includes('You guessed')) {
                    sentMessage.edit(`Time's up! You didn't guess the character. The correct answer is ${character.name}.`);
                }
            }
        });
    }
});

//fakk
const words = [
    'apple', 'banana', 'orange', 'grape', 'kiwi', 'hira', 'sad', 'happy', 'forget', 'games',
    'anime', 'egypt', 'iraq', 'arabic', 'english', 'youtube', 'بؤبؤ', 'حواذث', 'kaniki', 'law',
    'GiRle', 'bOy', 'sukona', 'baka', 'akira', 'henokamy', 'kagora', 'kaigaku', 'كايجاكو',
    'هينوكامي', 'كاغورا', 'image', 'cat', 'dog', 'house', 'computer', 'phone', 'table', 'chair',
    'book', 'paper', 'pencil', 'flower', 'car', 'tree', 'mountain', 'beach', 'music', 'movie',
    'friend', 'family', 'school', 'teacher', 'student', 'glass', 'water', 'fire', 'earth', 'air',
    'sun', 'moon', 'star', 'planet', 'universe', 'galaxy', 'lion', 'tiger', 'elephant', 'zebra',
    'giraffe', 'rhinoceros', 'hippopotamus', 'crocodile', 'snake', 'eagle', 'hawk', 'owl', 'sparrow',
    'penguin', 'koala', 'kangaroo', 'camel', 'rabbit', 'fox', 'wolf', 'bear', 'deer', 'squirrel',
    'whale', 'dolphin', 'shark', 'octopus', 'jellyfish', 'seahorse', 'turtle', 'frog', 'toad', 'lizard',
    'flowerpot', 'guitar', 'violin', 'drum', 'keyboard', 'microphone', 'camera', 'television', 'radio',
    'newspaper', 'magazine', 'poster', 'painting', 'sculpture', 'statue', 'bridge', 'building', 'road',
    'traffic', 'airport', 'train', 'bus', 'subway', 'ship', 'boat', 'helicopter', 'airplane', 'rocket'];

let lastWord = ''; // تخزين آخر كلمة تم استخدامها

// ترتيب الحروف بشكل عشوائي
function scrambleWord(word) {
    const characters = word.split('');
    const scrambledCharacters = [];

    // توليد ترتيب عشوائي للحروف
    while (characters.length > 0) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomCharacter = characters[randomIndex];
        scrambledCharacters.push(randomCharacter);
        characters.splice(randomIndex, 1);
    }
    
    return scrambledCharacters.join('');
}


client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === '#word-guess') {
        let word = getRandomWord();
        
        // التأكد من أن الكلمة الجديدة مختلفة عن الكلمة السابقة
        while (word === lastWord) {
            word = getRandomWord();
        }
        
        const scrambledWord = scrambleWord(word);
        message.reply(`Guess the word of this letters within 10 seconds : **${scrambledWord}**`);
        
        const filter = response => response.author.id === message.author.id && typeof response.content === 'string' && response.content.trim() !== '';
        const collector = message.channel.createMessageCollector({ filter, max: 1, time: 15000 }); // جمع الإجابات لمدة 15 ثانية
        
        collector.on('collect', response => {
            if (response.content.toLowerCase().trim() === word) {
                message.reply(`Congratulations ${message.author.username}! You guessed the word correctly.`);
            } else {
                message.reply(`Hard luck ${message.author.username}! You didn't guess the word correctly. The correct answer is **${word}**.`);
            }
        });
        
        collector.on('end', collected => {
            if (collected.size === 0) {
                message.reply(`Time's up ${message.author.username}! You didn't guess the word. The correct answer is **${word}**.`);
            }
        });
        
        lastWord = word; // تحديث آخر كلمة تم استخدامها
    }
});

// توليد كلمة عشوائية من القائمة
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}


//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio
//by hira studio


// ========================================================== \\

client.login("your bot token")
