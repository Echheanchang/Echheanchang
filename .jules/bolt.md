
## 2024-05-18 - Avoid 20Hz Tick Computations
**Learning:** The `bot.on('time')` event fires 20 times per second (Minecraft game tick). Re-rolling randomized logic (like intervals) on every tick wastes CPU cycles and inadvertently alters the target distribution.
**Action:** Always extract state-dependent calculations out of high-frequency game loops (like 20Hz `time` events). Pre-calculate these values and only update them on discrete state changes to ensure deterministic behavior and save compute.
