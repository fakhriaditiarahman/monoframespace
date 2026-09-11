import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(record_video_dir="/home/jules/verification/videos/")
        page = await context.new_page()

        try:
            await page.goto("http://localhost:3000", wait_until="networkidle", timeout=15000)

            # Wait for any potential initial loading states to resolve
            await page.wait_for_timeout(2000)

            # Move mouse across screen to trigger cursor events
            print("Moving mouse...")
            await page.mouse.move(100, 100)
            await page.wait_for_timeout(200)
            await page.mouse.move(200, 200)
            await page.wait_for_timeout(200)
            await page.mouse.move(300, 300)
            await page.wait_for_timeout(200)

            # Move over a clickable element to test the state change
            print("Hovering over a link...")
            link = page.get_by_role("link").first
            if link:
                await link.hover()
                await page.wait_for_timeout(500)

            # Move over an element with data-cursor-text
            # Note: The codebase might not have this on the main page currently,
            # but we'll try to find one or just move randomly
            print("Moving mouse again...")
            await page.mouse.move(400, 400)
            await page.wait_for_timeout(200)

            # Capture final state
            print("Taking screenshot...")
            await page.screenshot(path="/home/jules/verification/screenshots/cursor.png")
            print("Success")
        except Exception as e:
            print(f"Error occurred: {e}")

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
