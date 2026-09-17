## 2026-09-17 - [Optimize tick event operations]
**Learning:** In high-frequency loops, such as Mineflayer's `bot.on('time')` which triggers 20 times per second, executing mathematical calculations like `Math.random()` and simple variable multiplication on each tick introduces unnecessary performance overhead if the result isn't needed or changes infrequently.
**Action:** Extract fixed or less frequent variable recalculations, such as action intervals, out of the main tick execution path and only calculate them on state transition (e.g., when the interval is exhausted).
