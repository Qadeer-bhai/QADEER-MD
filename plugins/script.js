const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *QADEER KHAN*

> *QADEER MD REPO:*
*|* *https://github.com/Qadeer-bhai/QADEER-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vaw6yRaBPzjZPtVtA80A*
*╰──────────────●●►*

> *QADEER-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363380724912615@newsletter',
      newsletterName: "⏤͟͟͞͞★͙≛͙⃝͙𝐐𝐀𝐃𝐄𝐄𝐑-𝐌𝐃♥᭄ ࿐",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'QADEER MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Qadeer-bhai/QADEER-MD" ,
thumbnailUrl: "https://qu.ax/azDWQ.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
