
## 2024-05-24 - Pre-calculate threshold in 20Hz loop
**Learning:** Avoid placing `Math.random()` or redundant threshold calculations inside the 20Hz `time` event loop. Calculating a random value every tick defeats the purpose of choosing a specific random interval.
**Action:** Pre-calculate these values on state changes to prevent wasteful computation and maintain intended distribution behavior.
