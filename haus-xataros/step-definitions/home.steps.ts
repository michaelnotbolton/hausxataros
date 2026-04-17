import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { When, Then } = createBdd()

Then('I should see the hero section', async ({ page }) => {
  await expect(page.locator('[data-testid="hero"]')).toBeVisible()
})

Then('the hero should contain a statement of purpose', async ({ page }) => {
  const hero = page.locator('[data-testid="hero"]')
  await expect(hero.locator('p, h2')).not.toBeEmpty()
})

Then('I should see a navigation card linking to {string}', async ({ page }, label: string) => {
  await expect(page.locator('[data-testid="navigation-cards"]').getByRole('link', { name: label })).toBeVisible()
})

When('I click the navigation card for {string}', async ({ page }, label: string) => {
  await page.locator('[data-testid="navigation-cards"]').getByRole('link', { name: label }).click()
})

Then('I should see the about section', async ({ page }) => {
  await expect(page.locator('[data-testid="about-section"]')).toBeVisible()
})

Then('the about section should contain at least 3 paragraphs', async ({ page }) => {
  const paragraphs = page.locator('[data-testid="about-section"] p')
  await expect(paragraphs).toHaveCount(await paragraphs.count())
  const count = await paragraphs.count()
  expect(count).toBeGreaterThanOrEqual(3)
})

Then('I should see recent posts from {string}', async ({ page }, blogName: string) => {
  await expect(
    page.locator('[data-testid="recent-posts"]').getByText(blogName, { exact: false })
  ).toBeVisible()
})

Then('I should see a newsletter signup form', async ({ page }) => {
  await expect(page.locator('[data-testid="newsletter-form"]')).toBeVisible()
})

Then('the newsletter form should have an email input', async ({ page }) => {
  await expect(
    page.locator('[data-testid="newsletter-form"]').getByRole('textbox', { name: /email/i })
  ).toBeVisible()
})

Then('the newsletter form should have a submit button', async ({ page }) => {
  await expect(
    page.locator('[data-testid="newsletter-form"]').getByRole('button')
  ).toBeVisible()
})
