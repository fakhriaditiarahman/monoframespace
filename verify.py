from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = context.new_page()

        page.goto("http://localhost:3000")
        page.wait_for_timeout(2000) # wait for load

        # Scroll to NarrativeScene which is right below Hero (180vh) and ProductSlider
        # Let's scroll incrementally down
        for i in range(10):
            page.evaluate(f"window.scrollBy(0, 500)")
            page.wait_for_timeout(500)

        page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png")

        context.close()
        browser.close()

verify()
