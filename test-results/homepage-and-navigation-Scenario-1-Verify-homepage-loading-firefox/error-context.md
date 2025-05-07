# Test info

- Name: Scenario 1: Verify homepage loading
- Location: /app/tests/homepage-and-navigation.spec.ts:3:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /ms-playwright/firefox-1482/firefox/firefox
╔══════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just updated to 1.52.0. ║
║ Please update docker image as well.                                  ║
║ -  current: mcr.microsoft.com/playwright:v1.43.1-focal               ║
║ - required: mcr.microsoft.com/playwright:v1.52.0-focal               ║
║                                                                      ║
║ <3 Playwright Team                                                   ║
╚══════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
>  3 | test('Scenario 1: Verify homepage loading', async ({ page }) => {
     |     ^ Error: browserType.launch: Executable doesn't exist at /ms-playwright/firefox-1482/firefox/firefox
   4 |   // 1. Open the URL
   5 |   await page.goto('/');
   6 |
   7 |   // 2. Verify that the page loads without errors and displays the main content
   8 |   await expect(page.getByText('Popular Products')).toBeVisible();
   9 |
  10 |   // Optionally, check for no error banners or error messages
  11 |   const errorBanner = await page.locator('text=Error').count();
  12 |   expect(errorBanner).toBe(0);
  13 | });
  14 |
  15 | test('Scenario 2: Verify main navigation functionality', async ({ page }) => {
  16 |   // 1. Open the homepage
  17 |   await page.goto('/');
  18 |
  19 |   // 2. Click on all main menu links/items and verify each page loads
  20 |   const mainMenuLinks = [
  21 |     { label: 'Clothes', selector: 'text=Clothes' },
  22 |     { label: 'Accessories', selector: 'text=Accessories' },
  23 |     { label: 'Art', selector: 'text=Art' },
  24 |   ];
  25 |
  26 |   for (const link of mainMenuLinks) {
  27 |     await page.click(link.selector);
  28 |     const errorBanner = await page.locator('text=Error').count();
  29 |     expect(errorBanner).toBe(0);
  30 |     await page.goto('/');
  31 |   }
  32 | }); 
```