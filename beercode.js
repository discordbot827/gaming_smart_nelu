const discord = require("discord.js");
const fs = require("fs");
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
const http = require("http");
const db = require("quick.db");
const moment = require("moment");
const express = require("express");
const ayarlar = require("./ayarlar.json");
const Discord = require("discord.js");
const client = new Discord.Client();
client.login("OTUyNzM1MzIyNjkxNzM1NTYy.Yi6V6Q.YqydSOOPyhAUMDhyu6IMct5zPiw");
global.mongoose = require('mongoose')
mongoose.connect("mongodb+srv://BLACKGENARAL:kalare00000$#@@cluster0.rzsmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("✅ Connected to the database.");
}).catch((err) => {
  console.log("❎ Unable to connect to the Mongodb database. Error:" + err);
});

//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

//===============================================================================\\
client.on("ready", async () => {
  client.user.setActivity(`Shelp`, {
    type: "PLAYING"
  });
});
//===============================================================================\\
client.on("message", emprator => {
  if (emprator.content === "Sinvite") {
    emprator.channel.send("https://discord.com/api/oauth2/authorize?client_id=952735322691735562&permissions=8&scope=bot");
  }
});
//===============================================================================\\
client.on("message", emprator => {
  if (emprator.content === "#support") {
    emprator.channel.send("https://discord.gg/dWnGgVbRWW");
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.guild) return;
  if (message.author.bot) return;
  var channel = client.channels.cache.get("887015240561205268");
  if (!channel) return;
  var embed = new Discord.MessageEmbed()
    .setColor("36d8ff")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .addField(
      `✅ **New Suggestion**`,
      `\`\`\`
  ${message.content}\`\`\``
    )
    .setFooter(`${message.author.username}`)
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp();
  channel.send(embed).then(c => {
    c.react("").then(() => c.react(""));
  });
});
//===============================================================================\\
client.on("guildCreate", guild => {
  client.channels.cache.get("947612319872090123").send(`
✅ **Join Server**: ${client.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`);
});
////////////////////////////////////////////
client.on("guildDelete", guild => {
  client.channels.cache.get("917176909958381599").send(`
❎ **Lift Server**: ${client.guilds.cache.size}
🔠 **Server Name**: ${guild.name}
👑 **Server Owner**: ${guild.owner}
🆔 **Server Id**: ${guild.id}
👥 **Member Count**: ${guild.memberCount}**`);
});
//================================================================================\\
client.on("message", message => {
  if (message.content === "Shelp") {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
         .setImage("https://media.discordapp.net/attachments/948665395479453736/950417389193932910/image0.jpg")
      .setColor("#E4B400")
      .setAuthor("Such Bot { # }").setDescription(`
   
> 💰 - __Economy Commands__
> 💰┇daily (d) -  cash (c)
> 💰┇work (w)
> 💰┇check (ch) - deposit (de)
> 💰┇send (se) - rob (ro) - steal (st) - top

> 🎮 - __Game Comamnds__
> 🎮┇coinflip(cf) - slots(s) -  fish(f) - Shop

> ⚙️ - __Moderation Commands__
> ⚙️┇lock - unlock - binfo
> ⚙️┇server - kick - avatar - invite
> ⚙️┇support- lock all - unlockall 

> 📎┇Link
> [Support Bot](https://discord.gg/dWnGgVbRWW) - [Invite Bot](https://discord.com/api/oauth2/authorize?client_id=952735322691735562&permissions=8&scope=bot) [Vote bot](https://discord.gg/dWnGgVbRWW)
`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", russi => {
  if (russi.content === "i") {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${russi.guild.name}`) ///Russi
      .setThumbnail(client.user.avatarURL())
      .setColor("36d8ff") ///Russi
      .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
      .addField("> 🆔 ID Server :", `${russi.guild.id}`)
      .addField("> :crown: Owner Server :", `${russi.guild.owner}`)
      .addField(
        "> :calendar: Created : ",
        `${russi.guild.createdAt.toLocaleString()}`
      )
      .addField(
        "> Members : ",
        `${russi.guild.memberCount}`
      )
      .addField(
        "> Channels : ",
        `${russi.guild.channels.cache.size}`
      )
      .addField("> Region : ", `${russi.guild.region}`)
      .setTimestamp(); ///Russi
    russi.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", habdo => {
  if (habdo.content.startsWith("Savatar")) {
    var embed = new Discord.MessageEmbed()
      .setAuthor(
        `${habdo.author.username}`,
        habdo.author.avatarURL({ dynamic: true })
      )
      .setColor("36d8ff")
      .setDescription(
        `**[Avatar Link](${habdo.author.avatarURL({
          dynamic: true,
          format: "png",
          size: 1024
        })})**`
      )
      .setImage(
        habdo.author.avatarURL({ dynamic: true, format: "png", size: 1024 })
      )
      .setFooter(
        `Requsted by ${habdo.author.tag}`,
        habdo.author.avatarURL({ dynamic: true })
      );
    habdo.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", message => {
  if (message.content === "Sbinfo") {
    const embed = new Discord.MessageEmbed().setColor("#E4B400")
      .setDescription(`
<:emoji_48:947949830511165460>| **Server** : **${client.guilds.cache.size}**
<:emoji_26:860961711289139213>| **User** : **${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}1**
<:emoji_45:947248392193593425>| **Owner Bot** <@887015240561205268>
`);
    message.channel.send(embed);
  }
});
//===============================================================================\\
client.on("message", async message => {
  if (message.content.startsWith(`<@${client.user.id}>`)) {
    let help = new Discord.MessageEmbed()
      .setColor("36d8ff")
      .setThumbnail(
        ``
      )
   .setAuthor(client.user.username, client.user.avatarURL()).setDescription(`
   
🤖 | **BOT Prefix : S**

      
♻️ | **BOT** [Support](https://discord.gg/dWnGgVbRWW)

🌐  | **BOT** [Invite](https://discord.com/api/oauth2/authorize?client_id=952735322691735562&permissions=8&scope=bot)

🖥️ | **BOT** [Website]()`);

    message.channel.send(help);
  }
});
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Destek/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Installing support command...`);
  files.forEach(f => {
    //== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

    let props = require(`./Destek/${f}`);
    log(`Support Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/dWnGgVbRWW) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Destek/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Ekonomi/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Economy command Loading ...`);
  files.forEach(f => {
    //== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

    let props = require(`./Ekonomi/${f}`);
    log(`Economy Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Ekonomi/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\
//===============================================================================\\
//===============================================================================\\
//===============================================================================\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./Oyunlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} Game command Loading ...`);
  files.forEach(f => {
    let props = require(`./Oyunlar/${f}`);
    log(`Game Command Installed: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//== BEERCODE (https://discord.gg/DxytuacsyS) BEERCODE ==\\

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Oyunlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}; //== BEERCODE https://discord.gg/DxytuacsyS) BEERCODE ==\\
//====================================================//
var aaaa = [
  "https://cdn.discordapp.com/attachments/733640065200160768/737280791993779206/tenor_3.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280895995740210/tenor_7.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280900022140938/tenor_2.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280920800722984/tenor_9.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280921689915411/tenor_10.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280924563275776/tenor.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280929311096842/tenor_5.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280944016457748/tenor_1.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737280945195057193/tenor_6.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737281583412805712/tenor_8.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737281572826382336/tenor_4.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282276320084118/tenor_2.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282249422143488/tenor_3.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282243113910292/tenor_4.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282207579635722/tenor.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282195185467473/tenor_5.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282604176506910/tenor.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282625747681410/tenor_1.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282660250157122/tenor_4.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282929633525851/tenor_11.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282757188911174/tenor_7.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282947119579216/tenor_9.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282750385487932/tenor_5.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282940760883210/tenor_10.gif",
  "https://cdn.discordapp.com/attachments/733640065200160768/737282991348252683/tenor_13.gif"
];
client.on("message", async message => {
  if (message.content === "Sanimal") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Animel`,
          color: `36d8ff`,
          image: {
            url: aaaa[Math.floor(Math.random() * aaaa.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////
var anime = [
  "https://cdn.discordapp.com/attachments/608711485849337856/859344238235484200/yawn.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859342453106933790/a_5d8475b046a3fd132344711f6acf630d.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859342351993143356/e93851d998b194d7eb4c76ab43230beb.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859336683245142016/508fe7a0908b87ea1de36391094a1049.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859334746529202229/tumblr_7568b179761b5faf3ef747e8edfa2498_3ac41c2d_540.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859348646637731870/cdb7eea53a7c7b61057a2ea8e3adfcaf.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859356709512413204/a_1197f188a370971d9af99102d14b92b9.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859357342293426176/image0-1.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859357441360003092/Snaptik_6950750097328098561_kpa-tm.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859357619361808414/image5.gif",
  "https://cdn.discordapp.com/attachments/608711485849337856/859360421634244628/krmz.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737311070364106844/image0.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/737296516774887505/bc500ed43e3593fcb9b10331ae644586.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737286213723226182/a_4a728888f25331995f9c61df26ffffdb.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/737113186280538152/image0.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737052176106520687/image1.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/737078026923409439/9190dc1cb39fa98fd9e12bb135aac545.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737052175754199070/image0.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/736898906633273364/64.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/737004415197904916/a_3bfd1dff4faab26f7a612a34cb2eb049.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948576739426385/1.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736928294414450718/ROF8OQvDmxytW.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948476520857650/5.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736757429450309673/image0.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948187487174747/48.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736588684270239774/ezgif-6-e83305d159d6.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948178855034955/anime_24.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736388428761137193/14Nqi9PD8H.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735948036202561677/previewfile_1877013475.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736388213421244477/Yblikw9Rj1.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735947565966688306/a_d6e522c9e10db64260eccb3c3455733c.gif",
  "https://cdn.discordapp.com/attachments/697505578972348436/736388155229339708/zyJgqrsAUg.gif",
  "https://cdn.discordapp.com/attachments/694694884459937862/735621470969135217/sasuke_al_moj.gif"
];
client.on("message", async message => {
  if (message.content === "Sanime") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Anime`,
          color: `36d8ff`,
          image: {
            url: anime[Math.floor(Math.random() * anime.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////
var baby = [
  "https://cdn.discordapp.com/attachments/699339066029768796/736983333254332456/1.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/737156529278550046/10.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983248021749775/6.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983242271359067/5.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983236260921455/8.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983217856315483/3.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736983211619516447/2-2.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736978634031759400/40.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736978111043731476/a_204c3f0f05cbef57c6297ee3f230f22a.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736978069038039050/f5a91c2c25a6a082f8ecafc826c13760.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736977973688795237/2.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736977934375583926/a_bf8ac566a856ad839d310e919ba15791.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736977911831330886/image0-7.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736977867811979324/a_c21ae57fdd3ad6ac99cd038b6a5aa1e4.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/736148143678291968/15.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/735864299024810155/20200723_142037.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/735910966792945764/image0.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/735910962762350642/image0.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/735194170230308904/a_0690a3032ce9908e230d7f71dd9a6988_1.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/734965436663464076/a_4f5d107e5160642113337218f63a6441.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/734965350357008384/a_8f2bce5f3a3312e7e95236a39ea70efe.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/734965015739629599/image0-6.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/732175141567725639/image0.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/730498782265081876/bab3.gif",
  "https://cdn.discordapp.com/attachments/699339066029768796/730499512602329198/14.gif"
];
client.on("message", async message => {
  if (message.content === "Sbaby") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Baby`,
          color: `36d8ff`,
          image: {
            url: baby[Math.floor(Math.random() * baby.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
////////////
var yyyy = [
  "https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif",
  "https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif"
];
client.on("message", async message => {
  if (message.content === "Sboy") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gifboy`,
          color: `36d8ff`,
          image: {
            url: yyyy[Math.floor(Math.random() * yyyy.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////
var coulpe = [
  "https://cdn.discordapp.com/attachments/694694675679936585/737306643355664384/image02.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306628528930816/a_1b0b9e83a11f0e8280c5409e85dc6ecf.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306606068564108/image0_7.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306593485651979/image01.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306585470074890/20.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305042096488478/image03.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305094038749224/a_788eee9ad77c81e7406d1c06c75de1a1.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305150607327255/larissa56.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305158668517486/image0.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305302352789554/image0-4.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737306359330111548/gif_dc_dc_dc.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736981583474589777/a_48d8e6c6b3ab9bdc3d27e9dc7bfbee53.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737305354270015628/a_b77c51a4aa5bc3460d375f415dec1507.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737304729444679730/a_73dea0b44c5e1f57bdbbfc036b7cf3dc.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737304802501066862/image0-2.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737109543263404132/image0.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737066393694109718/a_d8f145cc1f4ad05bf97a118f64d673ff.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737066415877652490/image0_8.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/737013297336942603/a_37397898637eca6eae7458899b12826c.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736898861913604156/image0-10.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736898644808040538/a_e4931ce8b4c41a2f4bb15c51dfd0b898.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736898505427386378/f6bd4fa420a9d8ce58c6519a90bc8bc0.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736898257925570600/a_1e816625dd242018b144b924043a7933.gif",
  "https://cdn.discordapp.com/attachments/694694675679936585/736897942342074428/a_8634244b88f7dc8eebbf416640489ef2.gif"
];
client.on("message", async message => {
  if (message.content === "Scouple") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Couple`,
          color: `36d8ff`,
          image: {
            url: coulpe[Math.floor(Math.random() * coulpe.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////
var emoji = [
  "https://media.discordapp.net/attachments/762954136744099842/799811562427777063/Enes_Acar_15.gif",
  "https://media.discordapp.net/attachments/762954136744099842/800835842422734898/4270_Panda.gif",
  "https://media.discordapp.net/attachments/699520919328129055/803613686656401418/Haraketli_Emoji_261.gif"
];
client.on("message", async message => {
  if (message.content === "Semoji") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Emoji`,
          color: `36d8ff`,
          image: {
            url: emoji[Math.floor(Math.random() * emoji.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////
var girl = [
  "https://cdn.discordapp.com/attachments/820811352087330828/820954968793284658/image0.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/821516515391045642/image1.gif",
  "https://media.discordapp.net/attachments/687763784902770691/802939838793908244/a_b4686f704471be16d09d1cc6506cb4ce.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/770320501204713472/image0-12.gif",
  "https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif",
  "https://cdn.discordapp.com/attachments/737803232600129608/799869130014064681/g7.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800850948078698566/000_1-2.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/766092295949910056/image2.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/818627992007344158/image0.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/821167015322320916/image4.gif",
  "https://media.discordapp.net/attachments/659108278969696256/802937736675852318/image1.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/818627981580566568/image4.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/818630968776065064/image0.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800849143341514772/a_16743dfad984f574da0b7bc2f9a0b07f.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/818633362616614912/image2.gif",
  "https://media.discordapp.net/attachments/694695166895849562/797086937068077106/20210106_210640.gif",
  "https://cdn.discordapp.com/attachments/737803232600129608/799869125601918996/g5.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800850872401657886/dfdc034aab34632039e45f23a089278f.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800848548798791680/image8-1.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800859020608405514/gif1460.gif",
  "https://cdn.discordapp.com/attachments/787757651752779826/800852701335912498/image3-1.gif"
];
client.on("message", async message => {
  if (message.content === "Sgirl") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Girl`,
          color: `36d8ff`,
          image: {
            url: girl[Math.floor(Math.random() * girl.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
//////////
var neon = [
  "https://cdn.discordapp.com/attachments/764927608013193276/764933832142749736/image0.gif",
  "https://cdn.discordapp.com/attachments/764927608013193276/768164227377791066/image0.gif",
  "https://cdn.discordapp.com/attachments/764927608013193276/788707324503392286/image0.gif",
  "https://cdn.discordapp.com/attachments/764927608013193276/812066790564823100/image0.gif",
  "https://cdn.discordapp.com/attachments/764927608013193276/779428418605023252/image0.gif",
  "https://cdn.discordapp.com/attachments/764927608013193276/780111245634043944/image0.gif",
  "https://cdn.discordapp.com/attachments/764927608013193276/793756092261072936/image0.gif"
];
client.on("message", async message => {
  if (message.content === "Sneon") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Neon`,
          color: `36d8ff`,
          image: {
            url: neon[Math.floor(Math.random() * neon.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////
var sad = [
  "https://cdn.discordapp.com/attachments/810651927334748180/811017898860347422/image0.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/811017900076040193/GIF-201127_023626.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/819268083667566622/image0.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/810652801218117672/siyah.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/810652090979844096/image0.gify",
  "https://cdn.discordapp.com/attachments/810651927334748180/810652685061062663/68.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/810652708926390292/uzgun-19.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/811012110145290310/a_1ba840ca0fdc749b381714af5f3939d9.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/810652664278810634/eniippbence.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/811012110653063238/GIF-201114_165700.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/819268121974014052/image0.gif",
  "https://cdn.discordapp.com/attachments/752914781941268563/825004389189025802/image0.gif",
  "https://cdn.discordapp.com/attachments/742107775475253259/821090832735928350/image0-24.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/811012066491629578/image0-34.gif",
  "https://cdn.discordapp.com/attachments/805854616511316014/821028902801506334/image0.gif",
  "https://cdn.discordapp.com/attachments/810651927334748180/810651982611742750/image0.gif"
];
client.on("message", async message => {
  if (message.content === "Ssad") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Sad`,
          color: `36d8ff`,
          image: {
            url: sad[Math.floor(Math.random() * sad.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////
var smoking = [
  "https://cdn.discordapp.com/attachments/755893014915711047/828894065332453397/a_96bfa97e6390c54975940689d36b1c21.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/828972013040697364/gf.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/829244464103030784/Smoking_Men_Smoking_GIF_-_Men_Smoking_Smoke_-_Discover__Share_GIFs.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/829244439310106664/Nikolaj_Coster-Waldau_Gif_Hunt.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/828893906656690186/KAPTANman_48.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/829594717859348480/20.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827979186257526814/ENES_ACAR_GIF_114_-_Kopya.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827978957668220928/Man_319.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827978869209563196/Man_137.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827978647142006804/Man_214.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827683207914323988/a_d4e861205473258d19542f451ed1083e.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827683124221444126/3B7183B3-32B1-4F3E-8469-7C1D75D165C9.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827651030937763880/a_f2c5f020621dc7da6854d194156a5a13.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827567581212573706/a_96bfa97e6390c54975940689d36b1c21.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827567125580480582/Zenard_91.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827567091674513408/sadsa.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827566756641636382/image2.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827566694846562324/ENES_ACAR_GIF_134.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827501391060140052/knassy1_6.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827471223964827668/4dsr5.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827471039629361172/20210121_175434.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827045264979656764/6.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/827044744408072223/image0-123.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/826498012410019930/a_88e5b4c03a185d0d03f84039036da416.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/826498127895986186/KAPTANman_48.gif",
  "https://cdn.discordapp.com/attachments/755893014915711047/826497192579170344/a_9b2ed05b287fc58858272fa4294a293b-1.gif"
];
client.on("message", async message => {
  if (message.content === "Ssmoking") {
    if (message.author.bot) return;
    if (!message.channel.guild) return message.reply();
    message.channel
      .send({
        embed: {
          description: `Gif Smoking`,
          color: `36d8ff`,
          image: {
            url: smoking[Math.floor(Math.random() * smoking.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});



client.on("message", async message => {
  if (message.content === ("Sunlock")) {
    if (!message.channel.guild)
      return message.channel.send(
         "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setColor("#E4B400")
      .setDescription(
        `🔓 | **UnLocked Channel**
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ✅
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});
client.on("message", async message => {
  if (message.content === ("Slock")) {
    if (!message.channel.guild)
      return message.channel.send(
        "**❌ | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
     const lock = new Discord.MessageEmbed()
     
      .setColor("#E4B400")
      .setDescription(
        `🔒 | **Locked Channel**
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Channel Status : Send Message : ❌
`
      )
      .setThumbnail(message.author.avatarURL())
     .setFooter(`${message.author.tag}`, message.author.avatarURL())
          .setTimestamp()

    message.channel.send(lock);
  }
});

client.on("message", msg => {
  if (msg.content ===  "Slock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: false,
      
      });
    });
    msg.channel.send("🔒 | **All Channels Locked**");
  }
});
 
client.on("message", msg => {
  if (msg.content === "Sunlock all") {
    if (!msg.member.hasPermission("ADMINISTRATOR"))  return;
    msg.guild.channels.cache.forEach(c => {
      c.updateOverwrite(msg.guild.id, {
        SEND_MESSAGES: true,
      
      });
    });
    msg.channel.send("🔓 | **All Channels Unlocked**");
  }
});

client.on('ready', () => {
var channel = client.channels.cache.get('944230221106790430');
    if (channel) channel.join();
});

client.shop = {
  laptop: {
    cost: 2000
  },
  mobile: {
    cost: 1000
  },
  pc: {
    cost: 3000
  }
};


client.on('message',async message => {
  if(message.content === "Suptime") { 
    let rozh= Math.floor(client.uptime / 86400000);
    let katzhmer= Math.floor(client.uptime / 3600000) % 24;
    let daqa= Math.floor(client.uptime / 60000) % 60;
    let chrka= Math.floor(client.uptime / 1000) % 60;
 
    return message.channel.send(`__uptime:__ <:emoji_45:947248392193593425>   \n${rozh}d ${katzhmer}h ${daqa}m ${chrka}s`);
  }
 
})

client.on('message', function(alone) {
    if(alone.content === "Ssay") {

 let say = alone.content.split(" ").slice(1).join(" ");
      const ALONE = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`${say}`)
      alone.channel.send(ALONE)
      alone.delete()
 
}
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === "#ping") {
    message.channel.send("pong | :signal_strength:").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
})

client.on("message", message => {
  if (message.content === "Stop") {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("#AB00F8")
      .setAuthor("Top bot").setDescription(`
Total bot
nwes command only host bot
> top Supporter
> 1- 25M 100$
> 2- 5M 50$
> 3- 1M 15$
> 4- 500k 5$

[Support Bot](https://discord.gg/dWnGgVbRWW)
`);
    message.channel.send(embed);
  }
});

client.on("guildCreate", guild => {
  let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`
Thank For Adding 
Pro bot Tax
Bot Coins   
[Server Bot](https://discord.gg/dWnGgVbRWW)    
    `);

  guild.owner.send(embed);
});

client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == "Ssay") {
    if (!message.guild) return;
    if (message.author.id !== message.guild.ownerID)
      return message.reply("** **You must have a higher role use this command****");
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "**You must have a higher role use this command**"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " +  "embed <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor()
      .setDescription(`${args}`)
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.content === "Smod") {
    const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("#5B2076")
      .setAuthor("Mod command").setDescription(`
__**ℹ | Info \ 📚 | Moderation Commands**__ 
-----------------------------
> #lock
> #unlock
> #lock all
> #unlock all
> #say 
-----------------------------
 __**🛡 | Security Commands**__ 
-----------------------------
> anti Minton
-----------------------------

 __**Link**__
[Support Bot](https://discord.gg/dWnGgVbRWW)
`);
    message.channel.send(embed);
  }
});

client.on("guildCreate" , DarkMan => {
  if(DarkMan.memberCount < 100 ){
    console.log(`  name ( ${DarkMan.name} ) zhmaray memberakan ( ${DarkMan.memberCount}) created by DarkMan`)//by DarkMan
    DarkMan.leave();
  }
})
client.on('ready', () => {
var channel = client.channels.cache.get('917176930053283911');
    if (channel) channel.join();
});
