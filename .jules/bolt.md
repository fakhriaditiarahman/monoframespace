
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [useTransform in loops violates Rules of Hooks]
**Learning:** Found a component (`NarrativeScene`) calling `useTransform` directly inside an `Array.prototype.map()` loop. This violates React's Rules of Hooks because the number of iterations (and thus hook calls) depends on the data length. If the data length changes or is dynamic, the hook order will change across renders, leading to potential memory leaks or corrupted state in Framer Motion hooks. Additionally, creating static strings and calling `split(" ")` on every render causes unnecessary garbage collection pressure.
**Action:** When animating lists or words with `useTransform`, always extract the loop body into a separate functional component (e.g., `NarrativeWord`). This ensures hook order stability by tying the hooks to an isolated component instance rather than the parent's loop. Also, lift static string operations (like `text.split(" ")`) outside the functional component so they are evaluated only once globally.
