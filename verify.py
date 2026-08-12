import time
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = context.new_page()

        # Load page
        page.goto("http://localhost:3000")
        page.wait_for_timeout(2000)

        # Scroll progressively to narrative scene to trigger animations
        # Assuming NarrativeScene is around 1500-2500px down based on HeroScene height
        page.evaluate("window.scrollTo(0, 1000)")
        page.wait_for_timeout(1000)
        page.evaluate("window.scrollTo(0, 2000)")
        page.wait_for_timeout(1000)
        page.evaluate("window.scrollTo(0, 2500)")
        page.wait_for_timeout(2000)

        import os
        os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
        page.screenshot(path="/home/jules/verification/screenshots/narrative.png")

        context.close()
        browser.close()

verify()
