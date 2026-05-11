import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(record_video_dir="videos/")
        page = await context.new_page()

        # Load the page
        await page.goto("http://localhost:3000/")

        # Wait for the initial load
        await page.wait_for_load_state("networkidle")

        # We need to scroll down to the NarrativeScene.
        # It's right after the ProductSlider.
        # We'll scroll in increments to let animations play and trigger the scrub effect.

        print("Scrolling down to NarrativeScene...")
        for i in range(15):
            await page.evaluate("window.scrollBy(0, 500)")
            await page.wait_for_timeout(300)  # Wait for animations and smooth scrolling

        # Take a screenshot to confirm we see the text partially or fully revealed
        await page.screenshot(path="narrative_scene.png", full_page=False)
        print("Screenshot saved to narrative_scene.png")

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
