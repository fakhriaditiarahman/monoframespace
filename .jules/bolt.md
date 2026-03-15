## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-03-15 - [Passive Listeners vs requestAnimationFrame for Scroll]
**Learning:** Adding `{ passive: true }` to `scroll` or `mousemove` event listeners has no effect on performance because these events are not cancelable and do not block scrolling. The real bottleneck in high-frequency event listeners (like `scroll` updating `useState` for a sticky header) is layout thrashing from excessive synchronous React state updates.
**Action:** Always throttle high-frequency React state updates inside `scroll` or `mousemove` event listeners using `requestAnimationFrame`. This synchronizes state updates with the browser's repaint cycle, drastically reducing unnecessary re-renders and keeping the main thread free. Always remember to `cancelAnimationFrame` in the cleanup function.