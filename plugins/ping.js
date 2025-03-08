const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "ping",
    alias: "speed",
    desc: "Check bot's response time.",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const startTime = Date.now();

        // Add a short delay
        await new Promise(resolve => setTimeout(resolve, 2)); // 3ms delay

        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping result
        await conn.sendMessage(from, { 
            text: `> *𝐐𝐀𝐃𝐄𝐄𝐑-𝐌𝐃  𝐒𝐏𝐄𝐄𝐃:* ${ping}𝐌𝐒 💥*`, 
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363380724912615@newsletter',
                    newsletterName: '⏤͟͟͞͞★͙≛͙⃝͙𝐐𝐀𝐃𝐄𝐄𝐑-𝐌𝐃♥᭄ ࿐',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 

cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "🍂",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '> *قَـٜـٜدیـٜـٜـٜرخـٜـٜـٜـٜـٜ۬ـٰٜ۬ـٰٰٜ۬ـٰٜ۬ـٜ۬ـٜـٜـان*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: '> 😇*قَـٜـٜدیـٜـٜـٜرخـٜـٜـٜـٜـٜ۬ـٰٜ۬ـٰٰٜ۬ـٰٜ۬ـٜ۬ـٜـٜـان*': ${ping}ᴍs*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
