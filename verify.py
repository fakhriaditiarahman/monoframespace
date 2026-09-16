from playwright.sync_api import sync_playwright
import time
import os

os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
os.makedirs("/home/jules/verification/videos", exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        viewport={"width": 1280, "height": 800},
        record_video_dir="/home/jules/verification/videos",
        record_video_size={"width": 1280, "height": 800}
    )
    page = context.new_page()
    page.goto("http://localhost:3000")

    # Wait for initial load
    page.wait_for_timeout(2000)

    # Scroll slowly to the NarrativeScene to trigger the useTransform opacity correctly
    # NarrativeScene is scene 2, around 180vh to 250vh

    page.evaluate("window.scrollTo(0, 1000)")
    page.wait_for_timeout(1000)

    page.evaluate("window.scrollTo(0, 2000)")
    page.wait_for_timeout(1000)

    page.evaluate("window.scrollTo(0, 2800)") # Roughly where NarrativeScene is
    page.wait_for_timeout(2000)

    # Capture screenshot
    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

    page.evaluate("window.scrollTo(0, 3200)")
    page.wait_for_timeout(1000)

    context.close()
    browser.close()
    print("Verification completed successfully.")
