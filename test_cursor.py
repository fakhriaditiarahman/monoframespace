import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Navigate to local server
        await page.goto("http://localhost:3000")
        await page.wait_for_timeout(2000)

        # Move mouse around to trigger cursor effects
        await page.mouse.move(100, 100)
        await page.wait_for_timeout(500)

        # Hover over something clickable to trigger states
        # The hero section button or navigation links
        links = await page.locator('a').all()
        if links:
            box = await links[0].bounding_box()
            if box:
                await page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
                await page.wait_for_timeout(1000)

        # Look for elements with data-cursor-text
        cursor_elements = await page.locator('[data-cursor-text]').all()
        if cursor_elements:
            box = await cursor_elements[0].bounding_box()
            if box:
                await page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
                await page.wait_for_timeout(1000)

        await page.screenshot(path="cursor_test.png")
        await browser.close()

asyncio.run(main())
