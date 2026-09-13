import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={"width": 1280, "height": 720}
        )
        page = await context.new_page()

        print("Navigating to http://localhost:3000/")
        await page.goto("http://localhost:3000/")

        # Scroll down progressively to reach the NarrativeScene
        print("Scrolling down to reveal NarrativeScene...")
        for i in range(3):
            await page.mouse.wheel(0, 1000)
            await page.wait_for_timeout(1000)

        print("Capturing screenshot...")
        await page.screenshot(path="/home/jules/verification/screenshots/narrative.png", full_page=False)

        print("Done. Closing browser.")
        await context.close()
        await browser.close()

asyncio.run(run())
