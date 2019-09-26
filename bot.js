var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const fs = require('fs');
const lucky = JSON.parse(fs.readFileSync('luckydata.json'))
const aloe = JSON.parse(fs.readFileSync('aloedata.json'))


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');


});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    switch(userID) {
        case "550094850180251652":
            var userData = lucky;
            break;
        case "540743853129465867":
            var userData = aloe;
            break;
    }

    logger.info(userID);
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);

        seed = Math.round(Math.random()*20);
        switch(cmd) {
            // !ping
            case 'charinfo':
                bot.sendMessage({
                    to: channelID,
                    message: '**Name:** ' + userData.player + '\n'
                        + '**Level:** ' + userData.lvl + '\t' + '**Race:** ' + userData.race + '\n'  
                        + '**Class:** ' + userData.class + '\t' + '**Archetype:** ' + userData.specialization 
                });
            break;
            case 'abilitysave':
                bot.sendMessage({
                    to: channelID,
                    message: '**Ability Save**: 1d20 (' + seed + ') + { ability saving throw modifier }'
                });
            break;
            case 'abilitycheck':
                bot.sendMessage({
                    to: channelID,
                    message: '**Ability Check**: 1d20 (' + seed + ') + { ability modifier }'
                });
            break;

            // strength related rolls

            case 'strsave':
                bot.sendMessage({
                    to: channelID,
                    message: '**Strength Save**: 1d20 (' + seed + ') + STR saving bonus (' + userData.strsave + ') = ' + '**' + (seed + userData.strsave) + '**'
                });
            break;
            case 'strcheck':
                bot.sendMessage({
                    to: channelID,
                    message: '**Strength Check**: 1d20 (' + seed + ') + STR bonus (' + userData.strbonus + ') = ' + '**' + (seed + userData.strbonus) + '**'
                });
            break;
            case 'athletics': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Athletics Check**: 1d20 (' + seed + ') + athletics bonus (' + userData.athletics + ') = ' + '**' + (seed + userData.athletics) + '**'
                });
            break;

            // dex related rolls

            case 'dexsave':
                bot.sendMessage({
                    to: channelID,
                    message: '**Dexterity Save**: 1d20 (' + seed + ') + DEX saving bonus (' + userData.dexsave + ') = ' + '**' + (seed + userData.dexsave) + '**'
                });
            break;
            case 'dexcheck':
                bot.sendMessage({
                    to: channelID,
                    message: '**Dexterity Check**: 1d20 (' + seed + ') + DEX bonus (' + userData.dexbonus + ') = ' + '**' + (seed + userData.dexbonus) + '**'
                });
            break;
            case 'acrobatics': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Acrobatics Check**: 1d20 (' + seed + ') + acrobatics bonus (' + userData.acrobatics + ') = ' + '**' + (seed + userData.acrobatics) + '**'
                });
            break;
            case 'sleightofhand': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Sleight of Hand Check**: 1d20 (' + seed + ') + sleight of hand bonus (' + userData.sleightofhand + ') = ' + '**' + (seed + userData.sleightofhand) + '**'
                });
            break;
            case 'stealth': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Stealth Check**: 1d20 (' + seed + ') + stealth bonus (' + userData.stealth + ') = ' + '**' + (seed + userData.stealth) + '**'
                });
            break;

            // int related rolls

            case 'intsave':
                bot.sendMessage({
                    to: channelID,
                    message: '**Intelligence Save**: 1d20 (' + seed + ') + INT saving bonus (' + userData.intsave + ') = ' + '**' + (seed + userData.intsave) + '**'
                });
            break;
            case 'intcheck':
                bot.sendMessage({
                    to: channelID,
                    message: '**Intelligence Check**: 1d20 (' + seed + ') + INT bonus (' + userData.intbonus + ') = ' + '**' + (seed + userData.intbonus) + '**'
                });
            break;
            case 'arcana': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Arcana Check**: 1d20 (' + seed + ') + arcana bonus (' + userData.arcana + ') = ' + '**' + (seed + userData.arcana) + '**'
                });
            break;
            case 'history': 
                bot.sendMessage({
                    to: channelID,
                    message: '**History Check**: 1d20 (' + seed + ') + history bonus (' + userData.history + ') = ' + '**' + (seed + userData.history) + '**'
                });
            break;
            case 'investigation': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Investigation Check**: 1d20 (' + seed + ') + investigation bonus (' + userData.investigation + ') = ' + '**' + (seed + userData.investigation) + '**'
                });
            break;
            case 'nature': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Nature Check**: 1d20 (' + seed + ') + nature bonus (' + userData.nature + ') = ' + '**' + (seed + userData.nature) + '**'
                });
            break;
            case 'religion': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Religion Check**: 1d20 (' + seed + ') + religion bonus (' + userData.religion + ') = ' + '**' + (seed + userData.religion) + '**'
                });
            break;

            // con related rolls

            case 'consave':
                bot.sendMessage({
                    to: channelID,
                    message: '**Constitution Save**: 1d20 (' + seed + ') + CON saving bonus (' + userData.consave + ') = ' + '**' + (seed + userData.consave) + '**'
                });
            break;
            case 'concheck':
                bot.sendMessage({
                    to: channelID,
                    message: '**Constitution Check**: 1d20 (' + seed + ') + CON bonus (' + userData.conbonus + ') = ' + '**' + (seed + userData.conbonus) + '**'
                });
            break;

            // cha related rolls

            case 'chasave':
                bot.sendMessage({
                    to: channelID,
                    message: '**Charisma Save**: 1d20 (' + seed + ') + CHA saving bonus (' + userData.chasave + ') = ' + '**' + (seed + userData.chasave) + '**'
                });
            break;
            case 'chacheck':
                bot.sendMessage({
                    to: channelID,
                    message: '**Charisma Check**: 1d20 (' + seed + ') + CHA bonus (' + userData.chabonus + ') = ' + '**' + (seed + userData.chabonus) + '**'
                });
            break;
            case 'deception': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Deception Check**: 1d20 (' + seed + ') + deception bonus (' + userData.deception + ') = ' + '**' + (seed + userData.deception) + '**'
                });
            break;
            case 'intimidation': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Intimidation Check**: 1d20 (' + seed + ') + intimidation bonus (' + userData.intimidation + ') = ' + '**' + (seed + userData.intimidation) + '**'
                });
            break;
            case 'performance': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Performance Check**: 1d20 (' + seed + ') + performance bonus (' + userData.performance + ') = ' + '**' + (seed + userData.performance) + '**'
                });
            break;
            case 'persuasion': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Persuasion Check**: 1d20 (' + seed + ') + persuasion bonus (' + userData.persuasion + ') = ' + '**' + (seed + userData.persuasion) + '**'
                });
            break;

            // wis related rolls

            case 'wissave':
                bot.sendMessage({
                    to: channelID,
                    message: '**Wisdom Save**: 1d20 (' + seed + ') + WIS saving bonus (' + userData.wissave + ') = ' + '**' + (seed + userData.wissave) + '**'
                });
            break;
            case 'wischeck':
                bot.sendMessage({
                    to: channelID,
                    message: '**Wisdom Check**: 1d20 (' + seed + ') + WIS bonus (' + userData.wischeck + ') = ' + '**' + (seed + userData.wischeck) + '**'
                });
            break;
            case 'animalhandling': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Animal Handling Check**: 1d20 (' + seed + ') + animal handling bonus (' + userData.animalhandling + ') = ' + '**' + (seed + userData.animalhandling) + '**'
                });
            break;
            case 'insight': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Insight Check**: 1d20 (' + seed + ') + insight bonus (' + userData.insight + ') = ' + '**' + (seed + userData.insight) + '**'
                });
            break;
            case 'medicine': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Medicine Check**: 1d20 (' + seed + ') + medicine bonus (' + userData.medicine + ') = ' + '**' + (seed + userData.medicine) + '**'
                });
            break;
            case 'perception': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Perception Check**: 1d20 (' + seed + ') + perception bonus (' + userData.perception + ') = ' + '**' + (seed + userData.perception) + '**'
                });
            break;
            case 'survival': 
                bot.sendMessage({
                    to: channelID,
                    message: '**Survival Check**: 1d20 (' + seed + ') + survival bonus (' + userData.survival + ') = ' + '**' + (seed + userData.survival) + '**'
                });
            break;
            // weapon related rolls 

            case 'weaponhit':
                bot.sendMessage({
                    to: channelID,
                    message: '1d20 + { proficiency } + { dex modifier ( ranged ) / str modifier ( melee ) }'
                });
            break;
            case 'weapondmg':
                bot.sendMessage({
                    to: channelID,
                    message: '{ weapon die } + { dex modifier ( ranged ) / str modifier ( melee ) }'
                });
            break;
            case 'spellhit':
                bot.sendMessage({
                    to: channelID,
                    message: '1d20 + { spell modifier } + { proficiency }'
                });
            break;
            case 'spelldmg':
                bot.sendMessage({
                    to: channelID,
                    message: '{ spell die } + { spell modifier } + { proficiency }'
                });
            break;

         }
     }
});
