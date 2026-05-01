
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Extract static text splitting and isolate useTransform hooks in loops]
**Learning:** Found two common React performance issues combined in `NarrativeScene`: 1. Static string operations (`text.split(" ")`) running inside the component body, forcing unnecessary array allocations on every re-render (which occurs frequently during scroll). 2. Framer Motion's `useTransform` being called inside an array `.map()` loop, which is a direct violation of React's Rules of Hooks and breaks hook order stability.
**Action:** Always move static data transformations (like `.split()`) outside of functional components to prevent redundant allocations and reduce GC overhead. Always extract the body of a `.map()` loop into a separate child component (e.g., `NarrativeWord`) when it contains hook calls (`useTransform`) to comply with React's rules and guarantee safe, performant rendering.
