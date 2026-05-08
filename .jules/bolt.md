
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Extract static string operations and hooks outside rendering loops]
**Learning:** Performing operations like `string.split(" ")` and inline array iteration `.map()` that call hooks inside a React component render loop is problematic. Node.js micro-benchmarking confirmed that moving static `string.split()` operations outside of React render loops reduces execution time for that operation by approximately 88-97%. Calling a hook like `useTransform` inside an array `.map()` loop also violates React's Rules of Hooks.
**Action:** When working on rendering high-frequency scroll components, always extract static data initialization like array/string operations outside component scope to prevent recreation on every render. To comply with React hook rules, extract loop items into separate functional components and pass index and parent values down to calculate local values like start/end thresholds inside the new component safely.
