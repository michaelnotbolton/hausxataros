import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('I should see a support purpose statement', async ({ page }) => {
  await expect(page.locator('[data-testid="support-purpose"]')).toBeVisible()
})

Then('I should see a Patreon tiers section', async ({ page }) => {
  await expect(page.locator('[data-testid="patreon-tiers"]')).toBeVisible()
})

Then('each tier should show what it includes', async ({ page }) => {
  const tiers = page.locator('[data-testid="patreon-tier"]')
  const count = await tiers.count()
  expect(count).toBeGreaterThanOrEqual(1)
  for (let i = 0; i < count; i++) {
    await expect(tiers.nth(i).locator('[data-testid="tier-includes"]')).toBeVisible()
  }
})

Then('the {string} button should link to an external URL', async ({ page }, label: string) => {
  const link = page.getByRole('link', { name: label })
  const href = await link.getAttribute('href')
  expect(href).toMatch(/^https?:\/\//)
})

Then('I should see a monthly update section', async ({ page }) => {
  await expect(page.locator('[data-testid="monthly-update"]')).toBeVisible()
})
