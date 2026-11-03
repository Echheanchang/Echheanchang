## 2024-11-03 - Avoid Math.random() in 20Hz Mineflayer tick loop
**Learning:** Placing state-dependent calculations (like randomized interval thresholds) inside the high-frequency 20Hz `time` event loop is a bottleneck and fixes subtle logical bugs, such as continuously re-rolling a target condition.
**Action:** Pre-calculate these values on state changes to prevent wasteful computation and maintain intended distribution behavior.
