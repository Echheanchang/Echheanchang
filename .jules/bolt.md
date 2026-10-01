
## 2023-10-01 - Avoid Math.random in high-frequency event loops
**Learning:** The Mineflayer 'time' event fires 20 times per second. Calculating random values continuously within this loop for static checks (like interval comparison) burns CPU cycles unnecessarily.
**Action:** Calculate and cache randomized target thresholds once per state change, comparing the current time against the cached value during the tick loop.
