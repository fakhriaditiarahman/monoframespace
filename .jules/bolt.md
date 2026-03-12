
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [GSAP quickTo vs to in high-frequency events]
**Learning:** Found GSAP animations inside a `mousemove` event handler using `gsap.to()`. Because `mousemove` fires incredibly fast, this creates a new tween object on every single frame, causing significant garbage collection overhead, layout thrashing, and potential dropped frames.
**Action:** For animations tied to high-frequency events (`mousemove`, `scroll`, etc.), ALWAYS use `gsap.quickTo()`. It creates a reusable, highly optimized animation function that just updates properties without object creation overhead.
