
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-03-10 - [GSAP Performance in high-frequency events]
**Learning:** Calling `gsap.to()` inside very high-frequency event listeners (like `mousemove` or `scroll`) is a major performance anti-pattern. It creates a new tween object, parses properties, and handles garbage collection on every single frame, leading to layout thrashing, massive JS execution times, and possible jank.
**Action:** Always use `gsap.quickTo()` for values that are tied to high-frequency events. It returns a reusable function that strictly updates the end values of an internal tween without the overhead of instantiating new tween objects or full parsing.
