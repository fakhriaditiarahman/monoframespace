
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-14 - [useTransform inside map loops]
**Learning:** Found an anti-pattern where Framer Motion's `useTransform` hook was called directly inside a `.map()` loop within the render function of a component (e.g., in `NarrativeScene`). This is a strict violation of React's Rules of Hooks, leading to unpredictable behavior or hook order instability. Furthermore, string split operations (`text.split(' ')`) within the component created unnecessary garbage collection overhead during frequent scroll re-renders.
**Action:** Always extract items rendered via `.map()` into separate functional components when they require React hooks like `useTransform`. Additionally, move static variable definitions and expensive operations (e.g., `.split()`) outside of functional components to ensure they are evaluated only once globally, minimizing garbage collection pressure.
