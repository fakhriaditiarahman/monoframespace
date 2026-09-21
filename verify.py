from playwright.sync_api import sync_playwright
import time
import os

with sync_playwright() as p:
    browser = p.chromium.launch()

    # Configure context to record video
    video_dir = "/home/jules/verification/videos"
    os.makedirs(video_dir, exist_ok=True)

    context = browser.new_context(
        record_video_dir=video_dir,
        record_video_size={"width": 1280, "height": 720}
    )

    page = context.new_page()
    page.set_viewport_size({"width": 1280, "height": 720})

    # Wait for Next.js to compile and start serving
    print("Waiting for dev server...")
    time.sleep(15)

    print("Navigating to localhost:3000")
    try:
        page.goto("http://localhost:3000", wait_until="networkidle", timeout=60000)
    except Exception as e:
        print(f"Error navigating: {e}")

    print("Progressively scrolling to trigger NarrativeScene animations")
    # Scroll multiple times to make sure we hit the NarrativeScene
    for i in range(10):
        page.evaluate(f"window.scrollBy(0, 500)")
        page.wait_for_timeout(500)

    print("Taking screenshot")
    screenshot_path = "/home/jules/verification/screenshots/narrative.png"
    page.screenshot(path=screenshot_path)
    print(f"Screenshot saved to {screenshot_path}")

    context.close()
    browser.close()
    print("Done")
