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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94711772458" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94711772458";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "TRUE"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_58_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICA2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzSzV4b3hMTkc1TGNkczVYQW1JNkNFaE9rdGpya1VMM3FLNTRsdFozSTlZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc2MTI5NDg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4REIwMTQyN0FDQ0I5NDQ0MjI1NzY4ODMxNzk2QTUxQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgxMDM1MzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NjEyOTQ4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODcyREY4REExRjg2Q0Y1RUFGNEU5NzFFNEFDM0E3NkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MTAzNTMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNkdkI1V0NwUXY2LWx0Q2VzUGVCZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzUxZWM3ZDUtY2FjZC00NmM2LWIxNzItMjJjYzJjYzdlMGE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE1MCxcbiAgICAgIDExOCxcbiAgICAgIDEwOSxcbiAgICAgIDgsXG4gICAgICAxMCxcbiAgICAgIDIxOSxcbiAgICAgIDIwOSxcbiAgICAgIDgxLFxuICAgICAgMjMxLFxuICAgICAgMjMyLFxuICAgICAgMSxcbiAgICAgIDE2MyxcbiAgICAgIDQ3LFxuICAgICAgMzUsXG4gICAgICAyNTUsXG4gICAgICA4MCxcbiAgICAgIDMsXG4gICAgICAxOTQsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxODIsXG4gICAgICAxMzEsXG4gICAgICA3OSxcbiAgICAgIDEzOCxcbiAgICAgIDE2OSxcbiAgICAgIDE5NCxcbiAgICAgIDQwLFxuICAgICAgMTI1LFxuICAgICAgMTAzLFxuICAgICAgMzMsXG4gICAgICAyMjcsXG4gICAgICA4NyxcbiAgICAgIDEyLFxuICAgICAgMjE1LFxuICAgICAgMjE4LFxuICAgICAgMTAyLFxuICAgICAgMjA1LFxuICAgICAgMTY1LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlczMUhSWFpZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NjEyOTQ4NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MTUyNzUzODk5OTQ0OTozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRhbm5hIEtlbmVrIDJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJanMydUlERU9MYm9MTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm54NlVtcFpkdmxkdHVzVGdIVjVOUGF5ejBPdkkvaEZCUExCV1pBZzhCbkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSHVvVi9TRVFaMFBwZjVOak0xZ0JRejZtaVpXeTVzU2dOYmo4eDlLbzBJT2dhTjVSQmczVGZrNlRlN0dWSUtaSjJDaGRpZ0ZtQTdyeExvaGRQampGREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQjliN1prcys3clMxN3owM2xNdlB4WWlReUxEajRFakZiTm9OUGpPdTU3ek0zUXc1T1gwNzlGWkJCcnR2ZXRwZ3QydHdtbVZQZDZGWjg0Sm9Vb3ljQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzYxMjk0ODc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTAzNTI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHFsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMcWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyMnhZN1h5cWJYT3ptRW5rbjArb3U2NXR0d0VMVlRyQ09GV1JIeDRtb1dJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMTIzMTU2NTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODEwMzUyOTI1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
