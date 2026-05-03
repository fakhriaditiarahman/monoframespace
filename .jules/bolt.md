
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-14 - [useTransform inside loops and inline styles]
**Learning:** React's Rules of Hooks dictate that hooks must be called at the top level of a component. Calling hooks like Framer Motion's `useTransform` inside an array `.map()` loop or inline within JSX style props violates these rules, leading to potential hook order instability, memory leaks, or erratic re-rendering behavior. Additionally, defining static strings and invoking operations like `.split()` directly inside component render cycles unnecessarily increases garbage collection overhead.
**Action:** Always extract inner loop logic into a separate functional component to maintain stable hook order when relying on hooks. Ensure all hook calls are extracted to the top level of the component, not inline. Move static variables and one-time calculations outside of the component body to reduce GC pressure.
