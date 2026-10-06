const mineflayer = require('mineflayer')
const fs = require('fs');
let rawdata = fs.readFileSync('config.json');
let data = JSON.parse(rawdata);
var lasttime = -1;
var moving = 0;
var connected = 0;
var actions = [ 'forward', 'back', 'left', 'right']
var lastaction;
var pi = 3.14159;
var moveinterval = 2; // 2 second movement interval
var maxrandom = 5; // 0-5 seconds added to movement interval (randomly)
var currentInterval = 0;
var host = data["ip"];
var username = data["name"]
var bot = mineflayer.createBot({
  host: host,
  username: username
});
function getRandomArbitrary(min, max) {
       return Math.random() * (max - min) + min;

}
bot.on('login',function(){
	console.log("Logged In")
});
bot.on('time', function() {
    if (connected <1) {
        return;
    }
    if (lasttime<0) {
        lasttime = bot.time.age;
        // BOLT PERFORMANCE OPTIMIZATION: Pre-calculate interval when starting
        currentInterval = moveinterval*20 + (Math.random() * maxrandom * 20);
    } else {
        // BOLT PERFORMANCE OPTIMIZATION: Don't calculate random values in the 20Hz time event loop.
        // It wastes computation and warps probability distributions.
        // Use the pre-calculated `currentInterval` instead.
        if (bot.time.age - lasttime > currentInterval) {
            if (moving == 1) {
                bot.setControlState(lastaction,false);
                moving = 0;
                lasttime = bot.time.age;
                // Pre-calculate next interval
                currentInterval = moveinterval*20 + (Math.random() * maxrandom * 20);
            } else {
                var yaw = Math.random()*pi - (0.5*pi);
                var pitch = Math.random()*pi - (0.5*pi);
                bot.look(yaw,pitch,false);
                lastaction = actions[Math.floor(Math.random() * actions.length)];
                bot.setControlState(lastaction,true);
                moving = 1;
                lasttime = bot.time.age;
                bot.activateItem();
                // Pre-calculate next interval
                currentInterval = moveinterval*20 + (Math.random() * maxrandom * 20);
            }
        }
    }
});

bot.on('spawn',function() {
    connected=1;
});

