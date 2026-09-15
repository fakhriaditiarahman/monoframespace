
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Extract static operations and fix hooks inside .map()]
**Learning:** Found a component (`NarrativeScene`) performing expensive operations like `text.split(' ')` inside the render function and calling a React Hook (`useTransform`) directly inside a `.map()` array iteration. Not only does `text.split(' ')` create unnecessary garbage collection pressure on every render, but calling hooks inside a loop is a strict violation of React's Rules of Hooks and can cause inconsistent render behavior.
**Action:** Always move static variable definitions and string parsing (e.g., `text.split(' ')`) outside of the functional component so they evaluate only once globally. Always extract elements mapped in a loop that require hooks into a separate functional component (e.g., `<NarrativeWord />`) to ensure hook order stability and compliance.
