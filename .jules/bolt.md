## 2023-10-02 - Cache Math.random() in high-frequency event loops
**Learning:** The `time` event in Mineflayer fires every game tick (20 times per second). Performing operations like `Math.random()` and calculating intervals on every tick, even when conditions are mostly unmet, causes unnecessary CPU overhead in the main loop.
**Action:** Cache the target interval value when the state changes and compare against the cached value during high-frequency events rather than recalculating the target on every tick.
