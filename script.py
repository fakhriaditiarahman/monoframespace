from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    # Configure context to record video
    context = browser.new_context(record_video_dir="/home/jules/verification/videos")
    page = context.new_page()

    # Navigate to the local server
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")

    # Scroll to NarrativeScene (Scene 2, roughly around y=1000 to 2000)
    page.evaluate("window.scrollTo(0, 1500)")
    page.wait_for_timeout(1000) # Wait for animation
    page.evaluate("window.scrollTo(0, 1800)")
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 2000)")
    page.wait_for_timeout(1000)

    # Capture screenshot
    page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=True)

    # Close context and browser to finalize video recording
    context.close()
    browser.close()
    print("Verification complete")
