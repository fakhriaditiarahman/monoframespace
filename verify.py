from playwright.sync_api import sync_playwright
import time
import os

os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
os.makedirs("/home/jules/verification/videos", exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(record_video_dir="/home/jules/verification/videos")
    page = context.new_page()

    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")

    # Scroll down to NarrativeScene
    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 2000)")
    page.wait_for_timeout(1000)

    # Capture screenshot of NarrativeScene
    page.screenshot(path="/home/jules/verification/screenshots/narrative.png", full_page=False)

    context.close()
    browser.close()
