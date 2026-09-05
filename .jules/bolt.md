## 2026-09-05 - Event Loop Efficiency
**Learning:** In Mineflayer bots, the `time` event fires 20 times per second. Recalculating state or running Math.random() inside this event is a performance bottleneck and can skew logic.
**Action:** Always cache variables outside of tick loops and recalculate them only on state transitions.
