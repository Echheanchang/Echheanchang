## 2024-05-15 - [Avoid redundant computations in hot loops]
**Learning:** The `time` event in Mineflayer (`bot.on(time)`) runs 20 times a second, which is a hot loop.
**Action:** When calculating intervals or thresholds in the `time` loop, ensure they are pre-calculated to avoid redundant `Math.random()` or complex arithmetic, making the bot significantly more efficient over long periods.
