## 2024-05-23 - High-Frequency Event Loop Optimization
**Learning:** The Mineflayer time event fires 20 times per second. Placing non-essential calculations (like Math.random() or threshold math) inside this loop causes wasteful computation and unintended behavioral fluctuations.
**Action:** Pre-calculate randomized intervals and thresholds on state changes (e.g., when a timer expires or starts) rather than re-evaluating them every tick.
