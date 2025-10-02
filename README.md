# Playwright Automation Demo

This repository demonstrates Playwright automation for UI, API, and Mobile testing. It includes:

- Sample UI test for a demo web page
- API test using Playwright's request context
- Mobile test using device emulation
- GitHub Actions workflow for CI

## Structure

- `tests/ui/` - UI tests
- `tests/api/` - API tests
- `tests/mobile/` - Mobile tests
- `.github/workflows/` - CI workflow
- `playwright.config.ts` - Playwright configuration

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Run all tests:
   ```powershell
   npx playwright test
   ```
3. Run a specific test folder:
   ```powershell
   npx playwright test tests/ui
   npx playwright test tests/api
   npx playwright test tests/mobile
   ```

## CI

All tests are run automatically on push via GitHub Actions.

## Documentation

See individual test files for examples and comments.
