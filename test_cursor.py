import time
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context(record_video_dir="/home/jules/verification/videos")
    page = context.new_page()

    print("Navigating to http://localhost:3000...")
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")
    time.sleep(2)

    # Capture an initial screenshot
    page.screenshot(path="/home/jules/verification/screenshots/initial.png")
    print("Initial screenshot captured.")

    # Move the mouse to trigger the cursor logic
    print("Moving mouse to (100, 100)...")
    page.mouse.move(100, 100)
    time.sleep(0.5)

    # Hover over an interactive element to trigger cursor scaling
    print("Hovering over a link/button...")
    link = page.locator("a, button").first
    if link:
        link.hover()
        time.sleep(1)
        page.screenshot(path="/home/jules/verification/screenshots/hover.png")
        print("Hover screenshot captured.")

    context.close()
    browser.close()
    print("Verification complete.")

with sync_playwright() as playwright:
    run(playwright)
