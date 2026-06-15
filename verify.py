from playwright.sync_api import sync_playwright
import time
import os

os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
os.makedirs("/home/jules/verification/videos", exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(record_video_dir="/home/jules/verification/videos")
    page = context.new_page()
    page.goto("http://localhost:3000")
    time.sleep(2) # Wait for initial load

    # Scroll down slightly to ensure the component comes into view and renders correctly
    page.evaluate("window.scrollTo(0, 1500)")
    time.sleep(2)

    # Take a full page screenshot just to be sure we capture everything including the narrative words
    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=True)

    context.close()
    browser.close()
