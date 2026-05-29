from playwright.sync_api import sync_playwright
import time
import os

# Create directories if they don't exist
os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
os.makedirs('/home/jules/verification/videos', exist_ok=True)

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            record_video_dir='/home/jules/verification/videos',
            viewport={'width': 1280, 'height': 800}
        )
        page = context.new_page()

        # Go to the local dev server
        page.goto('http://localhost:3000')
        page.wait_for_load_state('networkidle')

        # Progressively scroll to trigger animations
        for i in range(10):
            page.evaluate(f'window.scrollBy(0, 1000)')
            time.sleep(1)

        # Capture screenshot
        page.screenshot(path='/home/jules/verification/screenshots/narrative_scene.png', full_page=True)

        context.close()
        browser.close()

if __name__ == '__main__':
    run()
