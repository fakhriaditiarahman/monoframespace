from playwright.sync_api import sync_playwright
import time

def verify_narrative_scene():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800},
            record_video_dir="/home/jules/verification/videos/",
            record_video_size={"width": 1280, "height": 800}
        )
        page = context.new_page()

        # Navigate to the local dev server
        page.goto('http://localhost:3000', wait_until='networkidle')

        # Give it a moment to render initially
        page.wait_for_timeout(2000)

        # Progressive scrolling to trigger the NarrativeScene animations
        # NarrativeScene is the second scene, around 2000-3000px down depending on viewport

        scroll_increments = [1000, 2000, 2500, 3000, 3500]

        for scroll_y in scroll_increments:
            page.evaluate(f'window.scrollTo(0, {scroll_y})')
            # Wait for scroll to settle and animation frames to render
            page.wait_for_timeout(500)

            # Check if NarrativeScene is somewhat in view and capture screenshot
            if scroll_y == 2500: # Approximate position of NarrativeScene
                page.screenshot(path='/home/jules/verification/screenshots/narrative_scene.png')

        # Extra wait to ensure video is flushed
        page.wait_for_timeout(1000)

        context.close()
        browser.close()

if __name__ == "__main__":
    verify_narrative_scene()
