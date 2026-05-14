from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:3000')

        # Wait for initial load
        page.wait_for_timeout(2000)

        # Scroll down slightly more carefully to capture the Narrative Scene
        page.evaluate(f'window.scrollTo(0, 1500)')
        page.wait_for_timeout(1000)

        # Take screenshot of the narrative section
        page.screenshot(path='narrative_scene_1500.png')

        page.evaluate(f'window.scrollTo(0, 2500)')
        page.wait_for_timeout(1000)

        page.screenshot(path='narrative_scene_2500.png')

        print("Screenshots saved")
        browser.close()

if __name__ == "__main__":
    main()