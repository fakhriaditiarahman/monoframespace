from playwright.sync_api import sync_playwright
import time
import os

os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
os.makedirs('/home/jules/verification/videos', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(record_video_dir='/home/jules/verification/videos')
    page = context.new_page()
    page.goto('http://localhost:3000')

    # Scroll down to NarrativeScene
    page.evaluate('window.scrollTo(0, 1000)')
    time.sleep(2)

    # Scroll slowly to reveal text
    for _ in range(5):
        page.evaluate('window.scrollBy(0, 500)')
        time.sleep(1)

    page.screenshot(path='/home/jules/verification/screenshots/narrative.png')

    context.close()
    browser.close()
