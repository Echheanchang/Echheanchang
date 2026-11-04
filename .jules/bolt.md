## 2024-10-24 - Pre-calculating variables in 20Hz loop
**Learning:** Math.random() inside the Mineflayer 20Hz 'time' event loop causes wasteful computation and alters intended interval distributions.
**Action:** Pre-calculate variables (like currentInterval) during state changes instead of continuously re-calculating them inside the loop.
