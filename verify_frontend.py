import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos/")
        page = await context.new_page()

        await page.goto("http://localhost:3000")

        # Progressive scroll to let components render and trigger scroll animations
        for _ in range(8):
            await page.evaluate("window.scrollBy(0, 1000)")
            await page.wait_for_timeout(500)

        await page.wait_for_timeout(2000)

        # Take a screenshot
        await page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=True)

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
