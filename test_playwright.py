from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Open the main page
        print("Navigating to http://localhost:3000...")
        page.goto("http://localhost:3000", wait_until="networkidle")

        # Scroll down incrementally to reach the NarrativeScene
        print("Scrolling down incrementally...")
        # The NarrativeScene is down a bit, likely between 1000 and 3000px
        for i in range(1, 4):
            page.evaluate(f"window.scrollBy(0, 1000)")
            page.wait_for_timeout(500)
            print(f"Scrolled to approx {1000*i}px")

            # Take a screenshot to verify text reveal
            screenshot_path = f"narrative_scene_{i}.png"
            page.screenshot(path=screenshot_path)
            print(f"Captured screenshot: {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_frontend()
