import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:3000")

        # Take a screenshot of the hero section
        await page.screenshot(path="screenshot-hero.png")

        # Scroll down to narrative scene
        await page.evaluate("window.scrollBy(0, 2000)")
        await page.wait_for_timeout(1000)

        # Take screenshot
        await page.screenshot(path="screenshot-narrative.png")

        await browser.close()

asyncio.run(run())
