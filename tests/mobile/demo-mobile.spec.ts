import { test, expect } from "@playwright/test";

test("Demo Mobile test: Playwright homepage on iPhone 12", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator("text=Get Started")).toBeVisible();
  const viewport = page.viewportSize();
  expect(viewport?.width).toBe(390); // iPhone 12 width used here
});
