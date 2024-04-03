const config = require("../config.js")
const djs = require("discord.js") , cooldowns = new djs.Collection();

module.exports.run = async (client, message) => {






const db = require("pro.db"); 
	const d3 = await db.get("prefix")
// console.log(d3)

  if (message.author.bot) return;
  if (!message.guild) return;
   if (!message.member.permissions.has(djs.Permissions.FLAGS.ADMINISTRATOR)){
     
  

    message.content.split (' ').forEach (m => {
    });
  }
 /** var prefixGet1 = await prefixGet.findOne({GuildID:message.guild.id});
    if(!prefixGet1) {
        prefixGet1 = new prefixGet({
            GuildID:message.guild.id,
            prefix:"#"
        })
       }
    await prefixGet1.save().catch(err => {console.log(err)}); 
    if(!message.content.startsWith(prefixGet1.prefix)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message); */

// var prefixGet1 = await prefixGet.findOne({GuildID:message.guild.id});
//     if(!prefixGet1) {
//         prefixGet1 = new prefixGet({
//             GuildID:message.guild.id,
//             prefix:"!"
//         })
//        }
      
//     await prefixGet1.save().catch(err => {console.log(err)}); 
  var prefixGet1 = `${config.prefix}` && d3
    const prefixMention = new RegExp(`^<@!?${message.client.user.id}>`);

    if (message.content.match(prefixMention)) {
      return message.reply(`برفكس خاص بي \`${prefixGet1}\``);
    }
    if(!message.content.startsWith(prefixGet1)) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefixGet1.length).trim().split(/ +/g);
  const cmd = args.shift ().toLowerCase ();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd) ||  client.commands.find(command => command.aliases && command.aliases.includes(cmd));
  if (!command) command = client.commands.get (client.aliases.get (cmd));

  if (!command) return;
  if (command.botPermission) {
    let neededPerms = [];
/*
  if (command?.memberPermissions && !message.member.permissions.has(command?.memberPermissions)) return message.channel.send({ content: `I need **\`${command.memberPermissions}\`** to use this command!` });

*/
    command.botPermission.forEach (p => {
      
      if (!message.guild.me.permissions.has(p)) neededPerms.push ('`' + p + '`');
    });

    if (neededPerms.length) return message.channel.send(`> **$**`)
  }
  if(command.authorPermission) {
    let neededPerms = [];

    command.authorPermission.forEach (p => {
      if(!message.member.permissions.has(p)) neededPerms.push (`${p}`);
    //  if (!message.member.hasPermission (p)) neededPerms.push (`${p}`);
    })

    if (neededPerms.length) return message.channel.send(`> **- You don't have Premission - [${neededPerms}]**`)
  }
  if (command.ownerOnly) {
    if (!config.owners.includes (message.author.id))
      return message.channel.send(`هذا امر الاونر فقط`);
  }
if(command.dmOnly) {
if(!message.channel.type === "dm") return ;

}

  if (!cooldowns.has(command.cooldowns)) cooldowns.set(command.cooldowns, new djs.Collection());
  
  const member = message.member,
        now = Date.now(),
        timestamps = cooldowns.get(command.cooldowns),
        cooldownAmount = (command.cooldowns || 3) * 1000;
  //var own = ["501614676891795458",""]
  if (!timestamps.has(member.id)) {
    if (!config.owners.includes(message.author.id)) {
      timestamps.set(member.id, now);
    }
  } else {
    const expirationTime = timestamps.get(member.id) + cooldownAmount;
    
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(`>  **Please Wite CoolDown :(${timeLeft.toFixed(0)}Seconds)**!`);
    }
    
    timestamps.set(member.id, now);
    setTimeout(() => timestamps.delete(member.id), cooldownAmount);
  }

                            
    if (command) command.run (client, message, args , config );




    


  
};
