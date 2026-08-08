
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-14 - [useTransform inside .map()]
**Learning:** Calling React hooks like Framer Motion's `useTransform` inside an array `.map()` loop within a component's render function is a strict violation of React's Rules of Hooks. It can lead to unstable hook order and performance issues.
**Action:** Always extract the mapped iteration into a separate functional component. In high-frequency scroll components like `NarrativeScene`, extracting loop items into separate functional components ensures compliance with Rules of Hooks and maintains stability.

## 2025-02-14 - [Static variables inside render functions]
**Learning:** Defining static strings and performing expensive operations like `text.split(' ')` inside functional components causes the variables to be recreated and the operations to be re-evaluated on every render, increasing garbage collection overhead, especially in scroll-heavy components.
**Action:** Move static variable definitions and expensive operations outside of the functional component so they are evaluated only once globally to optimize React rendering performance.
