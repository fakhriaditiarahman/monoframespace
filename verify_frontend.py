from playwright.sync_api import sync_playwright

def verify_narrative_scene():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        print("Navigating to localhost:3000...")
        page.goto("http://localhost:3000", wait_until="networkidle")

        print("Scrolling to NarrativeScene...")
        page.evaluate("window.scrollTo(0, 1500)")
        page.wait_for_timeout(500)

        page.evaluate("window.scrollTo(0, 2000)")
        page.wait_for_timeout(500)

        page.screenshot(path="narrative_scene.png")
        print("Screenshot saved to narrative_scene.png")

        browser.close()

if __name__ == "__main__":
    verify_narrative_scene()
