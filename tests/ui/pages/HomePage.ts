import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly getStarted: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStarted = page.locator("text=Get Started");
  }

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async isGetStartedVisible() {
    return await this.getStarted.isVisible();
  }
}
