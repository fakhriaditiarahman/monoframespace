import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        print("Navigating to local server...")
        await page.goto("http://localhost:3000")
        await page.wait_for_load_state("networkidle")

        # Take initial screenshot of hero
        await page.screenshot(path="screenshot_1_hero.png")
        print("Captured hero screenshot.")

        # Scroll to NarrativeScene (scene 2)
        # Using progressive scroll to allow scroll events and animations to trigger
        print("Scrolling down...")
        await page.evaluate("window.scrollBy(0, 3500)")
        await page.wait_for_timeout(500)
        await page.evaluate("window.scrollBy(0, 1000)")
        await page.wait_for_timeout(1000)

        # Take a screenshot showing the partially revealed text
        await page.screenshot(path="screenshot_2_narrative_scene.png")
        print("Captured NarrativeScene screenshot.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())