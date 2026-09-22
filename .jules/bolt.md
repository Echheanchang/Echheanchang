## 2023-10-26 - [Mineflayer Event Loop Performance]
**Learning:** In this Mineflayer project, the `time` event (`bot.on('time')`) fires 20 times per second (every game tick). Performance optimizations should target this high-frequency loop.
**Action:** Avoid micro-optimizations on one-time initialization code and instead focus on reducing calculations inside `bot.on('time')`.
