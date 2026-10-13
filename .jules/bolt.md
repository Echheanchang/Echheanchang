## 2024-05-24 - Pre-calculating variables in 20Hz tick loops
**Learning:** Avoid placing `Math.random()` or redundant threshold calculations inside the 20Hz `time` event loop as it fires frequently.
**Action:** Pre-calculate threshold values on state changes to prevent wasteful computation and maintain intended distribution behavior.
