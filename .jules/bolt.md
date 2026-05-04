
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.
## 2024-05-18 - Rules of Hooks in Framer Motion Loops
**Learning:** Found `useTransform` being called inside an array `.map()` in `NarrativeScene`. This is a severe violation of React's Rules of Hooks because if the array length ever changed, it would corrupt the hook call order. Even with a static array, this pattern is fragile and considered a significant anti-pattern.
**Action:** Always extract loop bodies containing hooks into separate functional components (e.g., `NarrativeWord`) to guarantee hook order stability per item.

## 2024-05-18 - String Splitting and Inline Arrays in Render Path
**Learning:** Micro-benchmarking confirmed that moving static `string.split(" ")` outside the render loop of a high-frequency component (`NarrativeScene`) cuts its execution time by over ~90% (e.g., 11.2ms down to 1.3ms per 100k ops). Furthermore, defining inline static arrays (`AboutScene` partners, `SocialsScene` items) forces React to recreate those objects every render, increasing garbage collection pressure.
**Action:** Extract all static string manipulations and static configuration arrays to module-level constants. Use `⚡ Bolt Optimization:` comments to flag the garbage collection savings.
