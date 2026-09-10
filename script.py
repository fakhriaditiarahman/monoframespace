from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(record_video_dir="/home/jules/verification/videos/")
    page = context.new_page()

    # Navigate to the page
    page.goto("http://localhost:3000")

    # Wait for the page to load
    page.wait_for_load_state("networkidle")

    # Scroll down to the NarrativeScene (approx 180vh from HeroScene)
    page.evaluate("window.scrollTo(0, 1500)")
    page.wait_for_timeout(2000)

    # Scroll a bit more to trigger the text scrub
    page.evaluate("window.scrollTo(0, 2500)")
    page.wait_for_timeout(2000)

    # Capture the screenshot of the NarrativeScene
    page.screenshot(path="/home/jules/verification/screenshots/narrative.png", full_page=False)

    context.close()
    browser.close()
