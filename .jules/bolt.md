
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Extracting static transformations from render loops and Hook violations in maps]
**Learning:** Found an anti-pattern where a static text string was being split (`text.split(" ")`) inside the functional body of a React component during every render. Coupled with this, `useTransform` was being called inside an array `.map()` loop (a direct violation of React's Rules of Hooks). This caused both unnecessary garbage collection overhead due to creating new arrays on every render (especially problematic during high-frequency scroll animations) and unpredictable behavior/memory leaks due to unstable hook order.
**Action:** Always extract static data transformations (like splitting constant strings into arrays) outside the component body. When iterating over arrays to generate animated elements that require Framer Motion hooks (like `useTransform`), extract the mapped element into a separate functional component. This ensures the hook is called at the top level of the child component, stabilizing the hook order and preventing Rules of Hooks violations.
