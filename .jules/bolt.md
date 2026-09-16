
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [useTransform and Static Computation inside Render Loop]
**Learning:** Found an anti-pattern in `NarrativeScene` where `useTransform` (a Framer Motion React hook) was called directly inside a `.map` loop. This strict violation of React's Rules of Hooks can lead to hook order instability and subtle rendering bugs. In addition, static variables and expensive string manipulations (`text.split(' ')`) were instantiated locally, leading to unnecessary recalculations and GC pressure on every scroll/render.
**Action:** Always extract loop iterations involving hooks into separate, standalone functional components (e.g., `NarrativeWord`) and pass down necessary tracking variables. Furthermore, lift static constants and deterministic computations (like static string splitting) outside of the functional component to global scope to minimize render cycle workload.
