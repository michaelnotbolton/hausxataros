import { createBdd } from 'playwright-bdd'
import { expect, type Page } from '@playwright/test'

const { When, Then } = createBdd()

async function ensureArticleDetail(page: Page) {
  const articleDetail = page.locator('[data-testid="article-detail"]')
  if (await articleDetail.count()) return
  await page.locator('[data-testid="article-card"]').first().getByRole('link').first().click()
}

// Shared across both The Drag Queen's Guide and Studio Notes

Then('I should see a list of articles', async ({ page }) => {
  await expect(page.locator('[data-testid="article-feed"]')).toBeVisible()
  const cards = page.locator('[data-testid="article-card"]')
  const count = await cards.count()
  expect(count).toBeGreaterThanOrEqual(1)
})

Then('the articles should be ordered most recent first', async ({ page }) => {
  const dates = page.locator('[data-testid="article-card"] time')
  const count = await dates.count()
  const timestamps: number[] = []
  for (let i = 0; i < count; i++) {
    const dateText = await dates.nth(i).getAttribute('datetime')
    timestamps.push(new Date(dateText ?? '').getTime())
  }
  for (let i = 0; i < timestamps.length - 1; i++) {
    expect(timestamps[i]).toBeGreaterThanOrEqual(timestamps[i + 1])
  }
})

Then('each article card should display a title', async ({ page }) => {
  const cards = page.locator('[data-testid="article-card"]')
  const count = await cards.count()
  for (let i = 0; i < count; i++) {
    await expect(cards.nth(i).getByRole('heading')).toBeVisible()
  }
})

Then('each article card should display a date', async ({ page }) => {
  const cards = page.locator('[data-testid="article-card"]')
  const count = await cards.count()
  for (let i = 0; i < count; i++) {
    await expect(cards.nth(i).locator('time')).toBeVisible()
  }
})

Then('each article card should display an excerpt', async ({ page }) => {
  const cards = page.locator('[data-testid="article-card"]')
  const count = await cards.count()
  for (let i = 0; i < count; i++) {
    await expect(cards.nth(i).locator('[data-testid="article-excerpt"]')).toBeVisible()
  }
})

Then('each article card should display a read time', async ({ page }) => {
  const cards = page.locator('[data-testid="article-card"]')
  const count = await cards.count()
  for (let i = 0; i < count; i++) {
    await expect(cards.nth(i).locator('[data-testid="read-time"]')).toBeVisible()
  }
})

Then('each article card should display at least one category tag', async ({ page }) => {
  const cards = page.locator('[data-testid="article-card"]')
  const count = await cards.count()
  for (let i = 0; i < count; i++) {
    const tags = cards.nth(i).locator('[data-testid="category-tag"]')
    const tagCount = await tags.count()
    expect(tagCount).toBeGreaterThanOrEqual(1)
  }
})

When('I click the first article', async ({ page }) => {
  await page.locator('[data-testid="article-card"]').first().getByRole('link').first().click()
})

Then('I should see the article detail page', async ({ page }) => {
  await expect(page.locator('[data-testid="article-detail"]')).toBeVisible()
})

Then('I should see the article title', async ({ page }) => {
  await ensureArticleDetail(page)
  await expect(page.locator('[data-testid="article-detail"]').getByRole('heading', { level: 1 })).toBeVisible()
})

Then('I should see the author byline', async ({ page }) => {
  await ensureArticleDetail(page)
  await expect(page.locator('[data-testid="author-byline"]')).toBeVisible()
})

Then('I should see the article body', async ({ page }) => {
  await ensureArticleDetail(page)
  await expect(page.locator('[data-testid="article-body"]')).toBeVisible()
})

Then('I should see a {string} call to action', async ({ page }, label: string) => {
  await ensureArticleDetail(page)
  await expect(
    page.getByRole('link', { name: label }).or(page.getByRole('button', { name: label }))
  ).toBeVisible()
})

Then('I should see related articles', async ({ page }) => {
  await ensureArticleDetail(page)
  await expect(page.locator('[data-testid="related-articles"]')).toBeVisible()
  const count = await page.locator('[data-testid="related-articles"] [data-testid="article-card"]').count()
  expect(count).toBeGreaterThanOrEqual(1)
})

Then('the article detail page should support code block formatting', async ({ page }) => {
  await ensureArticleDetail(page)
  await expect(page.locator('[data-testid="article-body"] pre, [data-testid="article-body"] code').first()).toBeVisible()
})

When('I view an article with a code block', async ({ page }) => {
  await page.locator('[data-testid="article-card"]').first().getByRole('link').first().click()
  await page.locator('[data-testid="article-body"] pre').waitFor()
})

Then('I should see a {string} button on the code block', async ({ page }, label: string) => {
  await expect(
    page.locator('[data-testid="article-body"]').getByRole('button', { name: label })
  ).toBeVisible()
})
