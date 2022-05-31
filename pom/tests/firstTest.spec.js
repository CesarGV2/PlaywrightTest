const{ test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright')
    await expect(page).toHaveScreenshot('landing-page.png');
});