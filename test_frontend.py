from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = context.new_page()

        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")

        # Move mouse around to trigger cursor events
        page.mouse.move(100, 100)
        page.wait_for_timeout(500)
        page.mouse.move(500, 500)
        page.wait_for_timeout(500)

        # Hover over something
        # Assuming the logo text is present and clickable
        page.mouse.move(300, 100) # near logo
        page.wait_for_timeout(1000)

        page.screenshot(path="/home/jules/verification/screenshots/cursor.png")

        context.close()
        browser.close()

run()
