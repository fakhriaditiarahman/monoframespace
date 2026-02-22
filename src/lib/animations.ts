import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Text Reveal Animation (Line by line)
 * Best used for Headings
 */
export const animateTextReveal = (
    selector: string | HTMLElement,
    options?: {
        y?: number;
        delay?: number;
        duration?: number;
        stagger?: number;
    }
) => {
    if (typeof window === 'undefined') return;

    const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];

    elements.forEach((el) => {
        // Prevent re-splitting
        if ((el as HTMLElement).classList.contains('split-type-applied')) return;
        (el as HTMLElement).classList.add('split-type-applied');

        const text = new SplitType(el as HTMLElement, { types: 'lines,words' });

        // Initial state
        gsap.set(text.lines, {
            y: options?.y || 20,
            opacity: 0,
            filter: 'blur(10px)',
        });

        gsap.to(text.lines, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: options?.duration || 1,
            stagger: options?.stagger || 0.1,
            delay: options?.delay || 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
            },
        });
    });
};

/**
 * Framer Motion Variants for Micro Interactions
 */
export const microInteractionVariants = {
    hoverTilt: {
        rest: { rotateX: 0, rotateY: 0, scale: 1, z: 0 },
        hover: {
            rotateX: 5,
            rotateY: -5,
            scale: 1.02,
            z: 50,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
    }
};
