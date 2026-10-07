## 2024-05-23 - Avoid Math.random in 20Hz time loops
**Learning:** Placing `Math.random()` and threshold calculations inside the 20Hz `time` event loop is not only inefficient but also inadvertently skews randomness because the condition will trigger early if a smaller random number is rolled during any tick.
**Action:** Pre-calculate these thresholds on state changes (when actions complete) to maintain uniform distribution and prevent wasteful 20Hz computation.
