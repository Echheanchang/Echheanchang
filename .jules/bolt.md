
## 2024-05-23 - Avoid Recalculating Constants in High-Frequency Tick Loops
**Learning:** In the `bot.on('time')` loop, which fires 20 times per second, recalculating the random interval variable on every tick is a waste of CPU cycles and `Math.random()` calls.
**Action:** Cache the calculated interval outside the tick loop and only recalculate it when the interval limit is actually reached and needs to be reset.
