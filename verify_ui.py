import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            record_video_size={"width": 1280, "height": 720}
        )
        page = await context.new_page()

        print("Navigating to http://localhost:3000...")
        await page.goto("http://localhost:3000")

        # Wait for initial load
        await page.wait_for_load_state("networkidle")
        await page.wait_for_timeout(2000)

        # Scroll down to NarrativeScene progressively
        print("Scrolling down to trigger NarrativeScene animations...")
        for i in range(5):
            await page.evaluate(f"window.scrollBy(0, 800)")
            await page.wait_for_timeout(1000)

        print("Capturing screenshot of NarrativeScene...")
        await page.screenshot(path="/home/jules/verification/screenshots/narrative.png", full_page=False)

        await context.close()
        await browser.close()
        print("Verification complete.")

asyncio.run(run())
