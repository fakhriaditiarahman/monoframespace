from playwright.sync_api import sync_playwright
import time

def verify_narrative_scene():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            record_video_size={"width": 1280, "height": 720}
        )
        page = context.new_page()
        page.goto("http://localhost:3000")

        # Scroll to NarrativeScene progressively
        for i in range(1, 10):
            page.evaluate(f"window.scrollTo(0, {i * 500})")
            time.sleep(0.5)

        # Take a screenshot around the middle of NarrativeScene
        page.screenshot(path="/home/jules/verification/screenshots/narrative.png")

        # Scroll a bit more to see the opacity changes
        for i in range(10, 15):
            page.evaluate(f"window.scrollTo(0, {i * 500})")
            time.sleep(0.5)

        context.close()
        browser.close()

if __name__ == "__main__":
    verify_narrative_scene()