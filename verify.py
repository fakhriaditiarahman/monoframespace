from playwright.sync_api import sync_playwright
import time
import os

# Ensure directories exist
os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
os.makedirs('/home/jules/verification/videos', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    # Configure video recording
    context = browser.new_context(
        viewport={'width': 1280, 'height': 800},
        record_video_dir='/home/jules/verification/videos'
    )
    page = context.new_page()

    # Navigate to local server
    page.goto('http://localhost:3000')

    # Wait for initial load
    time.sleep(2)

    # Scroll down to trigger NarrativeScene
    page.evaluate('window.scrollTo(0, 800)')
    time.sleep(1)
    page.evaluate('window.scrollTo(0, 1500)')
    time.sleep(1)

    # Take screenshot of the NarrativeScene area
    page.screenshot(path='/home/jules/verification/screenshots/narrative.png')

    # Scroll a bit more to see the text reveal effect
    page.evaluate('window.scrollTo(0, 2000)')
    time.sleep(1)

    context.close()
    browser.close()
