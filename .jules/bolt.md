## 2026-10-25 - Extracted Math.random() from 20Hz Loop
**Learning:** In Mineflayer, the `time` event fires 20 times a second. Computing redundant thresholds like `Math.random()` in this loop is wasteful and breaks intended random distribution (as evaluating a new random threshold each tick skews the timing).
**Action:** Pre-calculate random delays on state transitions instead of re-evaluating them dynamically within high-frequency event loops like `bot.on('time')`.
