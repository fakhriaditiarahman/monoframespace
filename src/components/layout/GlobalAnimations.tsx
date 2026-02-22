'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

export function GlobalAnimations() {
    const pathname = usePathname();

    return (
        <>
            <CustomCursor key={`cursor-${pathname}`} />
            <AmbientMotion />
        </>
    );
}

function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [cursorText, setCursorText] = useState('');
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Center cursor
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: 'power2.out',
            });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Look for data-cursor-text attribute in target or parents
            const elementWithCursorData = target.closest('[data-cursor-text]');
            const isClickable = target.closest('a') || target.closest('button') || target.closest('[role="button"]');

            if (elementWithCursorData) {
                setCursorText(elementWithCursorData.getAttribute('data-cursor-text') || '');
                setIsHovering(true);
                gsap.to(cursor, {
                    scale: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    mixBlendMode: 'normal',
                    duration: 0.3
                });
                if (textRef.current) gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
            } else if (isClickable) {
                setCursorText('');
                setIsHovering(true);
                gsap.to(cursor, {
                    scale: 1.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    mixBlendMode: 'difference',
                    duration: 0.3
                });
                if (textRef.current) gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
            } else {
                setCursorText('');
                setIsHovering(false);
                gsap.to(cursor, {
                    scale: 1,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    border: 'none',
                    mixBlendMode: 'difference',
                    duration: 0.3
                });
                if (textRef.current) gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] flex items-center justify-center transition-opacity duration-300 hidden md:flex mix-blend-difference bg-white`}
        >
            <span
                ref={textRef}
                className="text-[4px] font-bold text-black tracking-widest opacity-0 pointer-events-none"
            >
                {cursorText}
            </span>
        </div>
    );
}

function AmbientMotion() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            {/* Noise/Grain Overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
            {/* Slow Moving Ambient Gradient */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-20 hidden dark:block">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-[120px] mix-blend-screen animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 bg-cyan-400/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/3 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
            </div>
        </div>
    );
}
