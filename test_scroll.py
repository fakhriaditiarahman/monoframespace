from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1280, 'height': 800},
            record_video_dir='/home/jules/verification/videos/',
            record_video_size={'width': 1280, 'height': 800}
        )
        page = context.new_page()

        try:
            print("Navigating to homepage...")
            page.goto('http://localhost:3000')
            page.wait_for_load_state('networkidle')

            print("Scrolling to NarrativeScene...")
            # Scroll down sufficiently to trigger the NarrativeScene text scrub
            for i in range(10):
                page.mouse.wheel(0, 500)
                page.wait_for_timeout(100)

            page.wait_for_timeout(1000)

            print("Capturing screenshot...")
            page.screenshot(path='/home/jules/verification/screenshots/narrative.png')
            print("Done capturing screenshot.")

        except Exception as e:
            print(f"Error: {e}")

        finally:
            context.close()
            browser.close()

if __name__ == '__main__':
    run()
