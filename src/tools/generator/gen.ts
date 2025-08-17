const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.getByRole('button', { name: '0' }).click();
  await page.locator('.mz-pure-overlay').click();
  await page.locator('#swiper-wrapper-3238c78de0910d173').getByLabel('4 /').getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'Checkout ' }).click();
  await page.getByRole('button', { name: 'Continue ' }).click();
  await page.getByText('Warning: You must agree to').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();