import { test, expect } from '@playwright/test';

test('Scenario 1: Verify homepage loading', async ({ page }) => {
  // 1. Open the URL
  await page.goto('/');

  // 2. Verify that the page loads without errors and displays the main content
  await expect(page.getByText('Popular Products')).toBeVisible();

  // Optionally, check for no error banners or error messages
  const errorBanner = await page.locator('text=Error').count();
  expect(errorBanner).toBe(0);
});

test('Scenario 2: Verify main navigation functionality', async ({ page }) => {
  // 1. Open the homepage
  await page.goto('/');

  // 2. Click on all main menu links/items and verify each page loads
  const mainMenuLinks = [
    { label: 'Clothes', selector: 'text=Clothes' },
    { label: 'Accessories', selector: 'text=Accessories' },
    { label: 'Art', selector: 'text=Art' },
  ];

  for (const link of mainMenuLinks) {
    await page.click(link.selector);
    const errorBanner = await page.locator('text=Error').count();
    expect(errorBanner).toBe(0);
    await page.goto('/');
  }
}); 