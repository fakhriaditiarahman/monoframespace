import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    # Setup directories
    os.makedirs('/home/jules/verification/screenshots', exist_ok=True)
    os.makedirs('/home/jules/verification/videos', exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            record_video_dir='/home/jules/verification/videos',
            record_video_size={'width': 1280, 'height': 720}
        )
        page = await context.new_page()

        print("Navigating to http://localhost:3000...")
        await page.goto("http://localhost:3000", wait_until="networkidle")

        print("Scrolling progressively...")
        for i in range(10):
            await page.evaluate(f"window.scrollBy(0, window.innerHeight * 0.5)")
            await page.wait_for_timeout(500)

            # Check if we reached NarrativeScene text "Di Monoframe"
            isVisible = await page.evaluate('''() => {
                const els = Array.from(document.querySelectorAll('span'));
                return els.some(el => el.textContent.includes('Monoframe,'));
            }''')

            if isVisible:
                print(f"NarrativeScene reached at scroll step {i}.")
                break

        print("Taking screenshot...")
        await page.screenshot(path="/home/jules/verification/screenshots/narrative_scene.png")

        await context.close()
        await browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    asyncio.run(verify())
