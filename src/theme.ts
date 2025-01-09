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
      "fluid-xs": "clamp(0.9rem, 1vw, 1.25rem)",
      "fluid-sm": "clamp(1rem, 1.5vw, 1.5rem)",
      "fluid-md": "clamp(1.25rem, 2vw, 2rem)",
      "fluid-lg": "clamp(1.5rem, 2.5vw, 2.5rem)",
      "fluid-xl": "clamp(1.75rem, 3vw, 3rem)",
      "fluid-2xl": "clamp(2rem, 3vw, 3.5rem)",
      "fluid-3xl": "clamp(2.5rem, 4vw, 4rem)",
      "fluid-4xl": "clamp(3rem, 5vw, 5rem)",
      "fluid-5xl": "clamp(4rem, 6vw, 6rem)",
    },
    fontFamily:{
      H1: "var(--font-family-h1)",
      headings: "var(--font-family-headings)",
      body: "var(--font-family-body)",
    }
  };
  