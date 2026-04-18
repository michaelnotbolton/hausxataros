import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Given, When, Then } = createBdd()

Then('I should see the wiki sidebar', async ({ page }) => {
  await expect(page.locator('[data-testid="wiki-sidebar"]')).toBeVisible()
})

Then('I should see a wiki sidebar home link', async ({ page }) => {
  await expect(page.locator('[data-testid="wiki-sidebar"]').getByRole('link', { name: /main wiki/i })).toBeVisible()
})

Then('I should see a wiki sidebar section {string}', async ({ page }, sectionTitle: string) => {
  await expect(page.locator('[data-testid="wiki-sidebar"]').getByText(sectionTitle)).toBeVisible()
})

Then('I should see a wiki sidebar page link {string}', async ({ page }, pageTitle: string) => {
  await expect(page.locator('[data-testid="wiki-sidebar"]').getByRole('link', { name: pageTitle })).toBeVisible()
})

Then('the wiki sidebar section {string} should be collapsed by default', async ({ page }, sectionTitle: string) => {
  await expect(
    page.locator('[data-testid="wiki-sidebar-section"]').filter({ hasText: sectionTitle }).getByRole('button', { name: sectionTitle }),
  ).toHaveAttribute('aria-expanded', 'false')
})

Then('the wiki sidebar section {string} should be expanded', async ({ page }, sectionTitle: string) => {
  await expect(
    page.locator('[data-testid="wiki-sidebar-section"]').filter({ hasText: sectionTitle }).getByRole('button', { name: sectionTitle }),
  ).toHaveAttribute('aria-expanded', 'true')
})

When('I open the wiki article {string}', async ({ page }, articleTitle: string) => {
  await page.goto('/wiki')
  await page.getByRole('link', { name: articleTitle }).first().click()
})

Given('I am viewing the wiki article {string}', async ({ page }, articleTitle: string) => {
  await page.goto('/wiki')
  await page.getByRole('link', { name: articleTitle }).first().click()
})

Then('the active wiki sidebar item should be {string}', async ({ page }, pageTitle: string) => {
  await expect(page.locator('[data-testid="wiki-sidebar-active"]')).toHaveText(pageTitle)
})

Then('the URL should end with {string}', async ({ page }, suffix: string) => {
  await expect(page).toHaveURL(new RegExp(`${suffix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`))
})

Then('I should see the wiki page title {string}', async ({ page }, title: string) => {
  await expect(page.locator('[data-testid="wiki-page-title"]')).toHaveText(title)
})

Then('I should see exactly one level 1 heading named {string}', async ({ page }, title: string) => {
  await expect(page.getByRole('heading', { level: 1, name: title })).toHaveCount(1)
})

Then('I should see the wiki section heading {string}', async ({ page }, heading: string) => {
  await expect(page.locator('[data-testid="wiki-entry-body"]').getByRole('heading', { name: heading })).toBeVisible()
})

Then('I should see a wiki reference group {string}', async ({ page }, groupTitle: string) => {
  await expect(page.locator('[data-testid="wiki-reference-group"]').filter({ hasText: groupTitle }).first()).toBeVisible()
})

Then('I should see a wiki reference card {string}', async ({ page }, label: string) => {
  await expect(page.locator('[data-testid="wiki-reference-card"]').filter({ hasText: label }).first()).toBeVisible()
})

Then('the wiki reference card {string} should not repeat the group title', async ({ page }, label: string) => {
  await expect(page.locator('[data-testid="wiki-reference-card"]').filter({ hasText: label }).first()).toHaveCount(1)
  await expect(page.locator('[data-testid="wiki-reference-card"]').filter({ hasText: label }).first()).not.toContainText('See also')
  await expect(page.locator('[data-testid="wiki-reference-card"]').filter({ hasText: label }).first()).not.toContainText('Mentioned in this page')
})

When('I follow the wiki link {string}', async ({ page }, label: string) => {
  await page.locator('[data-testid="wiki-entry-body"]').getByRole('link', { name: label }).click()
})

When('I search the wiki for {string}', async ({ page }, query: string) => {
  await page.getByRole('searchbox', { name: /search the wiki/i }).fill(query)
})

Then('I should see a wiki search result for {string}', async ({ page }, title: string) => {
  await expect(page.locator('[data-testid="wiki-search-results"]')).toContainText(title)
})

Then('I should not see a wiki search result for {string}', async ({ page }, title: string) => {
  await expect(page.locator('[data-testid="wiki-search-results"]')).not.toContainText(title)
})

Then('I should see an unresolved wiki reference for {string}', async ({ page }, label: string) => {
  await expect(page.locator('[data-testid="wiki-unresolved-link"]').filter({ hasText: label }).first()).toBeVisible()
})

Then('I should not see a wiki sidebar section {string}', async ({ page }, sectionTitle: string) => {
  await expect(page.locator('[data-testid="wiki-sidebar"]').getByText(sectionTitle)).toHaveCount(0)
})
