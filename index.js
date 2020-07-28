const Discord = require("discord.js");
const bot = new Discord.Client();
const { get } = require("snekfetch");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const config = require("./config.json");
const adapter = new FileSync('database.json')
const db = low(adapter);
const status = "online" //"invisible"

db.defaults({ histoires: [], xp: [] }).write()

var prefix = "wt-";

process.on('uncaughtException', function (err) {
    console.log('OMG IT IS A ERROR!: ' + err); //STOPS THE BOT FROM CRASHING
});


function AaN(args, i) {
    if (args[i] === null || args[i] === "" || args[i] === undefined) return true;
    return false;
}

bot.on('ready', () => {
    bot.user.setStatus(status)
    console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}#${bot.user.id}`);
    console.log(`Guilds: ${bot.guilds.size}`);
    console.log(`Channels: ${bot.channels.size}`);
    console.log(`Users: ${bot.users.size}`);
    console.log(`Friends: ${bot.user.friends.size}`);


    let games = [`play wt-help...`, `Sett Rain...`, `Live Rain...`, `Big rain Sett...`, `owh yes.........`];

    setInterval(() => {
        bot.user.setGame(games[Math.floor(Math.random() * games.length)])
    }, 4000)//12000)
});

//delete after command

 /*bot.on('message', message => {
    if (message.content.startsWith("wt-sett")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(10, message.content.length));
    }
    else if (message.content.startsWith("wt-done")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(10, message.content.length));
    }
    else if (message.content.startsWith("wt-here")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(10, message.content.length));
    }
    else if (message.content.startsWith("wt-woot")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(10, message.content.length));
    }
    else if (message.content.startsWith("wt-wait")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(10, message.content.length));
    }
}); */

//delete after command tcc

bot.on('message', message => {
    if (message.content.startsWith("wt-")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));   
    }
    else if (message.content.startsWith("!tip")) {
    message.delete(1000); //Supposed to delete message
    message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("&tip")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("!airdrop")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("&airdrop")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("&phrasedrop")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("!phrasedrop")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("!soak")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("&soak")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("&reactdrop")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("!reactdrop")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith(".soak")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("=soak")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("rsoak")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith(".rain")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("rrain")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
    else if (message.content.startsWith("!postip soak")) {
        message.delete(1000); //Supposed to delete message
        message.channel.send(message.content.slice(50, message.content.length));
    }
});

//REPLY COMMEN

bot.on("message", message => {
    if (message.content == "Wooot" || message.content == "Woot" || message.content == "wooot" ||
        message.content == "Woot Wooot" || message.content == "Woot Woot" || message.content == "WOOT" ||
        message.content == "Woot woot" || message.content == "woot") {
        //message.reply("pong")
        message.channel.sendMessage("wt-woot")
    }
    else if (message.content.toLowerCase() == "wt-live"){
        message.channel.sendMessage(":mega: \n```diff\n-LIVE rain is falling from the sky on [DF] server-```@here ")
    }
    else if (message.content.toLowerCase() == "wt-donelive"){
        message.channel.sendMessage("```diff\n-LIVE RAINS .. DONE- \n wait a few more minutes .. big rain comes again```:warning:")
    }
    else if (message.content == "Thanks"||message.content =="thanks"||message.content == "awesome rain"||message.content == "Thank you" || message.content == "thanks so much" ||message.content == "Thanks a lot" || 
    message.content == "thanks a lot" || message.content == "Thanks so much" ||message.content == "thank you" |message.content == "Thanks for sharing" || message.content == "Awesome thanks"|| message.content =="Thanks for the rains"|| 
    message.content == "Thanks so much for sharing"|| message.content =="nice thanks"|| message.content =="thankz guyz"|| message.content =="Thanks for rain") {
    //message.reply("pong")
     message.channel.sendMessage( "You are welcome "+ message.author +" 😉")
    }
    else if (message.content == "Thx"||message.content =="thx"||message.content == "Tyy"||message.content == "tyy" || message.content == "Ty" ||message.content == "ty") {
        //message.reply("pong")
        message.channel.sendMessage( "full writing please "+ message.author +"🤦‍♀️")
    } 
});

////REPLY COMMEN
bot.on("message", message => {
  if(message.content === "Good morning everyone") {
    message.channel.send("Good morning  "+ message.author);
  }
  if(message.content === "good morning") {
    message.channel.send("Good morning " + message.author);
  }
  if(message.content === "good evening everyone") {
    message.channel.send("good evening "+ message.author);
  }
  if(message.content === "agood evening") {
    message.channel.send("good evening "+ message.author);
  }
  if(message.content === "good night everyone") {
    message.channel.sendMessage("good night "+ message.author)
  }
  if(message.content === "good night") {
    message.channel.sendMessage("good night "+ message.author)
  }
  if(message.content === "hi") {
    message.channel.send("hi " + message.author);
  }
  if(message.content === message.author+ "hi") {
    message.channel.send("hi " + message.author);
  }
  if(message.content === "hello") {
    message.channel.send("hello "+ message.author);
  }
  if(message.content === message.author+"hello") {
    message.channel.send("hello "+ message.author);
  }
  if(message.content === "good day") {
    message.channel.send("good day "+ message.author);
  }
  if(message.content === "nice") {
    message.channel.send("owh yes ah "+ message.author);
  }
  if(message.content === "Good evening friends") {
    message.channel.send("A very good evening. Hope you had a nice day "+ message.author);
  }
  if(message.content === "Hello dear friends") {
    message.channel.send("Hello " + message.author + ":wave: How u doing today?");
  }
  if(message.content === "🥳") {
    message.channel.send("There is always party here "+ message.author);
  }
  if(message.content === "Very good") {
    message.channel.send("Nice to hear that "+ message.author);
  }
  if(message.content === "Awesome rain") {
    message.channel.send("Yes it is " + message.author+ " Are you loving it?:stuck_out_tongue_winking_eye:");
  }
  if(message.content === "Nice sharing") {
    message.channel.send("Is it so " + message.author+ "You are Bluffing :rofl: Just kidding, Enjoy the rain :cloud_rain:");
  }
  if(message.content === "Good evening everyone") {
    message.channel.send("A very good evening. Hope you had a nice day "+ message.author);
  }
  if(message.content === "Great lot people thanks") {
    message.channel.send("You are welcome " + message.author + " :blush:");
  }
  if(message.content === "awesome rain, thankz guyz") {
    message.channel.send("You are welcome " + message.author + " :blush:");
  }
  if(message.content === "missed ") {
    message.channel.send("setay here bro "+ message.author);
  }
  if(message.content === "Hello everyone") {
    message.channel.send("Hello " + message.author + " :wave: How u doing today? ");
  }
});

// STAR COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "start")) {
        msg.channel.send("```diff\n-STARTING ... ... ... ... RAIN ... SOAK...DRIZZLE...LIVE.. DF-TEAM  [LOG TRUE] COMMAND wt-help:om:\n```@everyone ");
        console.log("The pat command was executed and correctly applied");
    }
});

// DONE COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "end")) {
        msg.channel.send("```diff\n-! RAIN HAS ENDED .. [LOG ENDED]\n-! DO NOT USE THE COMMAND WOOT AFTER RAIN FINISHED.....\n``` @here");
        console.log("The pat command was executed and correctly applied");
    }
});

//commands


bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
            let member = message.author;

            const helpEmbed = new Discord.RichEmbed()
                .setAuthor(`Commands`, bot.user.displayAvatarURL)
                .setTitle("**You typed the command:** **wt-help**:tools: ")
                .setDescription("\n__*Special Bounty command*__\n:round_pushpin:  **wt-invite** `(bounty invite)`\n:round_pushpin:  **wt-here** `(bounty live)`\n:round_pushpin: **wt-df1 | wt-df2** `(logo df)`\n\n __**GIF RANDOM**__")
                .addField(":sparkles: ***wt-wait***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-ready***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-dance***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-thx***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-woot***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-omg***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-lambo***", "`Displays a random gif`", true)
                .addField(":sparkles: ***coffee***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-tea***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-lol***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-cheer***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-rain***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-snow***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-thunder***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-like***", "`Displays a random gif`", true)
                .addField(":sparkles: ***bosq***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-nice***", "`Displays a random gif`", true)
                .addField(":sparkles: ***wt-cw***", "`Displays a random gif`", true)
                .addField(":sparkles: ***hug***", "`Displays a random gif`", true)


                .setColor(0xff0000);
            member.send({
                embed: helpEmbed
            });
            message.reply("I have DM'd you the list of help commands!")
            break;

        /* default:
             message.channel.sendMessage("You Appear to have typed an invalid command!");
        */
    }
});
/////////////////////////////////////////////////////////xxxxxxxxxxxxxx/////////////////////////////////////////////////////////////////////////////
// XP COMMANDE

bot.on('message', message => {
    var msgauthor = message.author.id;
    if (message.author.bot) return;

    if (!db.get("xp").find({ user: msgauthor }).value()) {
        db.get("xp").push({ user: msgauthor, xp: 1 }).write();

    } else {
        var userxpdb = db.get("xp").filter({ user: msgauthor }).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Number of xp : ${userxp[1]}`)
        db.get("xp").find({ user: msgauthor }).assign({ user: msgauthor, xp: userxp[1] += 1 }).write();
        if (message.content.startsWith(prefix + "xp")) {
            var xp = db.get("xp").filter({ user: msgauthor }).find('xp').value()
            var xpfinal = Object.values(xp);
            var embed = new Discord.RichEmbed()
                .setTitle(`Stat des XP de ${message.author.username}`)
                .setColor("RANDOM")
                .setDescription("Display XP")
                .addField("XP:", `${xpfinal[1]} xp`)

            message.channel.send(embed);
        }
    }
})

// PING COMMANDE

bot.on("message", message => {
    if (message.content.startsWith(prefix + "ping")) {
        var now = require('performance-now');
        var endTime = now();
        var startTime = now();
        var embed = new Discord.RichEmbed()
            .setColor("#E80B3E")
            .setAuthor("Pong :ping-pong:")
            .setTitle("Here is the ping of the bot")
            .addField("pong :ping_pong: " + Math.round(endTime - startTime) + "", "MS")


        message.channel.send({ embed })

    }
})
//BOUNTY ASAFE2 COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "safe")) {
        msg.channel.send("**Hello Interested in BOUNTY**\n We are thrilled to announce our Discord Invite Campaign\nYou will earn a reward for every person invited to our channel :heart_eyes:\n\n :bell:   1 AllSafe (ASAFE2) PER INVITE\n :bell:  TOP 5 ACTIVE USERS WILL RECEIVE EXTRA REWARDS\n :first_place:  1 PLACE - 500 ASAFE2\n :second_place:  2 PLACE - 400 ASAFE2\n :third_place: 3 PLACE - 300 ASAFE2\n :medal: 4 PLACE - 200 ASAFE2\n :military_medal: 5 PLACE - 100 ASAFE2\n\n Campaign ends on 31.12.2018\n**RULES**\n :pushpin:  Minimum number of invites to No Minimum Number\n :pushpin:  If you invite fake, inactive or recently created accounts, you will be banned\n :pushpin:  Use only #invite-check  channel for checking your invites \nhttps://discord.gg/UkfSx9j");
        console.log("The pat command was executed and correctly applied");
    }
});
//BOUNTY x6 coin COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "x6coin")) {
        msg.channel.send("**new info**\n x6coin has just been launched ...\n let's grow it on the server\n https://discord.gg/uhGchT7");
        console.log("The pat command was executed and correctly applied");
    }
});

//BOUNTY INVITE COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "invit")) {
        msg.channel.send(":loudspeaker: :regional_indicator_d: :regional_indicator_f:  :regional_indicator_i: :regional_indicator_n: :regional_indicator_v: :regional_indicator_i: :regional_indicator_t: :regional_indicator_e:  :regional_indicator_b: :regional_indicator_o: :regional_indicator_u: :regional_indicator_n: :regional_indicator_t: :regional_indicator_y:  :mega:\n\n:sparkles: Hello Discord Forum members, to increase your enthusiasm in following Invite Bounty, then we added more of coins for prizes... :tada: :moneybag: :trophy:\n\nSo, let me us know how enthusiastic the DF members are to win that huge prize ...\n\n:gift: **Prizes:**\n1st place     :  45 Gocash   +   150.000 SUBX   +   1500 ECA   +   60000 XGAME   +   75000 MIC3  +  50000 SHND  +  600 POS coin\n2nd place   :  35 Gocash   +    125.000 SUBX   +   1250 ECA   +   50000 XGAME   +   50000 MIC3  +  40000 SHND  +  500 POS coin\n3rd place    :  25 Gocash   +   100.000 SUBX   +   1000 ECA   +  40000 XGAME   +  40000 MIC3  +  30000 SHND  +  400 POS coin\n4th place    :  15 Gocash    +    75.000 SUBX    +     750 ECA   +   30000 XGAME   +   30000 MIC3  +  20000 SHND  +  300 POS coin\n5th place    :  10 Gocash    +    50.000 SUBX    +    500 ECA   +   20000 XGAME   +   20000 MIC3  +  10000 SHND  +  200 POS coin\n\n**Rule :**\n:arrow_forward: Participants must have minimal 50 invites to qualification Discord Forum Invite Bounty\n:arrow_forward: First 3 Participants who reached 50 invite will get bonus 1000 ECA\n:arrow_forward: If you invites new account (account created a month a go) will be annulire\n:arrow_forward: Don't try to make fake invite or you will be disqualification\n:arrow_forward: DF team not allowed to join this invite bounty\n:arrow_forward: This event will be running a month and will end on 30 December 2018, 11.30 UTC 7\n\n:point_right: So, don't miss this challenge and check detail at pinned message @here <#481684303542091778> :point_left:");
        console.log("The pat command was executed and correctly applied");
    }
});



//WAIT COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "wait")) {
        var images = [
            "https://i.gifer.com/AqCa.gif",
            "https://i.gifer.com/YVPG.gif",           
            "https://i.gifer.com/4SHX.gif",
            "https://i.gifer.com/6oa.gif",
            "https://i.gifer.com/VhdJ.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//WAIT COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "ready")) {
        var images = [
            "https://i.imgur.com/PEiN6a0.gif",
            "https://i.imgur.com/iqxudw7.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//NEWS COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith("ramadhan")) {
        var images = [
            "https://i.gifer.com/3eZ7.gif",
            "https://i.gifer.com/J2Ln.gif",
            "https://i.gifer.com/J2Lp.gif"

        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});

//HERE COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith("hut17")) {
        var images = [
            "https://i.gifer.com/3NvjP.gif"

        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        //msg.channel.send("__**Discord Forum Bounties live :**__\n\n<#537891458833973258>\n<#541683404739969026>\n<#541305905392910346>\n<#541308793598902292>\n<#532520920791908352>\n<#535361827370958848>\n<#534046196944338986>\n<#534217838253309969>\n<#497105411665821753>\n<#503423662951628802>\n<#514881343092686848>\n<#516013027754115072>\n<#516671979290361856>\n<#517512814986788865>\n<#523672614976356352>\n<#534433721370017821>\n<#542375571741605908>\n***Don't miss it guys*** @here");
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//CONGRATS COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith("congrats")) {
        var images = [
            "https://i.gifer.com/QNvI.gif",
            "https://i.gifer.com/ZIx.gif",
            "https://i.gifer.com/ZMR8.gif",
            "https://i.gifer.com/JgzZ.gif"

        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//DF1 COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "df1")) {
        var images = [
            "https://cdn.discordapp.com/attachments/479756000946159626/481555590200688640/DF_LOW.png"

        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//DF2 COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "omg")) {
        var images = [
            "https://i.gifer.com/79Mb.gif",
            "https://i.gifer.com/UeB.gif",
            "https://i.gifer.com/MVh4.gif",
            "https://i.gifer.com/1Car.gif",
            "https://i.gifer.com/2oc.gif",
            "https://i.gifer.com/2dSB.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//KOPI COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith("coffee")) {
        var images = [
            "https://i.gifer.com/RKrY.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//TEA COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "tea")) {
        var images = [
            "https://i.gifer.com/1Op4.gif",
            "https://i.gifer.com/3US.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//Thx COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "thx")) {
        var images = [
            "https://i.imgur.com/dUq4Ofg.gif",
            "https://i.gifer.com/5qO.gif",
            "https://i.gifer.com/Vono.gif",
            "https://i.gifer.com/3Xzp.gif",
            "https://i.gifer.com/yj.gif",
            "https://i.gifer.com/CGg.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//WOOT COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "woot")) {
        var images = [
            "https://i.imgur.com/YeLWPSC.gif",
            "https://i.imgur.com/qPm6gsV.gif",
            "https://i.imgur.com/rHOSxIg.gif",
            "https://i.imgur.com/xEmgUz8.gif",
            "https://i.imgur.com/4zxnauT.gif",
            "https://i.imgur.com/djmXkub.gif",
            "https://i.imgur.com/ETs4MQO.gif",
            "https://i.imgur.com/ACzIg27.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//LAMBO COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "lambo")) {
        var images = [
            "https://i.imgur.com/XAB3Fgd.gif",
            "https://i.imgur.com/yR2nKcW.gif",
            "https://i.imgur.com/mPP0paq.gif",
            "https://i.imgur.com/uQHYJia.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//LOL COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "lol")) {
        var images = [
            "https://i.imgur.com/WTE045N.gif",
            "https://i.gifer.com/6NE.gif",
            "https://i.gifer.com/mUO.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//JANDA MUDA COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "jamu")) {
        var images = [
            "https://i.gifer.com/3NrLu.gif",
            "https://i.gifer.com/K8nM.gif",
            "https://i.pinimg.com/originals/5d/4e/05/5d4e05c6698a8457234e8e7499d74743.jpg",
            "https://i.pinimg.com/originals/b5/03/ea/b503ea394833553d4578a2a904a32f7c.jpg",
            "https://i.pinimg.com/originals/6b/65/f7/6b65f70704d0f79a85f08af6f6a97062.jpg",
            "https://i.pinimg.com/originals/c3/00/08/c30008285658fa7d8c69bc23d8ee67ae.jpg"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//CHEER COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "cheer")) {
        var images = [
            "https://i.imgur.com/Tq5RZW6.gif",
            "https://i.imgur.com/LFwdnV3.gif",
            "https://i.imgur.com/fvUbYIr.gif",
            "https://i.imgur.com/KyOCbe6.gif",
            "https://i.gifer.com/2Qcb.gif"];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//DANCE COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "dance")) {
        var images = [
            "https://i.imgur.com/EUStkHJ.gif",
            "https://i.gifer.com/7kKW.gif",
            "https://i.gifer.com/Vp0r.gif",
            "https://i.gifer.com/3SfS.gif",
            "https://i.gifer.com/RsVc.gif",
            "https://i.gifer.com/92z9.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//PARTY COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "party")) {
        var images = [
            "https://i.gifer.com/ROpk.gif",
            "https://i.gifer.com/3YAK.gif",
            "https://i.gifer.com/Awch.gif",
            "https://i.gifer.com/1AIV.gif",
            "https://i.gifer.com/UnI.gif",
            "https://i.gifer.com/VlNr.gif",
            "https://i.gifer.com/2eSh.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//RAIN COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "rain")) {
        var images = [
            "https://i.gifer.com/ttj.gif",
            "https://i.gifer.com/xv.gif",
            "https://i.gifer.com/C887.gif",
            "https://i.gifer.com/BE0S.gif",
            "https://i.gifer.com/HM4p.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//SNOW COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "snow")) {
        var images = [
            "https://i.gifer.com/Gp8A.gif",
            "https://i.gifer.com/ZTW8.gif",
            "https://i.gifer.com/Iq9.gif",
            "https://i.gifer.com/DLf.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//THUNDER COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "thunder")) {
        var images = [
            "https://i.imgur.com/ApHJQwt.gif",
            "https://i.imgur.com/0uRRuJo.gif",
            "https://i.imgur.com/Z9noFt4.gif",
            "https://i.imgur.com/fmkeXk1.gif",
            "https://i.imgur.com/qs0aHI4.gif",
            "https://i.imgur.com/ba71I5d.gif",
            "https://i.imgur.com/EmAzgQq.gif",
            "https://i.imgur.com/toAvFkY.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//LIKE COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "like")) {
        var images = [
            "https://i.gifer.com/23P6.gif",
            "https://i.gifer.com/3r9J.gif",
            "https://i.gifer.com/CK5.gif",
            "https://i.gifer.com/OMT.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//BOS Q COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith("bosq")) {
        var images = [
            "https://i.imgur.com/yPPjjI0.gif",
            "https://i.imgur.com/XtpTWvN.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setAuthor(`I see that @${msg.author.username} bosq :)`)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//NICE COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "nice")) {
        var images = [
            "https://i.imgur.com/CiYvwIj.gif",
            "https://i.imgur.com/ccnsmC9.gif",
            "https://i.imgur.com/TKSKsH3.gif",
            "https://i.imgur.com/OhxtXNB.gif",
            "https://i.imgur.com/BqFleeY.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//NICE2 COMMANDE
bot.on("message", msg => {
    if (msg.content.startsWith(prefix + "cw")) {
        var images = [
            "https://i.gifer.com/HJx.gif",
            "https://i.gifer.com/8FQX.gif",
            "https://i.gifer.com/YRlo.gif",
            "https://i.gifer.com/36WM.gif",
            "https://i.gifer.com/36WM.gif",
            "https://i.gifer.com/3z5P.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setImage(random)
        msg.channel.send(embed);
        console.log("The woot-pic command was successfully performed")
    }
});
//HUG COMMANDE

bot.on("message", msg => {
    if (msg.content.startsWith("hug")) {
        var images = [
            "https://cdn.discordapp.com/attachments/423600550790168596/427094518031187968/S1AUrkz5l.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094518031187971/H1y1IJMce.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094518576316428/HJhyHJM9l.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094519226302474/B1BzEkMql.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094764882493440/SyiWzrIWx.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094765990051847/rJQcV1Gce.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094831894888458/r1xJBJMql.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094832583016489/S1L5lB8Zg.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094833245585419/SJerVJz9l.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094896009281546/SyC2H1f5g.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094896009281547/S1EDVyGcx.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094897120641034/HJTvVJGcx.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094951176831006/Byl2SyM5x.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427094951675822080/SJpmIyG5l.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427095019388665856/rkuOrJM9x.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427095019825135636/SyhrVyfqe.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427095019825135638/B1YAS1z9x.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427095123634159616/rykbHkf9l.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427095123634159617/rJZRV1Gcx.gif",
            "https://cdn.discordapp.com/attachments/423600550790168596/427095124405780480/BJ36E1G9x.gif"
        ];
        var random = images[Math.floor(Math.random() * images.length)];
        var embed = new Discord.RichEmbed()
            .setColor(0xffffff)
            .setTimestamp()
            .setAuthor(`I see that @${msg.author.username} hug someone :)`)
            .setImage(random)
            .setFooter("is a rain sweetener.VIP")
        msg.channel.send(embed);
        console.log("The hug command was successfully performed")
    }
});

// Start the client
bot.login(config.token);