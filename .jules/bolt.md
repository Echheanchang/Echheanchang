
## 2024-05-24 - Pre-calculating thresholds outside the 20Hz time loop
**Learning:** The `time` event fires 20 times per second. Calculating random values and intervals on every tick is a waste of CPU cycles and alters distribution logic over time.
**Action:** Pre-calculate interval thresholds and random values outside the 20Hz `time` loop, updating them only upon relevant state changes.
