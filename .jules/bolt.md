
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.
## 2024-06-03 - [Framer Motion] useTransform inside Array.map() Anti-pattern
**Learning:** Calling `useTransform` directly inside an inline `.map()` loop in a component violates React's Rules of Hooks. It compromises hook order stability and leads to performance degradation (garbage collection pressure) and potential re-render bugs, especially in scroll-heavy components like `NarrativeScene`. Additionally, declaring large static strings and performing operations like `.split(' ')` inside the component body recalculates unnecessarily on every render.
**Action:** Always extract the loop body into a separate functional child component (e.g., `NarrativeWord`) so that hooks like `useTransform` can be used safely and comply with hook rules. Furthermore, move static variables and expensive computations (like string splits) completely outside of the functional component so they are evaluated only once globally.
