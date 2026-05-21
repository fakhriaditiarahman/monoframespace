import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Setup viewport to mimic a reasonable desktop size
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        await page.goto('http://localhost:3000')

        print("Scrolling page to trigger animation...")

        # We need to scroll down further to reach the NarrativeScene section
        # ProductSlider takes up a lot of vertical space, so let's try a larger scroll
        for i in range(10):
            await page.evaluate("window.scrollBy(0, 1000)")
            await page.wait_for_timeout(500)

            # Check if the NarrativeScene is in the viewport by evaluating an expression
            # The narrative text is inside a section with text "Di Monoframe"
            is_visible = await page.evaluate('''() => {
                const elements = Array.from(document.querySelectorAll('*'));
                const el = elements.find(e => e.textContent && e.textContent.includes('Di Monoframe'));
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= window.innerHeight;
            }''')

            if is_visible:
                print(f"NarrativeScene found at iteration {i}. Stopping scroll.")
                break

        # Wait a moment for any final scroll animations to settle
        await page.wait_for_timeout(1000)

        # Take a full page screenshot just in case we missed it
        await page.screenshot(path='narrative_scene.png', full_page=True)
        print("Screenshot saved to narrative_scene.png")

        await browser.close()

if __name__ == '__main__':
    asyncio.run(run())
