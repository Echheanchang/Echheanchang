## 2024-10-24 - Pre-calculate threshold values in high-frequency loops
**Learning:** Avoid placing Math.random() or redundant threshold calculations inside 20Hz event loops (like Mineflayer's time event) as it wastes computation and alters intended random distribution behavior.
**Action:** Pre-calculate these threshold values on state changes instead of computing them redundantly every tick.
