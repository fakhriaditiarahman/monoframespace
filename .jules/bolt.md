
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-03-30 - [useState in high-frequency events]
**Learning:** Found a component (`MagneticButton`) that updated `React.useState` on every `mousemove` event to drive a Framer Motion animation. This is a massive performance bottleneck because `useState` triggers React component re-renders (and potentially children re-renders) on every single pixel movement, causing severe layout thrashing and garbage collection overhead.
**Action:** When animating elements based on high-frequency events (like `mousemove` or `scroll`) in Framer Motion, bypass React's render cycle completely. Always use `useMotionValue()` and update it directly via `.set()`, and apply smoothing via `useSpring()`. This communicates directly with the DOM and avoids React re-renders.
