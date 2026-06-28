from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = context.new_page()
        page.goto("http://localhost:3000")
        page.wait_for_timeout(2000)
        page.mouse.wheel(0, 2000)
        page.wait_for_timeout(2000)
        page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png")
        context.close()
        browser.close()

if __name__ == "__main__":
    main()
