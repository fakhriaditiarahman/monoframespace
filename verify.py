from playwright.sync_api import sync_playwright
import time
import os

# Create verification directories
os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
os.makedirs('/home/jules/verification/videos', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    # Configure context to record video
    context = browser.new_context(
        record_video_dir='/home/jules/verification/videos',
        record_video_size={'width': 1280, 'height': 720}
    )
    page = context.new_page()
    page.set_viewport_size({"width": 1280, "height": 720})

    print("Navigating to local server...")
    page.goto('http://localhost:3000', wait_until='networkidle')
    print("Page loaded.")

    # Scroll down progressively to reach NarrativeScene
    print("Scrolling to NarrativeScene...")
    for i in range(5):
        page.mouse.wheel(0, 500)
        page.wait_for_timeout(500)

    print("Taking screenshot...")
    page.screenshot(path='/home/jules/verification/screenshots/narrative_scene.png', full_page=False)

    print("Progressive scrolling complete.")

    context.close()
    browser.close()
