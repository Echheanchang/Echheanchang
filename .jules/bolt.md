## 2024-05-24 - Early Return in High-Frequency Game Loops
**Learning:** In Minecraft bot development (e.g. Mineflayer), the time event fires 20 times per second. Computations like Math.random() inside this loop add up quickly.
**Action:** Use early returns to skip unnecessary calculations during guaranteed wait periods (e.g., minimum intervals) within high-frequency tick loops.
