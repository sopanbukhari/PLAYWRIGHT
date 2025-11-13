// @ts-check
import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test('has title', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/SignIn.html');
  await page.locator('')
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.use({video:'on'})
test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/SignIn.html');
  await page.getByRole('textbox', { name: 'E mail' }).fill('test');
  await page.getByRole('textbox', { name: 'Password' }).fill('coba');
  await page.getByRole('link', { name: 'Logo missing' }).click();
  // Verifikasi teks error muncul
  await expect(page.locator('text=Invalid User Name or PassWord')).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
