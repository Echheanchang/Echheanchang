## 2026-09-14 - [Mineflayer time event optimization]
**Learning:** [The time event in mineflayer fires 20 times per second. Calculating random interval bounds inside this event loop is redundant and also skews the probability curve of wait times due to rolling RNG continuously.]
**Action:** [Identify heavy calculations inside high frequency loops (like mineflayer's time event) and move them to state transitions where possible.]
