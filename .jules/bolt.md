
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [useTransform in map loops and text.split]
**Learning:** Found two anti-patterns in the scroll-driven text reveal components (e.g., NarrativeScene). First, using Framer Motion's `useTransform` hook inside a `.map` loop violates React's Rules of Hooks because the number of hooks or their order could change, potentially causing errors. Second, performing expensive operations like `text.split(" ")` directly inside the render cycle creates new arrays on every render, adding unnecessary garbage collection overhead during high-frequency scroll interactions.
**Action:** Always extract loop items into separate functional components (e.g., `NarrativeWord`) to ensure stable hook ordering and compliance with React's Rules of Hooks. Move static variable definitions and string splitting operations outside the functional component so they are evaluated only once globally.
