// Typography: Theatrical elegance
// Body: Serif fonts for readability
// Headers: Clean sans-serif, hierarchical
// Code: Monospace

export const typography = {
  fonts: {
    // Body copy: Serif fonts
    serif: '"Garamond", "Baskerville", "Georgia", "Times New Roman", serif',

    // Headers: Clean sans-serif
    sansSerif:
      '"Helvetica Neue", "Helvetica", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Arial", sans-serif',

    // Code/Data: Monospace
    mono: '"Courier New", "Consolas", "Monaco", monospace',
  },

  sizes: {
    // Body copy
    body: {
      small: "10px",
      base: "11px",
      large: "12px",
    },

    // Headers - hierarchical sizing
    heading: {
      h1: "3rem", // 48px
      h2: "2.25rem", // 36px
      h3: "1.75rem", // 28px
      h4: "1.5rem", // 24px
      h5: "1.25rem", // 20px
      h6: "1rem", // 16px
    },
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export type Typography = typeof typography;
