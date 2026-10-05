## 2024-10-05 - Avoid Math.random() in high-frequency event loops
**Learning:** The `time` event in Mineflayer fires every game tick (20Hz). Generating random values every tick for time-based comparisons is computationally wasteful and mathematically incorrect (distorts the uniform distribution).
**Action:** Pre-calculate random intervals and only recalculate them when the interval has actually elapsed to optimize the hot loop.
