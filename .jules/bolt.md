
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Extract static split operations]
**Learning:** Found that running `.split(" ")` on a long static text string inside a component's render loop causes unnecessary garbage collection and performance degradation, particularly in high-frequency scroll components.
**Action:** When a component iterates over split words for animation, extract the static string and its `.split()` operation outside the React component. This saves significant execution time (measured up to ~96% reduction in string splitting time per render) by computing it only once at module evaluation time.

## 2025-02-13 - [Framer Motion hooks inside map loops]
**Learning:** Calling hooks like `useTransform` inside a `.map()` loop (e.g., `words.map(() => { const opacity = useTransform(...) })`) violates React's Rules of Hooks because the hook calls are dynamically generated and could potentially change order or quantity, leading to unpredictable re-renders and memory leaks.
**Action:** Always extract the loop body into a separate functional component (e.g., `NarrativeWord`) when using hooks per-item. Pass necessary index and progress data as props to ensure hook order stability and maintain compliance with React's rules.
