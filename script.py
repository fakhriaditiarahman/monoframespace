from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        record_video_dir="/home/jules/verification/videos/"
    )
    page = context.new_page()
    page.goto("http://localhost:3000", wait_until="networkidle")

    # The NarrativeScene is the 3rd section, wait a bit then scroll down
    page.wait_for_timeout(2000)

    # Scroll in increments to trigger useTransform animations smoothly for the video
    for i in range(1, 6):
        page.evaluate(f"window.scrollTo(0, {i * 800})")
        page.wait_for_timeout(1000)

    # Capture the specific narrative scene region roughly
    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

    context.close()
    browser.close()
