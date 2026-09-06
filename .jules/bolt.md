## 2024-05-24 - Avoid per-tick calculations in Mineflayer time events
**Learning:** The `time` event in mineflayer fires 20 times per second (once per tick). Performing random number generation or recalculating static values on every tick is an anti-pattern.
**Action:** When a calculation only changes when a state changes, cache the calculation in a variable and only update it when the state actually changes, rather than recalculating it on every tick.
