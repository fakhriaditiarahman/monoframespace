import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        await page.goto('http://localhost:3000')

        # Wait for initial load
        await page.wait_for_timeout(2000)

        # Scroll down to NarrativeScene (approximately below hero and product slider)
        # Hero is 180vh, slider is some height, let's scroll to ~2000px
        await page.evaluate('window.scrollTo(0, 2500)')

        # Wait for the scroll triggered animations (framer-motion) to render and opacity to update
        await page.wait_for_timeout(2000)

        # Take screenshot
        await page.screenshot(path='narrative_scene.png')
        await browser.close()

asyncio.run(main())
