import { test, expect, request } from "@playwright/test";

test("Demo API test: GitHub API", async () => {
  const req = await request.newContext();
  const res = await req.get(
    "https://api.github.com/repos/microsoft/playwright"
  );
  expect(res.ok()).toBeTruthy();
  const data = await res.json();
  expect(data.name).toBe("playwright");
});
