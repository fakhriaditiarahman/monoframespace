from playwright.sync_api import sync_playwright
import time

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('http://localhost:3000')

        # Wait for the page to load
        page.wait_for_timeout(2000)

        # Scroll down progressively to reach NarrativeScene
        for i in range(5):
            page.evaluate(f'window.scrollBy(0, 1000)')
            page.wait_for_timeout(500)

        page.screenshot(path='narrative_scene_screenshot.png')
        print("Screenshot saved to narrative_scene_screenshot.png")
        browser.close()

if __name__ == '__main__':
    main()
