const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`) 
  
//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let timeout = 7000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("#ffff00")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`🧭 You Have A Cooldown For __coinflip__
                        **Time left**
                        ${time.seconds ? time.seconds + 'seconds' : 'try again!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RANDOM")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`You Can't More Than 💵 50,000`))
 if(miktar > 50000) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RANDOM")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`You can bet up to 50000`))   
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                              .setColor("RANDOM")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`In your wallet to place a bet ${para ? "just " + para + ' there is!' : 'you have no money!'}`))
        const result = [
          "LOOSELOOSE",
          "WINWIN",
          "LOSSELOSSE",
          "WINWIN",
          "LOOSELOOSE"
        ] 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = miktar*1       
        //////        
        var text2 = `<@${message.author.id}> spent 💵 ${kazandın} and chose **heads** the coin spins...<a:emoji_5:897153200107433995>`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`<@${message.author.id}>spent <a:emoji_6:897287788674834525>  ${-kaybettin}  and chose **heads**
The coin spins...  tail and you **lost** it all.. :c`);
            }, 3000);
          });
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`para_${message.author.id}`, -kaybettin);   
      } else { 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
          var kazandın = miktar*1
        var text2 = `<@${message.author.id}> spent <a:emoji_5:897153200107433995> ${kazandın} and chose **heads** the coin spins...`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`<@${message.author.id}> spent 💵 ${kazandın} and chose **heads**
The coin spins...💰 and you **won** `);
            }, 3000);
          });
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`para_${message.author.id}`, kazandın);    
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        }}}
exports.conf = {
  enabled: true,
  aliases: ["coinflip"," cf"],
};

exports.help = {
  name: 'cf',
};
