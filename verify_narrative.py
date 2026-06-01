from playwright.sync_api import sync_playwright
import os
import time

def run():
    screenshot_dir = "/home/jules/verification/screenshots"
    video_dir = "/home/jules/verification/videos"

    os.makedirs(screenshot_dir, exist_ok=True)
    os.makedirs(video_dir, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(record_video_dir=video_dir)
        page = context.new_page()

        # Load page
        page.goto("http://localhost:3000")

        # Wait for Next.js to fully hydrate
        page.wait_for_timeout(2000)

        # Progressive scroll to trigger useTransform animations in NarrativeScene
        # The scene is roughly around 150vh down (HeroScene is 180vh)
        for i in range(20):
            page.evaluate("window.scrollBy(0, 150)")
            page.wait_for_timeout(100)

        page.wait_for_timeout(1000)

        # Capture screenshot
        screenshot_path = os.path.join(screenshot_dir, "narrative_scene.png")
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        # Close context to ensure video is saved
        context.close()
        browser.close()

if __name__ == "__main__":
    # Wait for dev server to be ready
    time.sleep(3)
    run()
