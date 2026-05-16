import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:3000")
        await page.wait_for_timeout(2000) # Wait for initial load

        # Scroll further down to NarrativeScene
        await page.evaluate("window.scrollTo(0, window.innerHeight * 2.5)")
        await page.wait_for_timeout(2000) # Wait for scroll and animation

        await page.screenshot(path="narrative_scene_2.png")
        await browser.close()

asyncio.run(main())
