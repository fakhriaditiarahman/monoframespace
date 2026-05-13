from playwright.sync_api import sync_playwright

def verify_narrative_scene():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        # Navigate to home
        page.goto('http://localhost:3000', wait_until='networkidle')

        # Wait for the narrative scene container to be visible and scroll it into view
        container_selector = 'section.py-32.md\\:py-64.bg-blue-50.relative.z-20 p'
        page.wait_for_selector(container_selector, state='attached')
        element = page.locator(container_selector)
        element.scroll_into_view_if_needed()

        # Simulate some scrolling to trigger the animation
        page.evaluate("window.scrollBy(0, 100)")
        page.wait_for_timeout(1000)

        # Take a screenshot
        screenshot_path = 'narrative_scene.png'
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_narrative_scene()