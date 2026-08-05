from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    context = browser.new_context(record_video_dir="/home/jules/verification/videos/")
    page = context.new_page()

    page.goto("http://localhost:3000")

    # Wait for initial load
    page.wait_for_timeout(2000)

    # Progressively scroll down to trigger the narrative scene text reveal
    for i in range(10):
        page.evaluate("window.scrollBy(0, 300)")
        page.wait_for_timeout(200)

    # Capture screenshot
    page.screenshot(path="/home/jules/verification/screenshots/narrative.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
