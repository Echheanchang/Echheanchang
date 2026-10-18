## 2024-05-24 - Pre-calculate logic outside 20Hz loops
**Learning:** In Mineflayer, the `time` event fires 20 times per second. Calculating `Math.random()` and thresholds inside this loop wastes CPU cycles and distorts intended probability distributions.
**Action:** Pre-calculate interval thresholds on state changes (e.g. when initiating a wait/movement) and reuse the static threshold in the high-frequency event loop.
