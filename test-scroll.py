from playwright.sync_api import sync_playwright
import time

def test_scroll():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="videos/")
        page = context.new_page()
        page.goto("http://localhost:3000")

        # Scroll to NarrativeScene (which has classes like py-32 md:py-64)
        # It's roughly past the hero and product slider
        page.evaluate("window.scrollTo(0, 1000)")
        time.sleep(1)

        page.evaluate("window.scrollTo(0, 1500)")
        time.sleep(1)

        page.screenshot(path="narrative_scene.png")

        context.close()
        browser.close()

test_scroll()
