import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            record_video_dir="/home/jules/verification/videos/",
            viewport={'width': 1280, 'height': 720}
        )
        page = await context.new_page()

        await page.goto("http://localhost:3000/")

        # Wait for any initial animations
        await page.wait_for_timeout(2000)

        # Scroll down slightly to make sure content is loaded
        await page.evaluate("window.scrollBy(0, 500)")
        await page.wait_for_timeout(1000)

        # Move mouse around to trigger cursor events
        await page.mouse.move(100, 100)
        await page.wait_for_timeout(500)

        await page.mouse.move(500, 200)
        await page.wait_for_timeout(500)

        # Move to some coordinates that are likely to have clickable elements (e.g., header links)
        await page.mouse.move(600, 50)
        await page.wait_for_timeout(1000)

        # Move back to center
        await page.mouse.move(640, 360)
        await page.wait_for_timeout(500)

        await page.screenshot(path="/home/jules/verification/screenshots/cursor.png")

        await context.close()
        await browser.close()

asyncio.run(run())
