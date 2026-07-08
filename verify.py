import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            record_video_dir="/home/jules/verification/videos/",
            record_video_size={"width": 1280, "height": 720}
        )
        page = await context.new_page()

        # Give server time to boot
        print("Waiting for server to be ready...")
        await page.goto("http://localhost:3000")

        print("Scrolling down to trigger NarrativeScene animations...")
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.3);")
        await page.wait_for_timeout(1000)

        await page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.45);")
        await page.wait_for_timeout(1000)

        print("Capturing screenshot...")
        await page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png", full_page=False)

        await context.close()
        await browser.close()
        print("Done.")

asyncio.run(run())
