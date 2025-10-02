import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 0,
  use: {
    trace: "on",
    screenshot: "on",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "UI Chrome",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /ui\/.*/,
    },
    {
      name: "API",
      use: {},
      testMatch: /api\/.*/,
    },
    {
      name: "Mobile",
      use: { ...devices["iPhone 12"] },
      testMatch: /mobile\/.*/,
    },
  ],
});
