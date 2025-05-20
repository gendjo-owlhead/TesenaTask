import { test, expect } from '@playwright/test';

test('ARIA snapshot for Subcategories', async ({ page }) => {
  await page.goto('http://37.27.17.198:8084/en/6-accessories');

  // Target the subcategories section using the heading and list structure
  const subcategoriesSection = page.getByRole('heading', { name: 'Subcategories', level: 2 }).locator('xpath=..');
  
  await expect(subcategoriesSection).toMatchAriaSnapshot();
});