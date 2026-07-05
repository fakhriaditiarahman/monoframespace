from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos/")
        page = context.new_page()

        # Navigate to the local Next.js server
        page.goto("http://localhost:3000")

        # Give some time for initial render
        page.wait_for_timeout(2000)

        # Progressively scroll to reach the NarrativeScene
        # The HeroScene is 180vh, so scrolling a bit more than that should reach NarrativeScene
        for i in range(4):
            page.evaluate("window.scrollBy(0, 500)")
            page.wait_for_timeout(1000)

        page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png")

        context.close()
        browser.close()

if __name__ == "__main__":
    run()
