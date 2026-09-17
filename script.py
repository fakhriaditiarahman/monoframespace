from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        record_video_dir="/home/jules/verification/videos",
        viewport={"width": 1280, "height": 720}
    )
    page = context.new_page()
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Scroll to trigger NarrativeScene animations
    for i in range(10):
        page.evaluate("window.scrollBy(0, 500)")
        page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/narrative.png")

    context.close()
    browser.close()
