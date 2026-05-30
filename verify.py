from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(record_video_dir="/home/jules/verification/videos/")
        page = context.new_page()

        # Wait for the server to be ready
        for i in range(15):
            try:
                page.goto("http://localhost:3000")
                break
            except Exception:
                time.sleep(1)
        else:
            print("Server did not start in time.")
            browser.close()
            return

        page.wait_for_load_state("networkidle")

        # Progressive scroll to trigger animations and load dynamic content
        for i in range(10):
            page.evaluate("window.scrollBy(0, 1000)")
            page.wait_for_timeout(500)

        # Scroll back up to the middle to capture NarrativeScene
        page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.25)")
        page.wait_for_timeout(1000)

        # Capture a screenshot
        page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

        context.close()
        browser.close()

if __name__ == "__main__":
    run()
