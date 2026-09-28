## 2024-05-15 - Mineflayer time event frequency
**Learning:** In Mineflayer projects, the `time` event fires 20 times per second (every game tick). Calculating random intervals on every tick in `bot.on("time")` is a significant performance bottleneck and causes unintended skewed random interval distribution.
**Action:** Always extract static calculations or state transitions out of the `time` event loop to compute them only when the state actually changes.
