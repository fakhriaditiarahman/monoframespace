from playwright.sync_api import sync_playwright
import time
import os

os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
os.makedirs('/home/jules/verification/videos', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(record_video_dir='/home/jules/verification/videos', record_video_size={'width': 1280, 'height': 720})
    page = context.new_page()
    page.set_viewport_size({"width": 1280, "height": 720})

    print("Navigating to http://localhost:3000...")
    page.goto('http://localhost:3000')
    page.wait_for_load_state('networkidle')

    print("Scrolling to NarrativeScene...")
    # Progressive scroll to trigger animations
    for _ in range(5):
        page.evaluate("window.scrollBy(0, 1000)")
        time.sleep(0.5)

    print("Taking screenshot...")
    page.screenshot(path='/home/jules/verification/screenshots/narrative_scene.png')

    context.close()
    browser.close()
    print("Verification complete.")