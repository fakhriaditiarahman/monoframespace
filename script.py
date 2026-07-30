import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = await context.new_page()

        print("Navigating to localhost:3000...")
        await page.goto("http://localhost:3000")
        await page.wait_for_timeout(2000)

        print("Scrolling down progressively...")
        await page.evaluate("window.scrollTo(0, 1000)")
        await page.wait_for_timeout(1000)

        await page.evaluate("window.scrollTo(0, 2000)")
        await page.wait_for_timeout(1000)

        # Capture screenshot around where NarrativeScene should be active
        print("Capturing screenshot...")
        await page.screenshot(path="/home/jules/verification/screenshots/narrative.png")

        print("Closing browser...")
        await context.close()
        await browser.close()

asyncio.run(main())
