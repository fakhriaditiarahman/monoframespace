
## 2025-02-12 - [next/image vs motion.img]
**Learning:** Found a specific anti-pattern in the codebase where developers used `motion.img` purely for Tailwind CSS hover effects (e.g., `group-hover:scale-100`). This completely bypassed Next.js built-in image optimization capabilities (`next/image`), missing out on automatic lazy loading, resolution scaling, and WebP/AVIF format selection.
**Action:** Always replace `<motion.img>` with Next.js `<Image>` when Framer Motion is not actively animating properties dynamically via React. Relying on standard CSS (Tailwind) for hover interactions on Next.js images provides the same visual result with significantly better performance.

## 2025-02-12 - [gsap.to() inside mousemove events]
**Learning:** High-frequency events like `mousemove` or `scroll` that trigger `gsap.to()` create a new tween object on every execution, causing layout thrashing and garbage collection overhead.
**Action:** Always use `gsap.quickTo()` instead of `gsap.to()` for rapid, continuous parameter updates. This creates a reusable, highly optimized setter function that dramatically improves performance.

## 2025-02-13 - [Throttle high-frequency scroll events]
**Learning:** High-frequency events like `scroll` that trigger state updates can cause layout thrashing. Note that `passive: true` has no effect on `scroll`, `mousemove`, or `mouseover` events for this purpose.
**Action:** When optimizing high-frequency `scroll` events that trigger state updates, use `requestAnimationFrame` to throttle the updates and prevent layout thrashing.

## 2025-02-13 - [Framer Motion hooks inside array maps]
**Learning:** Calling Framer Motion hooks like `useTransform` directly inline within JSX props (or inside an array `.map()` loop) violates React's Rules of Hooks. This causes hook order instability and can lead to severe memory leaks or re-render bugs, especially during high-frequency events like scrolling.
**Action:** Always extract the body of a `.map()` loop into a separate functional component (e.g., `NarrativeWord`) if it needs to use hooks. This guarantees hook order stability and complies with React's Rules of Hooks.

## 2025-02-13 - [Static string splits in render loops]
**Learning:** Performing static `string.split()` operations inside a React component that renders frequently (e.g., tied to scroll position updates) creates unnecessary array instances on every single render, leading to significant garbage collection pressure and layout thrashing.
**Action:** Always extract static array configurations and object creations (like `text.split()`) outside of the React component body to the module scope so they are evaluated only once.
