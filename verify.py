import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos")
        page = await context.new_page()

        await page.goto('http://localhost:3000')
        await page.wait_for_timeout(2000) # Wait for initial animations

        # Move mouse to trigger cursor
        await page.mouse.move(100, 100)
        await page.wait_for_timeout(500)

        # Move mouse to a clickable element or element with data-cursor-text to test hovering states
        # Let's just simulate some mouse movement across the screen to capture the cursor logic
        await page.mouse.move(500, 500)
        await page.wait_for_timeout(500)

        await page.mouse.move(800, 200)
        await page.wait_for_timeout(500)

        await page.screenshot(path='/home/jules/verification/screenshots/hover.png')

        await context.close()
        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
