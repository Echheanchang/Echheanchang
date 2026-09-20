## 2024-05-14 - Mineflayer Hot Loop Math Calculation
**Learning:** The `time` event in mineflayer fires 20 times per second. Calculating random values or thresholds within this event handler not only creates a performance bottleneck in the hot loop but can also skew statistical distributions (e.g., generating a new random interval every tick).
**Action:** Cache threshold values and random calculations outside the `time` event handler. Only recalculate them when state transitions occur.
