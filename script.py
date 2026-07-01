from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = context.new_page()

        # Navigate to local server
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")

        # Give page some time to render initially
        page.wait_for_timeout(2000)

        # Scroll down to NarrativeScene roughly (Hero is 180vh, then ProductSlider, etc.)
        # A few incremental scrolls
        page.evaluate("window.scrollTo(0, 1500)")
        page.wait_for_timeout(1000)
        page.evaluate("window.scrollTo(0, 2500)")
        page.wait_for_timeout(1000)
        page.evaluate("window.scrollTo(0, 3500)")
        page.wait_for_timeout(2000) # wait for animations to settle

        # Take a screenshot
        page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

        context.close()
        browser.close()

if __name__ == "__main__":
    verify()
