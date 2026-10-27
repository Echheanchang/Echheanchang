## 2024-05-24 - Pre-calculating thresholds outside high-frequency event loops
**Learning:** In Mineflayer, the `time` event runs at 20Hz. Placing `Math.random()` or interval calculations directly in this loop causes unnecessary redundant computations every tick, as the value only needs to change when the bot's state changes (e.g., toggling movement).
**Action:** Pre-calculate intervals and random threshold values during state changes or initialization, and store them in variables to be checked efficiently inside high-frequency event handlers.
