import sys

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Apply edits via simple text replacement where possible
    # 1. Remove useStates
    old_states = """    const [cursorText, setCursorText] = useState('');
    const [isHovering, setIsHovering] = useState(false);"""

    new_states = """    // ⚡ Bolt Optimization: Removed cursorText and isHovering useState hooks
    // By directly manipulating the DOM for cursor text, we avoid unnecessary React re-renders on high-frequency hover events."""

    content = content.replace(old_states, new_states)

    # 2. Replace handleMouseOver to update DOM directly instead of setCursorText/setIsHovering
    old_handler = """            if (elementWithCursorData) {
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
            }"""

    new_handler = """            if (elementWithCursorData) {
                if (textRef.current) textRef.current.textContent = elementWithCursorData.getAttribute('data-cursor-text') || '';
                gsap.to(cursor, {
                    scale: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    mixBlendMode: 'normal',
                    duration: 0.3
                });
                if (textRef.current) gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
            } else if (isClickable) {
                if (textRef.current) textRef.current.textContent = '';
                gsap.to(cursor, {
                    scale: 1.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    mixBlendMode: 'difference',
                    duration: 0.3
                });
                if (textRef.current) gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
            } else {
                if (textRef.current) textRef.current.textContent = '';
                gsap.to(cursor, {
                    scale: 1,
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    border: 'none',
                    mixBlendMode: 'difference',
                    duration: 0.3
                });
                if (textRef.current) gsap.to(textRef.current, { opacity: 0, duration: 0.2 });
            }"""

    content = content.replace(old_handler, new_handler)

    # 3. Add passive: true
    old_listeners = """        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };"""

    new_listeners = """        // ⚡ Bolt Optimization: Added { passive: true } to prevent blocking the compositor thread
        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };"""

    content = content.replace(old_listeners, new_listeners)

    # 4. Remove cursorText from JSX
    old_jsx = """            <span
                ref={textRef}
                className="text-[4px] font-bold text-black tracking-widest opacity-0 pointer-events-none"
            >
                {cursorText}
            </span>"""

    new_jsx = """            <span
                ref={textRef}
                className="text-[4px] font-bold text-black tracking-widest opacity-0 pointer-events-none"
            >
            </span>"""

    content = content.replace(old_jsx, new_jsx)

    with open(filepath, 'w') as f:
        f.write(content)

process_file('src/components/layout/GlobalAnimations.tsx')
