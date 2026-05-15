from playwright.sync_api import sync_playwright
import time

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="videos/",
            record_video_size={"width": 1280, "height": 720}
        )
        page = context.new_page()

        print("Navigating to http://localhost:3000...")
        page.goto('http://localhost:3000')

        print("Waiting for page load...")
        page.wait_for_timeout(2000)

        print("Scrolling down to reveal NarrativeScene...")
        page.evaluate("window.scrollTo(0, 1500)")
        page.wait_for_timeout(1000)

        # Take a screenshot
        page.screenshot(path='narrative_scene.png')

        # Keep scrolling to ensure the animation is visible in the video
        for i in range(5):
            page.evaluate("window.scrollBy(0, 200)")
            page.wait_for_timeout(500)

        print("Closing browser...")
        context.close()
        browser.close()

if __name__ == '__main__':
    verify_frontend()
