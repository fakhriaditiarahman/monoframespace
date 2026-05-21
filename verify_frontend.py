import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        await page.goto('http://localhost:3000')

        # Scroll down incrementally to trigger the scroll-based animation in NarrativeScene
        print("Scrolling page to trigger animation...")
        for i in range(5):
            await page.evaluate("window.scrollBy(0, 500)")
            await page.wait_for_timeout(500)

        await page.evaluate("window.scrollBy(0, 1000)")
        await page.wait_for_timeout(1000)

        # Look for the container that holds the NarrativeScene and capture a screenshot
        # It has the class "bg-blue-50" but we can just use the text itself
        element = page.locator('text=Di Monoframe, kami percaya bahwa setiap momen')

        await page.screenshot(path='narrative_scene.png')
        print("Screenshot saved to narrative_scene.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(run())
