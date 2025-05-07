# Tesena PrestaShop E2E Tests

This project contains end-to-end tests for the PrestaShop demo site using [Playwright](https://playwright.dev/) and TypeScript.

## Project Structure

- `tests/` - Playwright test files
- `playwright.config.ts` - Playwright configuration
- `.github/workflows/playwright.yml` - GitHub Actions workflow
- `Jenkinsfile` - Jenkins pipeline

## Getting Started

### Prerequisites
- Node.js 18 or newer
- npm

### Install dependencies
```
npm ci
```

### Run tests
```
npx playwright test
```

### View HTML report
```
npx playwright show-report
```

## Continuous Integration

- **GitHub Actions**: See `.github/workflows/playwright.yml` for automated test runs on push and PR.
- **Jenkins**: See `Jenkinsfile` for pipeline configuration using the official Playwright Docker image.

## Notes
- Tests target: [http://37.27.17.198:8084/cs/](http://37.27.17.198:8084/cs/)
- Update selectors in tests as needed if the site structure changes. 