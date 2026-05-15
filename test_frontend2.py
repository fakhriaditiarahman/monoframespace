from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to http://localhost:3000...")
        page.goto('http://localhost:3000')

        print("Waiting for page load...")
        page.wait_for_timeout(2000)

        print("Scrolling down to reveal NarrativeScene...")
        page.evaluate("window.scrollTo(0, 3000)")
        page.wait_for_timeout(1000)

        # Take a screenshot
        page.screenshot(path='narrative_scene2.png')

        print("Closing browser...")
        browser.close()

if __name__ == '__main__':
    verify_frontend()
