
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Extracting hooks in scroll-heavy loops and preventing GC overhead]
**Learning:** Found a violation of React's Rules of Hooks in the codebase where Framer Motion's `useTransform` was being called inside a `.map()` loop during render, which breaks hook order stability. Furthermore, defining static strings and performing operations like `.split(' ')` inside a scroll-heavy component triggers unnecessary garbage collection overhead on every re-render.
**Action:** When implementing high-frequency scroll animations over arrays, always extract the mapped elements into separate functional components so that hooks like `useTransform` comply with React rules. Additionally, move static variable definitions and expensive computations (like string splitting) outside of the functional component to minimize garbage collection pressure.
