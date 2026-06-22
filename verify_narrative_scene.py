from playwright.sync_api import sync_playwright
import os
import time

screenshot_dir = "/home/jules/verification/screenshots"
video_dir = "/home/jules/verification/videos"
os.makedirs(screenshot_dir, exist_ok=True)
os.makedirs(video_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(record_video_dir=video_dir)
    page = context.new_page()

    print("Navigating to http://localhost:3000...")
    page.goto("http://localhost:3000")

    # Progressively scroll to ensure elements trigger animations
    for i in range(1, 4):
        page.evaluate(f"window.scrollTo(0, 1000 * {i})")
        time.sleep(1)

    print("Capturing screenshot of Narrative Scene...")
    page.screenshot(path=os.path.join(screenshot_dir, "narrative_scene.png"))

    context.close()
    browser.close()
    print("Verification script complete.")
