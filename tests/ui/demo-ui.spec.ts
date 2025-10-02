import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test("Demo UI test: Playwright homepage", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page).toHaveTitle(/Playwright/);
  expect(await homePage.isGetStartedVisible()).toBeTruthy();
});
