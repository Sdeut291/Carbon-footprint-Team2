import { test, expect } from '@playwright/test';
import MainPage from '../../pages/main.page';

test.describe('E2E - Main Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have right title', async ({ page }) => {
    await expect(page).toHaveTitle(/carbon-footprint-team2/);
  });

  test('should open new tab on card click', async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.cardButtons
      .first()
      .waitFor({ state: 'visible', timeout: 1000 });

    const page2Promise = page.waitForEvent('popup');
    await mainPage.cardButtons.first().click();

    const page2 = await page2Promise;
    expect(page2.url()).toContain('https://atc.bmwgroup.net/confluence');
  });
});
