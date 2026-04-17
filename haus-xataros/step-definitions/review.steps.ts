import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Then } = createBdd()

Then('I should see a link to the Storybook review surface', async ({ page }) => {
  await expect(page.locator('[data-testid="storybook-root-link"]')).toHaveAttribute(
    'href',
    /\/review\/storybook\/$/,
  )
})

Then('I should see a review link for {string}', async ({ page }, label: string) => {
  await expect(page.locator('[data-testid="review-story-groups"]').getByRole('link', { name: label })).toBeVisible()
})

Then('the header should not contain a link to {string}', async ({ page }, label: string) => {
  await expect(page.locator('header').getByRole('link', { name: label })).toHaveCount(0)
})
