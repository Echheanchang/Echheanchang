const mineflayer = require('mineflayer')
const fs = require('fs');
let rawdata = fs.readFileSync('config.json');
let data = JSON.parse(rawdata);
var lasttime = -1;
var moving = 0;
var connected = 0;
var actions = [ 'forward', 'back', 'left', 'right']
var lastaction;
var moveinterval = 2; // 2 second movement interval
var maxrandom = 5; // 0-5 seconds added to movement interval (randomly)
var host = data["ip"];
var username = data["name"]
var bot = mineflayer.createBot({
  host: host,
  username: username
});

// ⚡ Bolt: Cache next interval calculation outside the 20hz tick loop
var nextInterval = moveinterval * 20 + Math.random() * maxrandom * 20;

bot.on('login',function(){
	console.log("Logged In")
});
bot.on('time', function() {
    if (connected < 1) {
        return;
    }
    if (lasttime < 0) {
        lasttime = bot.time.age;
    } else {
        if (bot.time.age - lasttime > nextInterval) {
            if (moving == 1) {
                bot.setControlState(lastaction, false);
                moving = 0;
                lasttime = bot.time.age;
                nextInterval = moveinterval * 20 + Math.random() * maxrandom * 20;
            } else {
                var yaw = Math.random() * Math.PI - (0.5 * Math.PI);
                var pitch = Math.random() * Math.PI - (0.5 * Math.PI);
                bot.look(yaw, pitch, false);
                lastaction = actions[Math.floor(Math.random() * actions.length)];
                bot.setControlState(lastaction, true);
                moving = 1;
                lasttime = bot.time.age;
                nextInterval = moveinterval * 20 + Math.random() * maxrandom * 20;
                bot.activateItem();
            }
        }
    }
});

bot.on('spawn',function() {
    connected=1;
});
