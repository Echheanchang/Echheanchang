## 2024-10-11 - Pre-calculating thresholds in 20Hz loops
**Learning:** In Mineflayer bots, the `time` event fires 20 times per second. Placing `Math.random()` or redundant interval calculations inside this loop creates significant wasteful computation over time.
**Action:** Always pre-calculate random delays or thresholds on state changes rather than evaluating them every tick.
