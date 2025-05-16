import { test, expect } from '@playwright/test';

const BASE_URL = 'http://37.27.17.198:8084/en/';

test('Search for Hummingbird and select the printed t-shirt', async ({ page }) => {
  // 1. Navigate to homepage
  await page.goto(BASE_URL);

  // 2. Search for Hummingbird
  await page.fill("input[type='text'][name='s']", 'Hummingbird');
  await page.press("input[type='text'][name='s']", 'Enter');

  // 3. From the search results select the item "Hummingbird printed t-shirt"
  await page.click('text=Hummingbird printed t-shirt');

  // Verify that the product page heading is visible
  await expect(page.getByRole('heading', { name: 'Hummingbird printed t-shirt' })).toBeVisible();
});
