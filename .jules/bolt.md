
## 2025-01-20 - Prevent Redundant Calculations in High-Frequency Game Loops
**Learning:** Recalculating randomized thresholds inside a high-frequency loop (like Mineflayer's 20Hz `time` event) burns compute cycles and continuously alters the target condition.
**Action:** Extract state-dependent random threshold calculations outside of the continuous loop and trigger them only on specific state transitions.
