import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos/")
        page = await context.new_page()

        print("Navigating to http://localhost:3000...")
        await page.goto("http://localhost:3000")
        await page.wait_for_timeout(2000)

        print("Scrolling down to the NarrativeScene...")
        # Scroll progressively to ensure the scene enters view and triggers the scroll-based animation
        for _ in range(5):
            await page.mouse.wheel(0, 500)
            await page.wait_for_timeout(500)

        print("Taking screenshot...")
        await page.screenshot(path="/home/jules/verification/screenshots/narrative-scene.png", full_page=False)

        await context.close()
        await browser.close()
        print("Verification completed successfully.")

if __name__ == "__main__":
    asyncio.run(main())
