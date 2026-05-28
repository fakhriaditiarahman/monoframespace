import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Create context with video recording
        context = await browser.new_context(
            record_video_dir="/home/jules/verification/videos",
            viewport={"width": 1280, "height": 720}
        )
        page = await context.new_page()

        print("Navigating to localhost:3000")
        await page.goto("http://localhost:3000")
        await page.wait_for_load_state("networkidle")

        print("Moving mouse to trigger custom cursor...")
        # Move mouse around to see cursor
        await page.mouse.move(500, 500)
        await page.wait_for_timeout(500)

        print("Hovering over a clickable element...")
        # Hover over an element (e.g. navigation link)
        nav_link = page.locator('a[href="/"]').first
        if await nav_link.count() > 0:
            box = await nav_link.bounding_box()
            if box:
                await page.mouse.move(box["x"] + box["width"] / 2, box["y"] + box["height"] / 2)
                await page.wait_for_timeout(1000)
        else:
            await page.mouse.move(100, 100)
            await page.wait_for_timeout(1000)

        os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
        screenshot_path = "/home/jules/verification/screenshots/custom_cursor.png"
        await page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        # Close context to ensure video is saved
        await context.close()
        await browser.close()
        print("Done.")

if __name__ == "__main__":
    asyncio.run(main())