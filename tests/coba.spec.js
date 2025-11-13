// @ts-check
import { test, expect } from '@playwright/test';
import { loginStep } from '../helpers/steps';
test('has title', async ({ page }) => {
  await test.step('Buka halaman login',async () => {
  });
  await loginStep(page, 'rm', '123456');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Main Menu/);
  await expect(page.getByText(' Integrated Originating System v1.0.8')).toBeVisible();
  const screenshot = await page.screenshot();
     // attach ke report Playwright
    await test.info().attach('halaman utama', { 
        body: screenshot, 
        contentType: 'image/png'
    });
});

test('has titles', async ({ page }) => {
  await test.step('Buka halaman login',async () => {
    await page.goto('https://demo.automationtesting.in/Index.html');
    const screenshot = await page.screenshot();
     // attach ke report Playwright
    await test.info().attach('halaman utama', { 
        body: screenshot, 
        contentType: 'image/png'
    });
  });
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Index/);
});