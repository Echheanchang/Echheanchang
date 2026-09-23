## 2024-05-18 - Cached random threshold calculation inside high-frequency `time` event loop
**Learning:** `Math.random()` inside the `bot.on("time")` high-frequency tick loop recalculates the threshold 20 times per second which is unnecessary. Precalculating the interval at the beginning of each cycle is far more efficient.
**Action:** When a loop triggers 20 times per second, look for threshold calculations involving random variables that can be cached and computed only on state changes.
