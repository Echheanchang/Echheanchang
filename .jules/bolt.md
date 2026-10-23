## 2024-05-23 - Pre-calculating thresholds in high-frequency event loops
**Learning:** Placing `Math.random()` or redundant threshold calculations inside a 20Hz `time` event loop (like Mineflayer's) causes wasteful computation on every tick without changing the fundamental logic.
**Action:** Always pre-calculate random thresholds or static intervals on state changes (e.g., when resetting the timer) rather than on every tick.
