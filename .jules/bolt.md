## 2024-05-20 - High-frequency Loop Math Operations
**Learning:** Math.random() and arithmetic on every tick in high-frequency loops (like mineflayer time events, 20x/sec) wastes CPU. It can also skew randomization since re-rolling randomly against a delta time biases toward lower values.
**Action:** Extract random and math logic to only evaluate on state transitions, instead of on every tick.
