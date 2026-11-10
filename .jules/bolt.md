## 2024-05-18 - Math.random() in High-Frequency Game Loops
**Learning:** In the Mineflayer bot, the `time` event fires 20 times per second. Putting `Math.random()` to determine random intervals directly inside this loop is both a performance waste and a subtle logical bug (constantly re-rolling the threshold).
**Action:** Always extract state-dependent randomized thresholds into the state-change triggers (e.g., when the interval resets) rather than evaluating them on every tick.
