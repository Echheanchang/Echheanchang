## 2024-05-18 - Avoid Random and Math inside High-Frequency Event Loops
**Learning:** Found a performance pattern where `Math.random()` and redundant threshold calculations were being executed 20 times a second inside the `bot.on('time')` event loop.
**Action:** Pre-calculate these thresholds outside the loop or on specific state changes to avoid unnecessary execution in the 20Hz tick loop.
