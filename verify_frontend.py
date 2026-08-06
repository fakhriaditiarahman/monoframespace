from playwright.sync_api import sync_playwright
import os

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context()
    page = context.new_page()

    page.goto('http://localhost:3000')
    page.wait_for_load_state('networkidle')

    # Scroll a specific amount to land exactly in the NarrativeScene text scrub section
    page.evaluate("window.scrollTo(0, 1500)")
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollBy(0, 1000)")
    page.wait_for_timeout(1000)

    page.screenshot(path='/home/jules/verification/screenshots/narrative2.png')

    context.close()
    browser.close()
