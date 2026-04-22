from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:3000')

    # Wait for hydration
    page.wait_for_timeout(2000)

    # Scroll to NarrativeScene (which is SCENE 2)
    # The first scene has h-[180vh]
    page.evaluate("window.scrollBy(0, window.innerHeight * 1.8)")

    page.wait_for_timeout(1000)
    page.screenshot(path="narrative_scene.png", full_page=True)
    browser.close()
