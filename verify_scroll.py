from playwright.sync_api import sync_playwright

def verify_scroll():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:3000")

        # Scroll to NarrativeScene incrementally
        for i in range(1, 15):
            page.evaluate(f"window.scrollTo(0, {i * 200})")
            page.wait_for_timeout(100)

        page.screenshot(path="narrative_scene.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    verify_scroll()