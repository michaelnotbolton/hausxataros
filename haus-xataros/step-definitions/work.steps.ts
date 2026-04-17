import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { When, Then } = createBdd()

Then('I should see a project titled {string}', async ({ page }, title: string) => {
  await expect(page.getByRole('heading', { name: title })).toBeVisible()
})

Then('I should not see a project titled {string}', async ({ page }, title: string) => {
  await expect(page.getByRole('heading', { name: title })).not.toBeVisible()
})

When('I filter by category {string}', async ({ page }, category: string) => {
  await page.locator('[data-testid="filter-category"]').getByRole('button', { name: category }).click()
})

When('I filter by format {string}', async ({ page }, format: string) => {
  await page.locator('[data-testid="filter-format"]').getByRole('button', { name: format }).click()
})

Then('I should see at least one project', async ({ page }) => {
  const projects = page.locator('[data-testid="project-card"]')
  const count = await projects.count()
  expect(count).toBeGreaterThanOrEqual(1)
})

When('I view the project {string}', async ({ page }, title: string) => {
  await page.getByRole('heading', { name: title }).click()
})

Then('I should see a download link for {string}', async ({ page }, label: string) => {
  await expect(page.getByRole('link', { name: new RegExp(label, 'i') })).toBeVisible()
})

Then('I should see a version label', async ({ page }) => {
  await expect(page.locator('[data-testid="version-label"]').first()).toBeVisible()
})

Then('I should see the series progression for {string}', async ({ page }, book: string) => {
  await expect(page.locator('[data-testid="series-progression"]').getByText(book)).toBeVisible()
})
