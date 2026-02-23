from playwright.sync_api import sync_playwright

def run(p):
    browser = p.chromium.launch()
    page = browser.new_page()

    # Go to home
    try:
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")
    except Exception as e:
        print(f"Error loading page: {e}")
        return

    # 1. Desktop Header
    print("Taking desktop header screenshot...")
    page.screenshot(path="verification/header_desktop.png")

    # 2. Open Dropdown
    print("Hovering over 'Produk'...")
    try:
        # Find the button with text "Produk". It might be uppercase in UI but accessible name usually follows text content.
        # But if text is transformed via CSS, the accessible name is still the original text "Produk".
        produk_btn = page.get_by_role("button", name="Produk")
        if produk_btn.count() > 0:
            produk_btn.hover()
            page.wait_for_timeout(500)
            print("Taking dropdown screenshot...")
            page.screenshot(path="verification/header_dropdown.png")
        else:
            print("Button 'Produk' not found!")
    except Exception as e:
        print(f"Error hovering dropdown: {e}")

    # 3. Mobile Menu
    print("Switching to mobile view...")
    page.set_viewport_size({"width": 375, "height": 812})
    page.wait_for_timeout(500)

    # Click hamburger
    # It is the only visible button in the nav on mobile.
    try:
        hamburger = page.locator("nav button:visible").last
        hamburger.click()

        # Wait for mobile menu animation
        page.wait_for_timeout(1000)
        print("Taking mobile menu screenshot...")
        page.screenshot(path="verification/header_mobile.png")
    except Exception as e:
        print(f"Error clicking hamburger: {e}")

    browser.close()

with sync_playwright() as p:
    run(p)
