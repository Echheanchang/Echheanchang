## 2024-05-24 - Pre-calculate intervals
**Learning:** Placing Math.random() inside the 20Hz 'time' event loop causes unnecessary compute cycle waste and logically re-rolls the threshold continuously.
**Action:** Move interval calculations out of the 20Hz loop and pre-calculate them only upon state changes (e.g. initialization and after moving stops/starts).
