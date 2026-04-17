import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { When, Then } = createBdd()

Then('I should see a search bar', async ({ page }) => {
  await expect(page.getByRole('searchbox').or(page.getByRole('textbox', { name: /search/i }))).toBeVisible()
})

When('I type {string} into the search bar', async ({ page }, query: string) => {
  await page.getByRole('searchbox').or(page.getByRole('textbox', { name: /search/i })).fill(query)
})

Then('I should see search results', async ({ page }) => {
  await expect(page.locator('[data-testid="search-results"]')).toBeVisible()
  const count = await page.locator('[data-testid="wiki-entry-card"]').count()
  expect(count).toBeGreaterThanOrEqual(1)
})

Then('I should see a category nav containing {string}', async ({ page }, category: string) => {
  await expect(page.locator('[data-testid="category-nav"]').getByText(category)).toBeVisible()
})

When('I select the category {string}', async ({ page }, category: string) => {
  await page.locator('[data-testid="category-nav"]').getByRole('button', { name: category })
    .or(page.locator('[data-testid="category-nav"]').getByRole('link', { name: category }))
    .click()
})

Then('I should see wiki entries for {string}', async ({ page }, category: string) => {
  await expect(page.locator('[data-testid="wiki-entry-card"]').first()).toBeVisible()
  await expect(page.locator('[data-testid="active-category"]').getByText(category)).toBeVisible()
})

When('I navigate to a wiki entry', async ({ page }) => {
  await page.locator('[data-testid="wiki-entry-card"]').first().getByRole('link').click()
})

Then('I should see the entry title', async ({ page }) => {
  await expect(page.locator('[data-testid="wiki-entry"]').getByRole('heading', { level: 1 })).toBeVisible()
})

Then('I should see the entry definition', async ({ page }) => {
  await expect(page.locator('[data-testid="entry-definition"]')).toBeVisible()
})

Then('I should see the entry body', async ({ page }) => {
  await expect(page.locator('[data-testid="entry-body"]')).toBeVisible()
})

Then('I should see a related links section', async ({ page }) => {
  await expect(page.locator('[data-testid="related-links"]')).toBeVisible()
})

Then('I should see a {string} section', async ({ page }, sectionName: string) => {
  await expect(page.locator('[data-testid="referenced-in"]')).toBeVisible()
})

Then('I should see breadcrumb navigation', async ({ page }) => {
  await expect(page.locator('[aria-label="breadcrumb"]')).toBeVisible()
})
