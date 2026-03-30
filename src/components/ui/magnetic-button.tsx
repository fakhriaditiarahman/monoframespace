'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticButton({ children, className }: { children: React.ReactNode, className?: string }) {
    const ref = React.useRef<HTMLDivElement>(null);

    // ⚡ Bolt Optimization: Replace useState with useMotionValue and useSpring
    // 💡 What: Used Framer Motion's useMotionValue to handle high-frequency mousemove events
    // 🎯 Why: Avoids triggering React re-renders on every mouse move, preventing layout thrashing and garbage collection overhead
    // 📊 Impact: Significantly improves animation smoothness and overall application performance, especially when multiple magnetic buttons are present
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
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
