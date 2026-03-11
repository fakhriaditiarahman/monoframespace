
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2026-03-11 - [gsap.quickTo for high-frequency events]
**Learning:** Using `gsap.to()` inside high-frequency event listeners like `mousemove` or `scroll` creates a new tween object on every frame, leading to significant garbage collection overhead and potential layout thrashing in React applications.
**Action:** Always use `gsap.quickTo()` for properties animated during `mousemove`, `scroll`, or requestAnimationFrame loops. It reuses a single tween instance, resulting in measurably smoother performance and lower memory usage.
