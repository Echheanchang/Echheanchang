## 2024-05-18 - Math.random() in 20Hz loop
**Learning:** Placing `Math.random()` or redundant threshold calculations inside the 20Hz `time` event loop wastes computation and skews expected distribution behavior because the random threshold is evaluated constantly against the elapsed time.
**Action:** Pre-calculate these threshold values on state changes to prevent wasteful computation and maintain intended distribution behavior.
