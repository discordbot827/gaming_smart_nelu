const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author
  let para = `${db.fetch(`para_${user.id}`)}`
  console.log(para)
  if (!para) para = 0;
  let banka = `${db.fetch(`bankapara_${user.id}`)}`
  console.log(banka)
  if (!banka) banka = 0;
  let toplam = para + banka;
  console.log(toplam)
  console.log(para.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')) 
  console.log(banka.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')) 
  console.log(toplam.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')) 
//total: ${toplam.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}
  let balanceEmbed = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.avatarURL({dynamic: true}))
    .setDescription(`**__Probot Cash \š°__**\n**šµ | Balance : ${para.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}\nš§ | Bank: ${banka.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} \nš | total: ${toplam.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}**`)
    .setColor("#E4B400")
    .setThumbnail('https://i.pinimg.com/originals/a6/ff/a5/a6ffa54c9b06f7030aecd93f011dcb60.gif')
    .setFooter('š° Balance Info!');
  message.channel.send(balanceEmbed);
}

exports.conf = {
  enabled: true,
  aliases: ["cash", "money", 'credit', 'c'],
};
exports.help = {
  name: 'balance',
};