from playwright.sync_api import sync_playwright

def verify_narrative_scene():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://localhost:3000/')
        page.wait_for_load_state('networkidle')

        # Scroll progressively to trigger the reveal animation
        page.evaluate("window.scrollTo(0, 1500)")
        page.wait_for_timeout(1000)

        # Capture screenshot of the NarrativeScene
        page.screenshot(path="narrative_scene.png", full_page=True)
        print("Screenshot saved to narrative_scene.png")
        browser.close()

if __name__ == '__main__':
    verify_narrative_scene()
