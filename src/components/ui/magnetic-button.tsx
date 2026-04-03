'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
    const ref = React.useRef<HTMLDivElement>(null);

    // ⚡ Bolt Optimization: Use useMotionValue instead of useState for high-frequency events
    // 💡 What: Replaced React state with Framer Motion values for tracking cursor coordinates
    // 🎯 Why: Prevents component re-renders on every single mousemove event
    // 📊 Impact: Eliminates render cycle CPU overhead during hover interactions
    const xMotion = useMotionValue(0);
    const yMotion = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const x = useSpring(xMotion, springConfig);
    const y = useSpring(yMotion, springConfig);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        xMotion.set(middleX * 0.2);
        yMotion.set(middleY * 0.2);
    };

    const reset = () => {
        xMotion.set(0);
        yMotion.set(0);
    };

    return (
        <motion.div
            className={`relative inline-flex ${className || ''}`}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x, y }}
        >
            {children}
        </motion.div>
    );
}
