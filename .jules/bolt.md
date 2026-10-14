## 2024-10-14 - Pre-calculate values to avoid 20Hz loop overhead
**Learning:** In Mineflayer projects, the `bot.on('time')` event fires 20 times per second. Placing continuous random evaluations (like `Math.random()`) or threshold calculations here wastes CPU and skews probability distributions.
**Action:** Always pre-calculate random values and thresholds during state transitions, rather than computing them repeatedly inside the high-frequency tick loop.
