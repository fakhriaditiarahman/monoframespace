from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        record_video_dir="/home/jules/verification/videos",
        record_video_size={"width": 1280, "height": 720},
        viewport={"width": 1280, "height": 720}
    )
    page = context.new_page()

    # Navigate to the page
    page.goto("http://localhost:3000", wait_until="networkidle")

    # Scroll down progressively to reach the NarrativeScene
    # NarrativeScene is right after the ProductSlider
    for i in range(3):
        page.evaluate(f"window.scrollBy(0, 1000)")
        page.wait_for_timeout(1000)

    # Allow time for framer-motion animations to settle
    page.wait_for_timeout(2000)

    # Capture the screenshot of the NarrativeScene section
    page.screenshot(path="/home/jules/verification/screenshots/narrative-scene.png", full_page=False)

    context.close()
    browser.close()
