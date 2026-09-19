import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos/")
        page = await context.new_page()

        # Navigate to localhost:3000
        await page.goto("http://localhost:3000")

        # Wait for hydration
        await page.wait_for_timeout(2000)

        # Scroll to NarrativeScene progressively
        await page.evaluate("window.scrollTo(0, 1000)")
        await page.wait_for_timeout(500)
        await page.evaluate("window.scrollTo(0, 2000)")
        await page.wait_for_timeout(500)

        # Capture screenshot
        import os
        os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
        await page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=True)

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
