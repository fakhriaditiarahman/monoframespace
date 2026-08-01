from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(record_video_dir="/home/jules/verification/videos", viewport={"width": 1280, "height": 720})
        page = context.new_page()
        page.goto("http://localhost:3000")

        # Scroll progressively to ensure NarrativeScene triggers
        for i in range(1, 15):
            page.evaluate(f'window.scrollTo(0, {i * 500})')
            page.wait_for_timeout(500)

        page.screenshot(path="/home/jules/verification/screenshots/narrative.png", full_page=True)
        context.close()
        browser.close()

if __name__ == "__main__":
    verify()
