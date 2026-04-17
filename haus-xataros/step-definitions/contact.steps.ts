import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('the contact form should have an {string} field', async ({ page }, fieldName: string) => {
  await expect(page.getByLabel(fieldName)).toBeVisible()
})

Then('I should see a direct email address', async ({ page }) => {
  await expect(page.locator('[data-testid="contact-email"]')).toBeVisible()
  const link = page.locator('a[href^="mailto:"]')
  await expect(link).toBeVisible()
})

Then('I should see a response time expectation', async ({ page }) => {
  await expect(page.locator('[data-testid="response-time"]')).toBeVisible()
})
