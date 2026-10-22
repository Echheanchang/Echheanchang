## 2024-10-22 - Avoid Math.random() in 20Hz loop
**Learning:** In the Mineflayer `time` event (20Hz), calculating random thresholds on every tick wastes computation and messes up intended random interval distribution.
**Action:** Pre-calculate `Math.random()` and threshold targets on state change (e.g., when updating `lasttime`) to prevent redundant per-tick computation.
