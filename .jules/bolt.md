## 2024-05-23 - Optimize Mineflayer 'time' event
**Learning:** In this Mineflayer project, the `time` event (`bot.on('time')`) fires 20 times per second (every game tick). Performance optimizations should target this high-frequency loop, as things like Math.random() in the event listener can execute very frequently without reason.
**Action:** Avoid per-tick calculations. Calculate random intervals and state only when the state changes (e.g., when the interval resets) instead of recalculating on every tick.
