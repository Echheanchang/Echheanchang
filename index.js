const mineflayer = require('mineflayer')
const fs = require('fs');
let rawdata = fs.readFileSync('config.json');
let data = JSON.parse(rawdata);
var nextActionTime = -1;
var moving = 0;
var connected = 0;
var actions = [ 'forward', 'back', 'left', 'right']
var lastaction;
var pi = 3.14159;
var moveinterval = 2; // 2 second movement interval
var maxrandom = 5; // 0-5 seconds added to movement interval (randomly)
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

// Helper to calculate next action time based on movement intervals
function calculateNextActionTime(currentAge) {
    var randomadd = Math.random() * maxrandom * 20;
    var interval = moveinterval * 20 + randomadd;
    return currentAge + interval;
}

bot.on('time', function() {
    if (connected < 1) {
        return;
    }
    if (nextActionTime < 0) {
        // Initialize next action time
        nextActionTime = calculateNextActionTime(bot.time.age);
    } else {
        // ⚡ Bolt Optimization:
        // By checking if the current age is greater than nextActionTime first,
        // we avoid calculating `Math.random()` and `interval` 20 times per second
        // when the bot is just waiting.
        if (bot.time.age > nextActionTime) {
            if (moving == 1) {
                bot.setControlState(lastaction, false);
                moving = 0;
                nextActionTime = calculateNextActionTime(bot.time.age);
            } else {
                var yaw = Math.random() * pi - (0.5 * pi);
                var pitch = Math.random() * pi - (0.5 * pi);
                bot.look(yaw, pitch, false);
                lastaction = actions[Math.floor(Math.random() * actions.length)];
                bot.setControlState(lastaction, true);
                moving = 1;
                nextActionTime = calculateNextActionTime(bot.time.age);
                bot.activateItem();
            }
        }
    }
});

bot.on('spawn',function() {
    connected=1;
});

