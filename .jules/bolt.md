## 2024-05-18 - Math.random() in 20Hz Mineflayer tick loop
**Learning:** Calculating random intervals on every 20Hz `time` tick not only burns CPU cycles redundantly but also creates a subtle bug by re-rolling the threshold continuously before a state change.
**Action:** Pre-calculate `Math.random()` and interval thresholds on state changes (when `lasttime` is updated) and initialize on the first tick, moving calculations out of the main loop.
