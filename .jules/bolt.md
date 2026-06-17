## 2024-11-20 - Extract Map Content in High-Frequency Scroll Components
**Learning:** Using Framer Motion hooks like `useTransform` directly inside an array `.map()` loop in a scroll-heavy component violates React Rules of Hooks and causes severe re-render bugs / GC pressure.
**Action:** Always extract the loop body into a separate child component and pass the parent `scrollYProgress` as a prop to ensure stable hook order and isolated evaluation.
