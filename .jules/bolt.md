
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-13 - [raw img vs next/image]
**Learning:** Found a critical performance anti-pattern where developers used raw HTML `<img>` tags for fetching large placeholder/dummy images from Unsplash, completely bypassing Next.js's built-in image optimization. This hurts Largest Contentful Paint (LCP) and increases initial page load time because the browser downloads the original, often huge, image formats without resolution scaling, lazy loading, or WebP/AVIF format conversion.
**Action:** Always replace raw `<img>` tags with Next.js `<Image>` components, especially for external assets. Use `fill` with `object-cover` and explicitly defined `sizes` attributes for responsive components. This provides automatic lazy loading (for below-the-fold images) and selects optimal formats based on the device making the request.
