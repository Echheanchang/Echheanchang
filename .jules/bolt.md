## 2024-05-22 - Optimizing High-Frequency Game Loops
**Learning:** In Mineflayer, the `time` event fires 20 times per second (every game tick). Calling `Math.random()` and performing mathematical calculations on every single tick, even when no state change is occurring, wastes CPU cycles.
**Action:** Always hoist redundant calculations out of high-frequency event loops like `time` or `physicTick`. Calculate intervals and next action times only when the state actually changes.
