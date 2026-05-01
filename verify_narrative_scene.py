import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(record_video_dir="videos/")
        page = await context.new_page()

        print("Navigating to http://localhost:3000...")
        await page.goto("http://localhost:3000")
        await page.wait_for_load_state("networkidle")

        print("Progressively scrolling to capture NarrativeScene animation...")
        for i in range(1, 10):
            await page.evaluate(f"window.scrollTo(0, {i * 400})")
            await page.wait_for_timeout(500)

        print("Taking screenshot...")
        await page.screenshot(path="narrative_scene_verified.png")

        await context.close()
        await browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    asyncio.run(main())
