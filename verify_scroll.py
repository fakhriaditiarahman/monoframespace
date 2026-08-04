from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    context = browser.new_context(record_video_dir="/home/jules/verification/videos")
    page = context.new_page()

    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")

    # Scroll down progressively to reach the NarrativeScene
    # The NarrativeScene is scene 2, right after Hero and ProductSlider
    for i in range(5):
        page.evaluate("window.scrollBy(0, 800)")
        time.sleep(1)

    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
