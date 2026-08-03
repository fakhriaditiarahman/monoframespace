import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Create a new context with video recording enabled
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos/")
        page = await context.new_page()

        await page.goto('http://localhost:3000', wait_until='networkidle')

        # Give it a moment to render the initial scene
        await page.wait_for_timeout(2000)

        # Scroll down progressively to reach the NarrativeScene
        # The HeroScene is 180vh, so scrolling a few times
        for _ in range(5):
            await page.mouse.wheel(0, 500)
            await page.wait_for_timeout(500)

        # Wait a bit for the useTransform animations to update
        await page.wait_for_timeout(1000)

        await page.screenshot(path='/home/jules/verification/screenshots/narrative.png')

        await context.close()
        await browser.close()

asyncio.run(run())
