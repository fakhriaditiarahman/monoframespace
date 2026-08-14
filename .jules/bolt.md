
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [useTransform inside map loops and static array extraction]
**Learning:** Found an anti-pattern in the codebase where Framer Motion's `useTransform` hook was called inside a `.map()` loop during component rendering. This is a strict violation of React's Rules of Hooks. Furthermore, expensive operations like `text.split(" ")` were performed inside the render function of high-frequency scroll components, leading to unnecessary garbage collection overhead.
**Action:** Always extract the mapped iteration into a separate functional component (e.g., `NarrativeWord`) when it requires hooks like `useTransform`. Move static variable definitions and expensive operations (e.g., `const NARRATIVE_WORDS = text.split(" ")`) outside of the functional component so they are evaluated only once globally to optimize React rendering performance and reduce garbage collection overhead.
