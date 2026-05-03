from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(record_video_dir="videos/")
    page = context.new_page()
    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Scroll down to NarrativeScene
    for i in range(5):
        page.evaluate("window.scrollBy(0, 800)")
        page.wait_for_timeout(500)

    page.screenshot(path="narrative_scene.png")

    # Scroll a bit more
    for i in range(5):
        page.evaluate("window.scrollBy(0, 800)")
        page.wait_for_timeout(500)

    context.close()
    browser.close()
