import { Locator, Page } from '@playwright/test';

export default class MainPage {
  readonly page: Page;
  readonly cardButtons: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cardButtons = page.locator(
      '.ds-button:has-text(" Check Confluence ")'
    );
  }
}
