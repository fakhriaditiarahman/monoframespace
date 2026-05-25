from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Open page
        page.goto('http://localhost:3000')

        # Wait for hydration
        time.sleep(2)

        # Trigger mouse movement
        page.mouse.move(100, 100)
        time.sleep(0.5)
        page.mouse.move(200, 200)

        # Instead of locator hover which fails due to overlay intercepts, just force a mouse movement over a generic element
        # Coordinates will trigger the mousemove and potentially hover over something
        page.mouse.move(page.viewport_size['width'] // 2, page.viewport_size['height'] // 2)

        time.sleep(1)

        # Screenshot
        page.screenshot(path='screenshot.png')
        print("Screenshot saved to screenshot.png")

        browser.close()

if __name__ == '__main__':
    run()
