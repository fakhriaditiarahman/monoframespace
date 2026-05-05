import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:3000")

        # Scroll down to narrative scene
        for i in range(1, 6):
            await page.evaluate(f"window.scrollTo(0, {i * 1000})")
            await page.wait_for_timeout(500)

        # Take screenshot
        await page.screenshot(path="screenshot-narrative2.png")

        await browser.close()

asyncio.run(run())
