from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(record_video_dir="/home/jules/verification/videos")
    page = context.new_page()

    # Go to NarrativeScene on localhost
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Scroll slowly to view the NarrativeScene logic
    for _ in range(5):
        page.mouse.wheel(0, 1000)
        page.wait_for_timeout(500)

    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=True)
    context.close()
    browser.close()
