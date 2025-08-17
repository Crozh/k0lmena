const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.locator('#mz-product-listing-image-37218329-0-3').click();
  await page.getByRole('button', { name: 'Buy now' }).click();
  await page.getByText('Guest Checkout').click();
  await page.getByText('I have read and agree to the Terms & Conditions').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();