## 2025-01-28 - Pre-calculating randomized intervals out of the 20Hz tick
**Learning:** Math.random() interval generation was happening every single server tick (20 times per second), creating unnecessary computation and unreliable interval times because the target interval fluctuated each tick.
**Action:** Always pre-calculate random threshold values for periodic events in the `time` listener to prevent wasteful execution within 20Hz event loops.
