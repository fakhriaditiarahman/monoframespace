from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    context = browser.new_context(viewport={'width': 1280, 'height': 800})
    page = context.new_page()

    page.goto("http://localhost:3000")
    page.wait_for_timeout(2000)

    # Scroll down to NarrativeScene
    page.evaluate("window.scrollTo(0, 1500)")
    page.wait_for_timeout(1000)

    # Scroll a bit more to trigger the text reveal
    page.evaluate("window.scrollTo(0, 2000)")
    page.wait_for_timeout(1000)

    page.screenshot(path="narrative-scene.png", full_page=True)

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
