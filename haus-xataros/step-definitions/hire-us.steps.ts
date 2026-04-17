import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { When, Then } = createBdd()

Then('I should see a consultant named {string}', async ({ page }, name: string) => {
  await expect(page.locator('[data-testid="consultant-profile"]').getByText(name)).toBeVisible()
})

Then('I should see a consultant bio', async ({ page }) => {
  await expect(page.locator('[data-testid="consultant-bio"]')).toBeVisible()
})

Then('I should see a consulting philosophy statement', async ({ page }) => {
  await expect(page.locator('[data-testid="consultant-philosophy"]')).toBeVisible()
})

Then('I should see a service card for {string}', async ({ page }, service: string) => {
  await expect(page.locator('[data-testid="service-card"]').getByRole('heading', { name: service })).toBeVisible()
})

When('I view the service card for {string}', async ({ page }, service: string) => {
  await page.locator('[data-testid="service-card"]').filter({ hasText: service }).scrollIntoViewIfNeeded()
})

Then('I should see a description', async ({ page }) => {
  await expect(page.locator('[data-testid="service-description"]').first()).toBeVisible()
})

Then('I should see a typical duration', async ({ page }) => {
  await expect(page.locator('[data-testid="service-duration"]').first()).toBeVisible()
})

Then('I should see a price range', async ({ page }) => {
  await expect(page.locator('[data-testid="service-price"]').first()).toBeVisible()
})

Then('I should see the {string} section', async ({ page }, sectionName: string) => {
  await expect(page.getByRole('heading', { name: sectionName })).toBeVisible()
})

Then('it should contain 6 steps', async ({ page }) => {
  const steps = page.locator('[data-testid="how-it-works"] [data-testid="step"]')
  await expect(steps).toHaveCount(6)
})

Then('I should see a FAQ section', async ({ page }) => {
  await expect(page.locator('[data-testid="faq"]')).toBeVisible()
})

Then('the FAQ should contain at least one question and answer', async ({ page }) => {
  const items = page.locator('[data-testid="faq-item"]')
  const count = await items.count()
  expect(count).toBeGreaterThanOrEqual(1)
})
