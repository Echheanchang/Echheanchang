## 2024-11-08 - Moving state-dependent calculations out of high-frequency tick loop
**Learning:** In high-frequency game loops (like Mineflayer's 20Hz `time` event), placing `Math.random()` or redundant threshold calculations inside the loop wastes compute cycles and causes subtle logical bugs (like continuously re-rolling a target condition).
**Action:** Always pre-calculate these values on state-change triggers rather than inside the main game tick.
