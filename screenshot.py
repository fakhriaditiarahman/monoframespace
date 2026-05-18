import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1280, "height": 800})

        print("Navigating to local dev server...")
        await page.goto('http://localhost:3000', wait_until='networkidle')

        print("Scrolling down incrementally to reach the NarrativeScene (Scene 2)...")
        # Scroll progressively to allow animations to trigger
        for step in range(5):
            await page.evaluate(f"window.scrollBy(0, 1000)")
            await page.wait_for_timeout(500)

        print("Taking screenshot of NarrativeScene...")
        await page.screenshot(path='narrative_scene.png')

        await browser.close()
        print("Done!")

asyncio.run(main())
