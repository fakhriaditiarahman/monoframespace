import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
    os.makedirs('/home/jules/verification/videos', exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            record_video_dir='/home/jules/verification/videos',
            viewport={'width': 1280, 'height': 800}
        )
        page = await context.new_page()

        await page.goto('http://localhost:3000')
        await page.wait_for_timeout(2000)

        # Scroll to NarrativeScene (scene 2)
        await page.evaluate('window.scrollTo(0, 1500)')
        await page.wait_for_timeout(2000)

        # Incremental scroll to trigger the text reveal animation
        for i in range(5):
            await page.evaluate(f'window.scrollBy(0, 200)')
            await page.wait_for_timeout(500)

        await page.screenshot(path='/home/jules/verification/screenshots/screenshot.png')
        await context.close()
        await browser.close()

asyncio.run(main())
