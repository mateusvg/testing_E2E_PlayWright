import { test, expect } from '@playwright/test';

test('has title google and perform a search', async ({ page }) => {
  await page.goto('https://google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);

  // Search on input of google
  await page.getByLabel('Pesquisar', { exact: true }).fill('What is life');

  // Click on search button
  await page.getByRole('button', { name: 'Pesquisa Google' }).click();

  // Click on link
  await page.locator("//h3[@class='LC20lb MBeuO DKV0Md'][contains(.,'WHAT IS LIFE (TRADUÇÃO) - George Harrison')]").click();

});


