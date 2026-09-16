## 2024-11-20 - Optimize interval calculations in high-frequency events
**Learning:** Calculating random intervals dynamically inside a high-frequency tick event (like Mineflayer's 20 TPS `time` event) consumes unnecessary CPU cycles on every tick.
**Action:** When working with polling or threshold-based logic in event loops, calculate random/variable thresholds once during state transitions instead of re-evaluating them every loop iteration.
