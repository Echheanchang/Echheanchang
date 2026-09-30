## 2026-09-30 - Mineflayer Tick Event Optimization
**Learning:** The `bot.on('time')` event fires 20 times per second. Any calculations inside this loop, especially `Math.random()` and arithmetic, compound quickly.
**Action:** Move stateful interval calculations out of the tick loop and calculate them only when state changes (e.g., when resetting `lasttime`).
