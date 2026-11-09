
## 2024-05-18 - Pre-calculating randomized intervals out of high-frequency game loops
**Learning:** In Mineflayer's 20Hz 'time' event loop, placing `Math.random()` threshold calculations inside the loop causes continuous re-rolling of the target condition. This both wastes CPU cycles and introduces a subtle logical bug where the interval triggers earlier than expected due to probability distributions.
**Action:** Pre-calculate randomized state-dependent thresholds on initialization and re-calculate them only during state-change triggers (e.g., when resetting timers).
