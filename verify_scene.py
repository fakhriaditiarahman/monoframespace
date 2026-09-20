from playwright.sync_api import sync_playwright
import time
import os

SCREENSHOT_PATH = "/home/jules/verification/screenshots/narrative_scene.png"
VIDEO_DIR = "/home/jules/verification/videos"

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800},
            record_video_dir=VIDEO_DIR
        )
        page = context.new_page()

        print("Navigating to localhost:3000...")
        page.goto("http://localhost:3000", wait_until="networkidle")
        time.sleep(2)

        print("Scrolling down to reveal NarrativeScene...")
        # Scroll progressively to ensure the scrub animation plays out correctly
        page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.1)")
        time.sleep(1)
        page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.2)")
        time.sleep(1)
        page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.3)")
        time.sleep(2)

        print(f"Taking screenshot at {SCREENSHOT_PATH}...")
        page.screenshot(path=SCREENSHOT_PATH)

        context.close()
        browser.close()

        video_files = [f for f in os.listdir(VIDEO_DIR) if f.endswith('.webm')]
        if video_files:
            video_path = os.path.join(VIDEO_DIR, video_files[0])
            print(f"Video recorded at: {video_path}")
        else:
            print("No video found.")

if __name__ == "__main__":
    run()
