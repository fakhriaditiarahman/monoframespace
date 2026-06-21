from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(record_video_dir="/home/jules/verification/videos/")
    page = context.new_page()

    print("Navigating to page...")
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")

    print("Hovering over clickable element (a tag)...")
    # Custom cursor also triggers on 'a', 'button', '[role="button"]'
    element = page.locator("a").first
    box = element.bounding_box()
    if box:
        x = box["x"] + box["width"] / 2
        y = box["y"] + box["height"] / 2
        page.mouse.move(x, y)
        page.wait_for_timeout(1000)
    else:
        print("Could not find element bounding box.")

    print("Capturing screenshot...")
    page.screenshot(path="/home/jules/verification/screenshots/cursor.png")

    print("Done. Closing browser...")
    context.close()
    browser.close()
