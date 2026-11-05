## 2024-05-18 - Pre-calculating intervals in 20Hz Mineflayer tick loop
**Learning:** Avoid placing `Math.random()` or redundant threshold calculations inside the 20Hz `time` event loop in Mineflayer. The calculation runs 20 times per second, which wastes CPU cycles, but additionally introduces subtle logical bugs by continuously re-rolling the threshold condition before it's met.
**Action:** Pre-calculate randomized intervals on state changes (e.g. when tracking the start time of the event) and store them in a state variable rather than computing them on every tick.
