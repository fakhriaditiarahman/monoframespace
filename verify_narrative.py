from playwright.sync_api import sync_playwright
import os
import time

os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
os.makedirs("/home/jules/verification/videos", exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(
        record_video_dir="/home/jules/verification/videos/",
        viewport={"width": 1280, "height": 800}
    )
    page = context.new_page()

    print("Navigating to http://localhost:3000")
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")

    print("Scrolling to NarrativeScene")
    # The first scene is 180vh, and product slider is before NarrativeScene.
    # Scrolling roughly 2500px down to reach it.
    page.evaluate("window.scrollTo(0, 2500)")
    page.wait_for_timeout(1000)

    print("Capturing screenshot of NarrativeScene")
    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png")

    print("Scrolling slightly down to trigger text scrub animation")
    page.evaluate("window.scrollBy(0, 500)")
    page.wait_for_timeout(1500)

    # Save a second screenshot after scroll scrub to see effect
    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene_scrubbed.png")

    context.close()
    browser.close()
    print("Verification complete.")
