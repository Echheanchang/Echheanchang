## 2024-05-24 - Pre-calculate Interval Thresholds in High-Frequency Events
**Learning:** Placing `Math.random()` and redundant threshold calculations inside the 20Hz `time` event loop in mineflayer causes wasteful computation and alters intended probability distributions over time.
**Action:** Pre-calculate these thresholds outside the loop and update them only upon state changes (e.g. state transition from moving to waiting).
