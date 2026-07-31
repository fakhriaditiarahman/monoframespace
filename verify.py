from playwright.sync_api import sync_playwright

def verify_custom_cursor():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={"width": 1280, "height": 720}
        )
        page = context.new_page()

        page.goto("http://localhost:3000/")
        page.wait_for_timeout(2000)

        # Move mouse to trigger cursor
        page.mouse.move(640, 360)
        page.wait_for_timeout(500)

        page.mouse.move(200, 200)
        page.wait_for_timeout(500)

        # Take screenshot
        page.screenshot(path="/home/jules/verification/screenshots/cursor.png")

        context.close()
        browser.close()

if __name__ == "__main__":
    verify_custom_cursor()
