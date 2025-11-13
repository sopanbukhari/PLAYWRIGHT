import { test } from '@playwright/test';

export async function loginStep(page, username, password) {
    await test.step('Login ke aplikasi', async () => {
    await page.goto('https://iosdev.ieb.go.id/LPEI_IOS/login');
    await page.getByRole('textbox', { name: 'Username' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Masuk' }).click();

    // Screenshot dan attach ke report
    const screenshot = await page.screenshot();
    await test.info().attach('Step - Login', { body: screenshot, contentType: 'image/png' });
  });
}
