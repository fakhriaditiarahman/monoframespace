
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Extract loop items into separate components]
**Learning:** Found a pattern in `NarrativeScene` where `Framer Motion`'s `useTransform` hook was called inside a `.map()` loop block. This violates React's Rules of Hooks because the hook calls are dynamically generated based on array length, which can lead to unstable hook order, memory leaks, or re-render bugs.
**Action:** Always extract the body of a `.map()` loop that uses hooks into a separate functional component (e.g., `NarrativeWord`). This ensures each mapped item has its own stable component lifecycle and hook order, complying with React's Rules of Hooks while preserving the animation functionality. Additionally, moved static data generation (`text.split(' ')`) outside the render cycle to reduce garbage collection overhead on high-frequency render components.
