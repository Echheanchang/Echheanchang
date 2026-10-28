## 2023-10-28 - Avoid redundant threshold calculations inside 20Hz loop
**Learning:** The `time` event fires 20 times per second, and calculating `Math.random()` thresholds within it is computationally wasteful and can skew behavior.
**Action:** Pre-calculate these values on state changes to maintain distribution behavior without wasting CPU cycles.
