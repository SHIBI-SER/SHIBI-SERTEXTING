let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/DEVILSER/DEVILSER/main/Media/Ammu/reduced_IMG-20211219-WA0031_2.jpg")).buffer(), devil, 'ꜱʜɪʙɪ sᴇʀ  ʙʏ ꜱʜɪʙɪ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://github.com/SHIBI-SER/SHIBI-SER \n\n\ © ī.am ꪶꜱʜɪʙɪ sᴇʀꫂ⁩⁴⁰⁴⁩' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
