const Discord = require('discord.js')
exports.run = function(client, message, args) {//== BEERCODE (https://discord.gg/NvFmzB5EfV) BEERCODE ==\\
let yardim = new Discord.MessageEmbed()
.setTitle("Cola bot  | Command List")//== BEERCODE (https://discord.gg/NvFmzB5EfV) BEERCODE ==\\
.setColor("#ffff00")
.addField("__💰  Economy__",`
*\`n!daily\` - __You will earn between 2300-2700 with 24 hours intervals.__**
**\`n!money\` - __You will see the person you tagged or your own money.__**
**\`n!send\` - __You send money to the user you tagged.__**
**\`n!rob\` - __You make a robbery every 14 minutes.__**
**\`n!Work\` - __You work at a random job and get a salary.__**
**\`n!dep\` - __You deposit money into the bank from your own wallet.__**
**\`n!check\` - __You withdraw money from the bank to your own wallet.**
**\`n!steal\` - __You steal money from the wallet of the person you tagged.__**
`)
.addField("__🎲  Games__",`
*\`n!bet\` - __You bet, lose money or win twice.__**
**\`n!slots\` - __You play slots, lose money or win double.__**
**\`n!fish\` - __You fish, you win or lose money randomly.__**
`)
let ekonomi = new Discord.MessageEmbed()
.setTitle("__💰 Economy Commands__")
.setColor("#ffff00")
.setDescription(`
**\`?daily\` - __You will earn between 2300-2700 with 24 hours intervals.__**
**\`?money\` - __You will see the person you tagged or your own money.__**
**\`?send\` - __You send money to the user you tagged.__**
**\`?rob\` - __You make a robbery every 14 minutes.__**
**\`?Work\` - __You work at a random job and get a salary.__**
**\`?dep\` - __You deposit money into the bank from your own wallet.__**
**\`?check\` - __You withdraw money from the bank to your own wallet.**
**\`?steal\` - __You steal money from the wallet of the person you tagged.__**
[Our Support Server](https://discord.gg/ZBBpmWJtey)
`)
let oyunlar = new Discord.MessageEmbed()
.setTitle("__🎲  Game Commands__")
.setColor("#ffff00")
.setDescription(`
**\`?bet\` - __You bet, lose money or win twice.__**
**\`?slots\` - __You play slots, lose money or win double.__**
**\`?fish\` - __You fish, you win or lose money randomly.__** 
`)//== BEERCODE (https://discord.gg/NvFmzB5EfV) BEERCODE ==\\
let destek = new Discord.MessageEmbed()
.setTitle("__💼  Support Commands__")
.setColor("#ffff00")

  if(!args[0]) return message.channel.send(yardim)
  
//== BEERCODE (https://discord.gg/NvFmzB5EfV) BEERCODE ==\\  
  if(args[0] === 'economy' || args[0] === 'economy') return message.channel.send(ekonomi)
  if(args[0] === 'games' || args[0] === 'game' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)
  
  
};

//== BEERCODE (https://discord.gg/NvFmzB5EfV) BEERCODE ==\\
exports.conf = {
    enabled: true, 
    aliases: ["","",'',''],
  };
  
  exports.help = {
    name: ''
  };
