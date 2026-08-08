from playwright.sync_api import sync_playwright

def verify_narrative_scene():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            record_video_size={"width": 1280, "height": 720}
        )
        page = context.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})

        print("Navigating to page...")
        page.goto('http://localhost:3000')
        page.wait_for_load_state('networkidle')

        print("Scrolling down to NarrativeScene...")
        # Scroll progressively to trigger animations
        page.mouse.wheel(0, 1500)
        page.wait_for_timeout(1000)
        page.mouse.wheel(0, 1500)
        page.wait_for_timeout(1000)

        print("Capturing screenshot...")
        page.screenshot(path='/home/jules/verification/screenshots/narrative_scene_optimized.png')

        context.close()
        browser.close()

if __name__ == "__main__":
    verify_narrative_scene()
