'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
    const ref = React.useRef<HTMLDivElement>(null);

    // ⚡ Bolt Optimization: Use Framer Motion values instead of React state
    // 💡 What: Replaced useState with useMotionValue and useSpring for mouse coordinates.
    // 🎯 Why: High-frequency events like mousemove trigger state updates, causing the component
    //    to re-render on every frame. By using Framer Motion values, we bypass React's render
    //    lifecycle and update the DOM directly.
    // 📊 Impact: Eliminates layout thrashing and unnecessary re-renders during interactions,
    //    resulting in noticeably smoother animations and less CPU overhead.
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        x.set(middleX * 0.2);
        y.set(middleY * 0.2);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={`relative inline-flex ${className || ''}`}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
}
