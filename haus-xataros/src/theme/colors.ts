// Color palette: Deep purples, electric gold, charcoal black, cream accents
// Theme: Theatrical elegance

export const colors = {
  // Primary palette
  primary: {
    deepPurple: "#4A148C", // Deep purple
    purple: "#6A1B9A",
    lightPurple: "#8E24AA",
    electricGold: "#FFD700", // Electric gold
    gold: "#FFC107",
  },

  // Neutrals
  neutral: {
    charcoal: "#1A1A1A", // Charcoal black
    darkGray: "#2C2C2C",
    gray: "#666666",
    lightGray: "#CCCCCC",
    cream: "#F5F5DC", // Cream
    offWhite: "#FAFAFA",
    white: "#FFFFFF",
  },

  // Accent colors
  accent: {
    purpleGlow: "#9C27B0",
    goldShimmer: "#FFEB3B",
  },

  // Semantic colors
  text: {
    primary: "#1A1A1A",
    secondary: "#666666",
    inverse: "#F5F5DC",
    accent: "#FFD700",
  },

  background: {
    primary: "#FFFFFF",
    secondary: "#F5F5DC",
    dark: "#1A1A1A",
    purple: "#4A148C",
  },

  border: {
    light: "#CCCCCC",
    medium: "#666666",
    gold: "#FFD700",
  },
} as const;

export type Colors = typeof colors;
