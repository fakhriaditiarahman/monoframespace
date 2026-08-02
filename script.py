from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(
        record_video_dir="/home/jules/verification/videos",
        record_video_size={"width": 1280, "height": 720}
    )
    page = context.new_page()

    page.set_viewport_size({"width": 1280, "height": 1024})

    print("Navigating to localhost:3000")
    page.goto("http://localhost:3000", timeout=30000)

    print("Waiting for page load and hydration")
    time.sleep(3)

    print("Scrolling to NarrativeScene")
    # Using window.scrollTo increments to trigger scroll-based animations properly
    for _ in range(5):
        page.evaluate("window.scrollBy(0, 500)")
        time.sleep(0.5)

    print("Taking screenshot")
    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

    print("Closing context to save video")
    context.close()
    browser.close()

with sync_playwright() as playwright:
    time.sleep(5) # wait for server to start
    run(playwright)
