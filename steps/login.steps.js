import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

let browser;
let context;
let page;

Before(async function (scenario) {
  // Buat folder video kalau belum ada
//   if (!fs.existsSync('videos')) {
//     fs.mkdirSync('videos');
//   }

  browser = await chromium.launch({ headless: false });
  context = await browser.newContext({
//     recordVideo: {
//       dir: 'videos/',
//       size: { width: 1280, height: 720 }
//     }
   });

  page = await context.newPage();
  this.page = page;
});

Given('I open the login page', async () => {
//   browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();
//   page = await context.newPage();
  await page.goto('https://demo.automationtesting.in/SignIn.html');
});

When('I fill {string} with {string}', async (field, value) => {
  await page.getByRole('textbox', { name: field }).fill(value);
});

When('I click the {string} button', async (name) => {
  await page.getByRole('link', { name }).click();
});

Then('I should see {string}', async (text) => {
  await expect(page.locator(`text=${text}`)).toBeVisible();
});

// After(async function (scenario) {
//   const videoPath = await this.page.video().path();
//   await this.page.close();
//   await context.close();
//   await browser.close();

//   const scenarioName = scenario.pickle.name.replace(/\s+/g, '_');
//   const newPath = path.join('videos', `${scenarioName}.webm`);
//   fs.renameSync(videoPath, newPath);
//   console.log(`🎥 Video saved to: ${newPath}`);
// });
After(async function (scenario) {
  try {
    // Buat folder screenshot kalau belum ada
    if (!fs.existsSync('screenshots')) {
      fs.mkdirSync('screenshots');
    }

    const scenarioName = scenario.pickle.name.replace(/\s+/g, '_');
    const status = scenario.result.status || 'UNKNOWN';
    const fileName = `${scenarioName}_${status}.png`;
    const filePath = path.join('screenshots', fileName);

    // Ambil screenshot penuh
    await this.page.screenshot({ path: filePath, fullPage: true });

    // Attach ke report agar tampil di HTML report
    const image = fs.readFileSync(filePath);
    this.attach(image, 'image/png');

    console.log(`📸 Screenshot saved for scenario "${scenarioName}" (${status}) → ${filePath}`);
  } catch (err) {
    console.error('⚠️ Failed to take screenshot:', err);
  } finally {
    // Tutup browser dan context dengan aman
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
});