import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then, When } = createBdd()

Then('I should see the header', async ({ page }) => {
  await expect(page.locator('header')).toBeVisible()
})

Then('I should see the logo {string}', async ({ page }, text: string) => {
  await expect(page.locator('header').getByText(text)).toBeVisible()
})

Then('the header should contain a link to {string}', async ({ page }, label: string) => {
  await expect(page.locator('header').getByRole('link', { name: label })).toBeVisible()
})

When('I click the {string} navigation link', async ({ page }, label: string) => {
  await page.locator('header').getByRole('link', { name: label }).click()
})

Then('I should be on the {string} page', async ({ page }, path: string) => {
  await expect(page).toHaveURL(new RegExp(`${path}$`))
})

Then('the {string} navigation link should be marked as active', async ({ page }, label: string) => {
  const link = page.locator('header').getByRole('link', { name: label })
  await expect(link).toHaveAttribute('aria-current', 'page')
})
