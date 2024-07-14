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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,947xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94766621287,947xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_25_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyNHNTdlhySTBkTGNLai9kTEZ3eS9YUmZQVWNKeERGWmZwa3E4Zk4zZ2RZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzExNzcyNDU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNDk0QUVCNjBDMzY1MzI2MDdEMjY1N0E5Njc1N0M0NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5NDU1MTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1ppazA4WjZTc0cyVV93ZEFqdlBfUVwiLFxuICBcInBob25lSWRcIjogXCI0ZDg1YmJjOS05NTE3LTQ3MWUtOTkwYy03MTNiNjE1YzBhZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxOTYsXG4gICAgICAxNjQsXG4gICAgICA5LFxuICAgICAgMTExLFxuICAgICAgODEsXG4gICAgICAyNTEsXG4gICAgICAxMDksXG4gICAgICAxNTQsXG4gICAgICA3OSxcbiAgICAgIDAsXG4gICAgICAxNDMsXG4gICAgICAxMzQsXG4gICAgICAzNSxcbiAgICAgIDMsXG4gICAgICAxMzEsXG4gICAgICA2MCxcbiAgICAgIDM1LFxuICAgICAgMjM5LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDExOSxcbiAgICAgIDEwMixcbiAgICAgIDE4LFxuICAgICAgMjI5LFxuICAgICAgOTgsXG4gICAgICAyMzgsXG4gICAgICAxNjksXG4gICAgICA3MCxcbiAgICAgIDIwNSxcbiAgICAgIDMxLFxuICAgICAgMTM0LFxuICAgICAgMjMxLFxuICAgICAgMTc2LFxuICAgICAgMTU3LFxuICAgICAgMjI2LFxuICAgICAgMjI1LFxuICAgICAgMTE2LFxuICAgICAgMjMzLFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNSQ1JZNkFaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMTc3MjQ1ODo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDM1MDEwODcxNzE3Njo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImJvdGHwn5iEXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmp4MzkwR0VPQ1d6clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5RUo1Y012L1MrTjhNNDFuUWtpRGZnZ0JZSnpLaFFaK0pORjRJdmhrejAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldUNXhQMjlTZ0FQanowMW44aE5NTjVVYjB2U1F4Qk5qbzZtdFkySUFDM0NvYWF5M3lwamZqU1RDT25nVk5HWHpxb2lCalMwR0tYUkJGZjJnc3NuSkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFNQnV2bG9UaFBBamhWMHQxU1pGZWlBalJSSHNKb2RWY09JcHF5UnoxbTZIc29aUmtteTlPUGR5WEVGVWFvOGhXTjAzK3Z1TnQ5VWRxYThVRVplOERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzExNzcyNDU4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NDU1MDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJQTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlBNi5qc29uIjogIntcImtleURhdGFcIjpcIllRb2tOUGZRempWdm1DTTFhV3B6ZStqcnRmZld1OEtZOEdiYzBmcTZiQWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwNzIxODkwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
