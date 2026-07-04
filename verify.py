from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    context = browser.new_context(record_video_dir="/home/jules/verification/videos/")
    page = context.new_page()
    page.goto("http://localhost:3000")

    # Wait for the page to load
    page.wait_for_timeout(2000)

    # Progressively scroll to NarrativeScene (around 200vh + ProductSlider height)
    # Scroll a few times to simulate user scrolling
    for i in range(5):
        page.evaluate("window.scrollBy(0, window.innerHeight * 0.8)")
        page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
