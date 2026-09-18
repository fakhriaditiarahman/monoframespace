from playwright.sync_api import sync_playwright
import time
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos/", viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        print("Navigating to http://localhost:3000...")
        page.goto("http://localhost:3000", wait_until="networkidle", timeout=60000)
        print("Page loaded. Waiting 2 seconds for initial animations to settle...")
        time.sleep(2)

        # Scroll progressively to trigger scroll-based animations (NarrativeScene)
        # It's at SCENE 2, around 1000px-1500px down
        print("Scrolling down progressively...")
        for i in range(1, 4):
            page.mouse.wheel(0, 1000)
            print(f"Scrolled down {i*1000}px. Waiting...")
            time.sleep(1)

        print("Taking screenshot of NarrativeScene...")
        page.screenshot(path="/home/jules/verification/screenshots/narrative.png")

        print("Closing context to save video...")
        context.close()
        browser.close()
        print("Done.")

if __name__ == "__main__":
    run()
