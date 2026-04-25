from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.set_viewport_size({"width": 1280, "height": 720})
    page.goto('http://localhost:3000')

    # Wait for the page to load
    page.wait_for_timeout(2000)

    # Scroll down to the narrative scene section.
    # The hero section is large, let's scroll by 1500px, then 3000px, etc.
    page.evaluate('window.scrollTo(0, 1000)')
    page.wait_for_timeout(500)
    page.evaluate('window.scrollTo(0, 2000)')
    page.wait_for_timeout(500)
    page.evaluate('window.scrollTo(0, 3000)')
    page.wait_for_timeout(500)

    # Take screenshot
    page.screenshot(path='narrative_scene3.png')

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
