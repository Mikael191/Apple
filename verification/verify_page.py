
from playwright.sync_api import sync_playwright
import time

def verify_landing_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the page
        page.goto("http://localhost:3000")

        # Wait for initial animations to complete
        time.sleep(2)

        # Take a screenshot of the Hero section
        page.screenshot(path="verification/1_hero.png")

        # Scroll to Performance section
        page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.25)")
        time.sleep(2) # Wait for scroll animation
        page.screenshot(path="verification/2_performance.png")

        # Scroll to Vision section
        page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.5)")
        time.sleep(2)
        page.screenshot(path="verification/3_vision.png")

        # Scroll to Features section
        page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.75)")
        time.sleep(2)
        page.screenshot(path="verification/4_features.png")

        # Scroll to Footer
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(2)
        page.screenshot(path="verification/5_footer.png")

        browser.close()

if __name__ == "__main__":
    verify_landing_page()
