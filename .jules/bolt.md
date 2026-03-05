
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.
## 2024-05-23 - Anti-pattern: Using <img> for Tailwind hover effects instead of Next.js <Image>
**Learning:** Found multiple instances where standard `<img>` tags were used solely to apply hover effects easily using Tailwind CSS. This bypassed Next.js built-in image optimizations (lazy loading, automatic WebP/AVIF formatting, responsive sizing), negatively impacting Core Web Vitals (LCP & CLS).
**Action:** Always prefer `next/image` (`<Image />`) for all external and static images. Map Tailwind classes correctly to the `<Image />` component or use `fill` with a wrapper `div` to preserve styling while getting performance benefits.
