## 2024-05-30 - Math.random() in time event loop
**Learning:** Placing `Math.random()` or redundant threshold calculations inside the 20Hz `time` event loop is a performance bottleneck.
**Action:** Pre-calculate these values on state changes to prevent wasteful computation and maintain intended distribution behavior.
