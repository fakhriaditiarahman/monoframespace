"use client"

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

export function SmoothScroll({ children }: { children: ReactNode }) {
    // Configured for extra smooth feels on both desktop (wheel) and mobile (touch)
    return (
        <ReactLenis root options={{
            lerp: 0.05, // Lower value = smoother, longer deceleration tail
            duration: 2,
            smoothWheel: true,
            syncTouch: true, // Enable smooth scrolling on touch devices
            wheelMultiplier: 0.8, // Slightly softer wheel 
            touchMultiplier: 1.5, // Responsive touch scaling
        }}>
            {children}
        </ReactLenis>
    )
}

