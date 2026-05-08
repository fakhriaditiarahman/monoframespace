import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(record_video_dir="videos/")
        page = await context.new_page()

        await page.goto("http://localhost:3000/")

        # Scroll down progressively to reach the NarrativeScene
        # The NarrativeScene is around 180vh down (HeroScene is 180vh)
        # We will scroll and wait to capture the animation

        await page.wait_for_timeout(1000)

        # Scroll by 1000px increments
        for _ in range(5):
            await page.evaluate("window.scrollBy(0, 1000)")
            await page.wait_for_timeout(500)

        await page.screenshot(path="narrative_scene.png", full_page=True)

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
