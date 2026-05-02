import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(record_video_dir="videos/", viewport={"width": 1280, "height": 720})
        page = await context.new_page()

        # Go to the homepage
        await page.goto("http://localhost:3000")

        # We know the text is split into spans now: "Di", "Monoframe,", etc.
        # Let's wait for one of the unique words, or just scroll down
        await page.wait_for_timeout(2000)

        # Scroll progressively to trigger the opacity transform on the narrative words
        # The narrative scene has a large padding/margin (py-32 md:py-64), so it's lower on the page

        for i in range(1, 15):
            await page.evaluate(f"window.scrollBy(0, 500)")
            await page.wait_for_timeout(300) # Give framer-motion time to animate

        # Capture a screenshot around the narrative section
        await page.screenshot(path="narrative-scene.png", full_page=True)

        await context.close()
        await browser.close()

asyncio.run(run())