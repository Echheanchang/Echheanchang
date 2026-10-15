## 2024-10-15 - Extract Math.random() from high-frequency tick loop
**Learning:** In the Mineflayer bot `time` event (firing 20 times/sec), recalculating `Math.random()` for a static threshold on every tick wastes CPU cycles and alters intended probability distributions.
**Action:** Pre-calculate `Math.random()` intervals on state changes to maintain intended behavior and eliminate wasteful computation in the 20Hz loop.
