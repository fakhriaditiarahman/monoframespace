import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Start recording video
        context = await browser.new_context(record_video_dir="videos/")
        page = await context.new_page()

        await page.goto("http://localhost:3000")
        await page.wait_for_timeout(2000)

        # Scroll down progressively to reach the NarrativeScene
        for _ in range(5):
            await page.evaluate("window.scrollBy(0, window.innerHeight)")
            await page.wait_for_timeout(500)

        await page.screenshot(path="narrative_scene_scrub.png")

        await context.close()
        await browser.close()

asyncio.run(run())
