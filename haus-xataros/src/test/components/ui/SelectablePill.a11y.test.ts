import { describe, expect, it } from 'vitest'

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '')
  return [0, 2, 4].map((index) => Number.parseInt(normalized.slice(index, index + 2), 16) / 255)
}

function linearize(channel: number) {
  return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
}

function luminance(hex: string) {
  const [r, g, b] = hexToRgb(hex).map(linearize)
  return (0.2126 * r) + (0.7152 * g) + (0.0722 * b)
}

function contrastRatio(foreground: string, background: string) {
  const foregroundLum = luminance(foreground)
  const backgroundLum = luminance(background)
  const [lighter, darker] = foregroundLum > backgroundLum
    ? [foregroundLum, backgroundLum]
    : [backgroundLum, foregroundLum]

  return (lighter + 0.05) / (darker + 0.05)
}

describe('interactive pill and button contrast', () => {
  it('keeps the global CTA text above WCAG AA contrast against both gradient endpoints', () => {
    expect(contrastRatio('#251a33', '#f5c55e')).toBeGreaterThanOrEqual(4.5)
    expect(contrastRatio('#251a33', '#ff8db7')).toBeGreaterThanOrEqual(4.5)
  })

  it('keeps selected pill text above WCAG AA contrast against both selected background stops', () => {
    expect(contrastRatio('#1e1229', '#ffd978')).toBeGreaterThanOrEqual(4.5)
    expect(contrastRatio('#1e1229', '#ffcf93')).toBeGreaterThanOrEqual(4.5)
  })
})
