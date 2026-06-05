import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
    os.makedirs('/home/jules/verification/videos', exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            record_video_dir='/home/jules/verification/videos',
            viewport={'width': 1280, 'height': 800}
        )
        page = await context.new_page()

        print("Navigating to page...")
        await page.goto("http://localhost:3000", wait_until="networkidle")

        print("Waiting for NarrativeScene to be visible or for timeout...")
        await page.wait_for_timeout(2000)

        # Scroll progressively to trigger the useTransform animation in NarrativeScene
        print("Progressively scrolling to NarrativeScene...")
        for i in range(10):
            await page.evaluate(f"window.scrollBy(0, 500)")
            await page.wait_for_timeout(300)

        print("Capturing screenshot of NarrativeScene...")
        await page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

        await context.close()
        await browser.close()

        print("Verification complete.")

if __name__ == "__main__":
    asyncio.run(main())
