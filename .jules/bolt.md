## 2024-10-06 - Pre-calculating variables outside high-frequency game ticks
**Learning:** Placing `Math.random()` or redundant threshold calculations inside the 20Hz `time` event loop wastes computation every tick and can warp probability distributions since thresholds change constantly before being met.
**Action:** Pre-calculate these values when state changes occur (e.g. interval triggers) rather than calculating them on every single tick.
