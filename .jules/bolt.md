
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Update DOM text directly to avoid React re-renders in rapid events]
**Learning:** High-frequency events (like \`mouseover\` or \`mousemove\` custom cursor updates) that update React state trigger the full React render cycle and reconciliation. This causes unnecessary massive overhead, layout thrashing, and frame drops. Furthermore, applying \`{ passive: true }\` to rapid events prevents the main thread from blocking compositing and scrolling operations during these fast mouse movements, improving performance significantly.
**Action:** When updating simple text or rapid style changes for non-critical UI elements tied to high-frequency events (e.g., custom cursor text), bypass React's render loop entirely by modifying the DOM directly via \`ref.current.textContent\`. Always add \`{ passive: true }\` to \`mousemove\` and \`mouseover\` listeners unless you specifically need to call \`preventDefault()\`.
