import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'

const { Given, When, Then } = createBdd()

async function ensureBlogArticleDetail(page: import('@playwright/test').Page) {
  if (await page.locator('[data-testid="article-detail"]').count()) return
  if (await page.locator('[data-testid="article-card"]').count()) {
    await page.locator('[data-testid="article-card"]').first().getByRole('link').first().click()
  }
}

Given('I am on the home page', async ({ page }) => {
  await page.goto('/')
})

Given('I am on the {string} page', async ({ page }, path: string) => {
  await page.goto(path)
})

When('I navigate to {string}', async ({ page }, path: string) => {
  await page.goto(path)
})

// Shared heading assertion used across multiple pages
Then('I should see a heading for {string}', async ({ page }, text: string) => {
  await expect(page.getByRole('heading', { name: text })).toBeVisible()
})

Then('I should see the heading {string}', async ({ page }, text: string) => {
  await expect(page.getByRole('heading', { name: text })).toBeVisible()
})

// Shared contact form steps used on both Hire Us and Contact pages
Then('I should see a contact form', async ({ page }) => {
  await expect(page.locator('form[data-testid="contact-form"]')).toBeVisible()
})

Then('the contact form should have a {string} field', async ({ page }, label: string) => {
  await expect(page.getByLabel(label)).toBeVisible()
})

When('I fill in the {string} field with {string}', async ({ page }, label: string, value: string) => {
  await page.getByLabel(label).fill(value)
})

When('I submit the contact form', async ({ page }) => {
  await page.getByRole('button', { name: /send|submit/i }).click()
})

Then('I should see a confirmation message', async ({ page }) => {
  await expect(page.locator('[data-testid="confirmation-message"]')).toBeVisible()
})

// Shared button step used across hire-us, support, and other pages
Then('I should see a {string} button', async ({ page }, label: string) => {
  await expect(page.getByRole('button', { name: label }).or(page.getByRole('link', { name: label }))).toBeVisible()
})

// Shared share button step used on both blog pages
Then('I should see a share button for {string}', async ({ page }, platform: string) => {
  await ensureBlogArticleDetail(page)
  await expect(page.getByRole('link', { name: new RegExp(`share.*${platform}`, 'i') })
    .or(page.getByRole('button', { name: new RegExp(`share.*${platform}`, 'i') }))
    .or(page.locator(`[data-testid="share-${platform.toLowerCase()}"]`))
  ).toBeVisible()
})

Then('I should not see a share button for {string}', async ({ page }, platform: string) => {
  await ensureBlogArticleDetail(page)
  await expect(page.getByRole('link', { name: new RegExp(`share.*${platform}`, 'i') })).toHaveCount(0)
  await expect(page.getByRole('button', { name: new RegExp(`share.*${platform}`, 'i') })).toHaveCount(0)
  await expect(page.locator(`[data-testid="share-${platform.toLowerCase()}"]`)).toHaveCount(0)
})
