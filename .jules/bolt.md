
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-06-09 - [Framer Motion hooks inside array maps]
**Learning:** Violating React's Rules of Hooks by calling `useTransform` (or other Framer Motion hooks) directly inside an array `.map()` loop, especially for high-frequency scroll components, causes instability, order instability, and potential memory leaks during rendering.
**Action:** Always extract loop item bodies that require hooks into a separate functional component (e.g., `NarrativeWord`) so that hook calls comply with React's Rules of Hooks and maintain hook order stability.

## 2025-06-09 - [Static definitions in render cycle]
**Learning:** Defining static strings or running expensive calculations (e.g., `text.split(" ")`) inside the main functional component's render loop causes unnecessary garbage collection overhead and degraded performance, especially when the component relies on high-frequency scroll tracking via Framer Motion.
**Action:** To optimize React rendering performance and reduce garbage collection pressure, move static variable definitions and expensive operations outside of the functional component so they are evaluated only once globally.
