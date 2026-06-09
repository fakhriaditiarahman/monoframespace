from playwright.sync_api import sync_playwright
import os
import time

os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
os.makedirs('/home/jules/verification/videos', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(record_video_dir='/home/jules/verification/videos', viewport={'width': 1280, 'height': 800})
    page = context.new_page()

    page.goto('http://localhost:3000')
    time.sleep(2)  # Wait for initial load

    # Scroll slowly to trigger the useTransform hooks
    for i in range(15):
        page.evaluate(f'window.scrollBy(0, 500)')
        time.sleep(0.5)

        # Capture screenshot around middle of scroll where NarrativeScene should be visible
        if i == 6:
            page.screenshot(path='/home/jules/verification/screenshots/narrative_scene.png')

    context.close()
    browser.close()
