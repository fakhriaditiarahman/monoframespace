import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        print("Navigating to local server...")
        await page.goto("http://localhost:3000")
        await page.wait_for_load_state("networkidle")

        print("Scrolling down to narrative scene...")
        for i in range(5):
            await page.evaluate("window.scrollBy(0, 800)")
            await page.wait_for_timeout(300)
            await page.screenshot(path=f"screenshot_narrative_{i}.png")
            print(f"Captured screenshot_narrative_{i}.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
