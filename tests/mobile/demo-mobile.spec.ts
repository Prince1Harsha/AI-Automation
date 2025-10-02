import { test, expect } from "@playwright/test";
import { MobileHomePage } from "../../pages/MobileHomePage";

test("Demo Mobile test: Playwright homepage on iPhone 12", async ({ page }) => {
  const mobileHomePage = new MobileHomePage(page);
  await mobileHomePage.goto();
  await expect(page).toHaveTitle(/Playwright/);
  expect(await mobileHomePage.isGetStartedVisible()).toBeTruthy();
  expect(await mobileHomePage.getViewportWidth()).toBe(390); // iPhone 12 width
});
