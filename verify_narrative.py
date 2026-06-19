import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = await context.new_page()

        await page.goto("http://localhost:3000")
        await page.wait_for_timeout(2000)  # Wait for initial load

        # Scroll down to NarrativeScene
        await page.evaluate("window.scrollTo(0, window.innerHeight * 1.5)")
        await page.wait_for_timeout(1000)

        # Take a screenshot
        import os
        os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
        await page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png")

        await context.close()
        await browser.close()

asyncio.run(main())
