import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = await context.new_page()

        print("Navigating to http://localhost:3000...")
        await page.goto("http://localhost:3000")
        await page.wait_for_load_state("networkidle")

        print("Scrolling down progressively...")
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.3)")
        await page.wait_for_timeout(1000)
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.5)")
        await page.wait_for_timeout(1000)

        # Take a screenshot of the NarrativeScene region
        print("Taking screenshot...")
        await page.screenshot(path="/home/jules/verification/screenshots/narrative.png", full_page=False)

        await context.close()
        await browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    asyncio.run(main())
