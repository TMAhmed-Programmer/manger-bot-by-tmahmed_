
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('VER BOT'
           )
})


  
 






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




// ========================================================== \\

client.login("MTIyMTYwMzcwMDQ2MDYxNzgxOQ.G6MOeb.AnY9QsxIBxf-c8w-7wLf3g1Fn81aAdVx87ti4Q")