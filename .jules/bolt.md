## 2024-09-26 - High-frequency Loop Optimizations in Mineflayer
**Learning:** The `bot.on('time')` event fires 20 times per second. Calculating random values and intervals on every tick is a redundant performance drain and logically flawed.
**Action:** Extract repetitive static or randomly pre-calculated values out of the hot loop and update them only when state changes.
