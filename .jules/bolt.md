## 2024-11-20 - Avoid Math operations in Mineflayer `time` event handler
**Learning:** The Mineflayer `time` event (`bot.on('time')`) fires 20 times per second (every game tick). Executing `Math.random()`, multiplication, and addition operations inside this handler on every tick—even when just idling and checking an interval—wastes CPU cycles.
**Action:** Calculate the target interval duration once when transitioning state (e.g. when beginning a new idle period), store it, and in the `time` handler only do a simple subtraction/comparison check against the pre-calculated value.
