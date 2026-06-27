from playwright.sync_api import sync_playwright
import time
import os

def run():
    os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
    os.makedirs('/home/jules/verification/videos', exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos", viewport={"width": 1280, "height": 720})
        page = context.new_page()

        try:
            print("Navigating to localhost:3000")
            page.goto("http://localhost:3000", wait_until="networkidle")

            # Scroll slowly to the NarrativeScene section which is a few sections down
            print("Scrolling through page")
            for _ in range(5):
                page.mouse.wheel(0, 500)
                time.sleep(1)

            print("Taking screenshot")
            page.screenshot(path="/home/jules/verification/screenshots/narrative.png", full_page=False)

        except Exception as e:
            print(f"Error occurred: {e}")
            page.screenshot(path="/home/jules/verification/screenshots/error.png")

        finally:
            context.close()
            browser.close()

if __name__ == "__main__":
    run()
