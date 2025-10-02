import { test, expect, request } from "@playwright/test";
import { GitHubApi } from "./pages/GitHubApi";

test("Demo API test: GitHub API", async () => {
  const req = await request.newContext();
  const githubApi = new GitHubApi(req);
  const res = await githubApi.getRepo();
  expect(res.ok()).toBeTruthy();
  const data = await res.json();
  expect(data.name).toBe("playwright");
});
