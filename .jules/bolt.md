
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-03-13 - [gsap.to() vs gsap.quickTo() on high-frequency events]
**Learning:** Found an anti-pattern where `gsap.to()` was used inside a `mousemove` event handler for a custom cursor. This is a significant performance bottleneck because `gsap.to()` creates a brand new tween object and performs initialization calculations on every single mouse movement. This rapid object creation leads to layout thrashing, excessive garbage collection overhead, and ultimately frame drops/jank.
**Action:** For high-frequency events like `mousemove` or `scroll`, always initialize `gsap.quickTo()` outside the event listener. This creates a reusable, optimized setter function that skips the tween instantiation overhead, drastically improving animation performance.
