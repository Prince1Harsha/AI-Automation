import { APIRequestContext } from "@playwright/test";

export class GitHubApi {
  readonly request: APIRequestContext;
  readonly repoUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.repoUrl = "https://api.github.com/repos/microsoft/playwright";
  }

  async getRepo() {
    return await this.request.get(this.repoUrl);
  }
}
