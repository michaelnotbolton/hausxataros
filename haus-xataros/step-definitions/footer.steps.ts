import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('I should see the footer', async ({ page }) => {
  await expect(page.locator('footer')).toBeVisible()
})

Then('the footer should contain a link to {string}', async ({ page }, label: string) => {
  await expect(page.locator('footer').getByRole('link', { name: label })).toBeVisible()
})

Then('the footer should not contain a link to {string}', async ({ page }, label: string) => {
  await expect(page.locator('footer').getByRole('link', { name: label })).toHaveCount(0)
})

Then('the {string} social link should open in a new tab', async ({ page }, label: string) => {
  const link = page.locator('footer').getByRole('link', { name: label })
  await expect(link).toHaveAttribute('target', '_blank')
  await expect(link).toHaveAttribute('rel', /noopener/)
})

Then('the footer should contain copyright text for {string}', async ({ page }, name: string) => {
  await expect(page.locator('footer')).toContainText(`© ${name}`)
})
