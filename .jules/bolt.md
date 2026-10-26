## 2024-05-24 - Pre-calculate threshold inside time event loop
**Learning:** Avoid placing `Math.random()` or redundant threshold calculations inside high-frequency event loops like Mineflayer's `time` event (20Hz).
**Action:** Pre-calculate these values on state changes to prevent wasteful computation.
