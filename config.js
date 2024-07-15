const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="mathara, yatiyana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://nittava:Iamride9@@nittava.uivsr5o.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/matara";
global.github=process.env.GITHUB|| "https://github.com/tashindu88/MR_NITTAVA--Md/";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ nittava-ᴍᴅ" 


global.devs = "94711772458" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94711772458";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,947xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "TRUE"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,947xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94766621287,947xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_45_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDg4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmZzaHpzRThPT1NJYm42cnNwVG5wcVluQUZEN0pSVjJIRGV2MjRhNU90ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxMTc3MjQ1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDM4NjVBNUQzOTlFNjAyRDNEN0U2RjYyREEzMDY2NkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDU4MzQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTE3NzI0NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU4N0RFNzdBREUzMzE4OTQwMjdENzdEQzAzMDU2NUQyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA1ODM0NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzExNzcyNDU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRjgyNTFCNjAxNTBDNjhEOUVCREVEOEU2QjE0NDRGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwNTgzNDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxMTc3MjQ1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTc5N0Y1NDJCOTMwRDc0RDVCMUREOEVENjU3RUZGMDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDU4MzQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldzeGlzZy00U19PdmtPeXhhbmNXb2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTI5MTNkOGMtMDQ0My00ZWJiLWIwZDktNzcyMTZjODdhNGQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMTAxLFxuICAgICAgNDQsXG4gICAgICAxMTgsXG4gICAgICA2OSxcbiAgICAgIDY1LFxuICAgICAgNjAsXG4gICAgICAxOTYsXG4gICAgICAxODQsXG4gICAgICAyMTksXG4gICAgICAxODIsXG4gICAgICA4MCxcbiAgICAgIDEyMixcbiAgICAgIDExOCxcbiAgICAgIDIzOSxcbiAgICAgIDk2LFxuICAgICAgMzksXG4gICAgICA5NCxcbiAgICAgIDE3MixcbiAgICAgIDEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAyMzgsXG4gICAgICAxNTAsXG4gICAgICAxMjYsXG4gICAgICAyMjMsXG4gICAgICA2NSxcbiAgICAgIDYwLFxuICAgICAgMTYzLFxuICAgICAgMTI5LFxuICAgICAgNTcsXG4gICAgICA5OSxcbiAgICAgIDQ3LFxuICAgICAgMTE1LFxuICAgICAgMTM3LFxuICAgICAgMTQ2LFxuICAgICAgMjMsXG4gICAgICAxNTMsXG4gICAgICAxNTEsXG4gICAgICAxNzgsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUpHWkZIV0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzExNzcyNDU4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMzUwMTA4NzE3MTc2OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiYm90YfCfmIRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcngzOTBHRUtLSTFiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlFSjVjTXYvUytOOE00MW5Ra2lEZmdnQllKektoUVorSk5GNEl2aGt6MDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiejhDbWZTalZ0SXhQNTBocnRGM3A3cXg2VXhPeGFxTGlQb1FaM3p6VG5OQ0JDL0VON2NaZEY1eXNxWERYWnJUQ0IySWlKSFhjUW8zbFhnUHh1NUhIQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1dDelFxUjBhV3AwL2lyWGlVNlZZeTd6V0NYeGx6dkdpUUlWMGV2WTZKQXl5YnlZREIwaS84OXdROFVyMTBTd3doS0Y3Y25LcGdrcnZDV2d6cHg3QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTE3NzI0NTg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA1ODM0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlCUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUJSLmpzb24iOiAie1wia2V5RGF0YVwiOlwidGJkdDdjNllRcG1UaURGaGxlckFRQzBuaFNUMTdDc1lueU15V2dmN05zZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODA3MjE4OTA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEwNTgzNDQzNTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ nittava-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MR_NITTAVA-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x MR_NITTAVA ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
