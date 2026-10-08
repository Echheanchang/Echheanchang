## 2024-05-18 - Math.random() in 20Hz Event Loops
**Learning:** In Mineflayer projects, placing calculations like Math.random() in the `time` event loop (which fires 20 times per second) results in unnecessary computations when state hasn't changed.
**Action:** Always pre-calculate random values or thresholds on state changes rather than inside high-frequency event loops like 20Hz game ticks.
