from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = context.new_page()
        page.goto("http://localhost:3000")

        # Scroll to the NarrativeScene which is after ProductSlider
        page.evaluate("window.scrollTo(0, window.innerHeight * 1.5)")
        time.sleep(2)

        # Take screenshot of the NarrativeScene area
        page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

        # Scroll a bit more to see the transform effect
        page.evaluate("window.scrollTo(0, window.innerHeight * 2.5)")
        time.sleep(1)

        context.close()
        browser.close()

if __name__ == "__main__":
    verify()
