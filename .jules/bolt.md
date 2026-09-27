## 2024-09-27 - Mineflayer High-Frequency Time Loop
**Learning:** In this Mineflayer project, the `time` event (`bot.on('time')`) fires 20 times per second (every game tick). Performance optimizations should target this high-frequency loop and avoid micro-optimizations on one-time initialization code (like parsing `config.json`) which yield no measurable impact.
**Action:** Extract expensive operations like `Math.random()` from the `time` tick loop so they are only calculated when a state transition actually happens.
