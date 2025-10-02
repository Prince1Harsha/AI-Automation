import { test, expect } from "@playwright/test";

test("Demo UI test: Playwright homepage", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator("text=Get Started")).toBeVisible();
});
