## 2024-10-30 - Mineflayer 20Hz Time Event Overhead
**Learning:** Placing `Math.random()` or state-dependent threshold calculations inside the Mineflayer 20Hz `time` event loop wastes compute cycles and can introduce subtle logical bugs (like continuously re-rolling a target threshold).
**Action:** Always pre-calculate randomized interval thresholds outside the high-frequency tick loop and update them only on state changes.
