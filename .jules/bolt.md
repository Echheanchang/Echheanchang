## 2024-05-24 - Pre-calculating thresholds outside high-frequency game loops
**Learning:** In Mineflayer, the 20Hz 'time' event fires 20 times per second. Calculating `Math.random()` and updating thresholds on every tick wastes compute cycles and can skew randomized distributions.
**Action:** Always pre-calculate randomized interval thresholds on state-change triggers rather than inside the main game loop tick handler.
