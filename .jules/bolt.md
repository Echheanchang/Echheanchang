## 2024-05-18 - High frequency event loop in mineflayer
**Learning:** Mineflayer fires the `bot.on("time")` event every game tick (20 times per second). Heavy operations like `Math.random()` or complex object creation inside this event listener add up quickly and can lead to performance degradation.
**Action:** Always inspect the code inside `bot.on("time")` for operations that can be moved outside the loop or pre-calculated and cached. Only recalculate these values when the relevant state actually changes.
