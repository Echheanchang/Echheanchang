## 2024-05-18 - Math.random() in 20Hz Game Loop
**Learning:** Calling `Math.random()` and recalculating interval thresholds continuously inside the Mineflayer 20Hz `time` event wastes compute cycles and causes subtle logical bugs by continuously re-rolling a target condition.
**Action:** Pull state-dependent calculations (like randomized interval thresholds) out of the high-frequency game loop and pre-calculate them only on state-change triggers.
