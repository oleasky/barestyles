export const themeExtend = {
  spacing: {
    "fluid-2xs": "clamp(0.125rem, 0.25vw, 0.5rem)", // Very small for tight spacing
    "fluid-xs": "clamp(0.25rem, 0.5vw, 0.75rem)",
    "fluid-sm": "clamp(0.5rem, 1vw, 1rem)",
    "fluid-md": "clamp(1rem, 1.5vw, 1.5rem)",
    "fluid-lg": "clamp(1.5rem, 2vw, 2rem)",
    "fluid-xl": "clamp(2rem, 3vw, 3rem)",
    "fluid-2xl": "clamp(3rem, 4vw, 4rem)",
    "fluid-3xl": "clamp(4rem, 5vw, 6rem)",
    "fluid-4xl": "clamp(6rem, 6vw, 8rem)",
    "fluid-5xl": "clamp(8rem, 8vw, 10rem)",
    "fluid-6xl": "clamp(10rem, 10vw, 12rem)",
    "fluid-7xl": "clamp(12rem, 12vw, 16rem)",
    "fluid-8xl": "clamp(16rem, 14vw, 20rem)",
    "fluid-9xl": "clamp(20rem, 16vw, 24rem)",
    "fluid-10xl": "clamp(24rem, 18vw, 30rem)", // Largest size for significant spacing
  },
  maxWidth: {
    "narrow": "55rem",
    "wide": "85rem",
    "full": "100%",
  },
  fontSize: {
    "fluid-2xs": "clamp(0.5rem, 0.8vw, 0.75rem)", // Smallest, suitable for fine text
    "fluid-xs": "clamp(0.625rem, 1vw, 0.875rem)", // Slightly larger
    "fluid-sm": "clamp(0.75rem, 1.2vw, 1rem)", // Base font size for small text
    "fluid-md": "clamp(1rem, 1.5vw, 1.25rem)", // Default paragraph size
    "fluid-lg": "clamp(1.25rem, 2vw, 1.75rem)", // Larger paragraph size or minor heading
    "fluid-xl": "clamp(1.5rem, 2.5vw, 2.25rem)", // Subheading or larger text
    "fluid-2xl": "clamp(2rem, 3vw, 3rem)", // Secondary heading (H3)
    "fluid-3xl": "clamp(2.5rem, 4vw, 4rem)", // Tertiary heading (H2)
    "fluid-4xl": "clamp(3rem, 5vw, 5rem)", // Main heading (H1)
    "fluid-5xl": "clamp(4rem, 6vw, 6rem)", // Highlighted or key section
    "fluid-6xl": "clamp(5rem, 7vw, 7rem)", // Hero text or key title
    "fluid-7xl": "clamp(6rem, 8vw, 8rem)", // Standout text (e.g., splash text)
    "fluid-8xl": "clamp(8rem, 10vw, 10rem)", // Large hero title
    "fluid-9xl": "clamp(10rem, 12vw, 12rem)", // Extremely large text
    "fluid-10xl": "clamp(12rem, 14vw, 15rem)", // Maximum size for emphasis
  },  
  fontFamily:{
    H1: "var(--font-family-h1)",
    headings: "var(--font-family-headings)",
    body: "var(--font-family-body)",
  }
};
  