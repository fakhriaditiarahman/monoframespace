from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800})

    # Go to local server
    page.goto('http://localhost:3000')

    # Wait for initial load
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(2000)

    # Scroll down to reach NarrativeScene specifically
    print("Scrolling to NarrativeScene...")
    # Scroll exactly to the NarrativeScene section which is after HeroScene and ProductSlider
    page.evaluate("window.scrollTo(0, window.innerHeight * 2.5)")
    page.wait_for_timeout(2000)

    page.screenshot(path='narrative_scene3.png')
    print("Screenshot saved to narrative_scene3.png")

    browser.close()
