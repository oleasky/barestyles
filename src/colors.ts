import { PluginAPI } from 'tailwindcss/types/config';

// Function to generate color utilities dynamically
export const generateColorUtilities = ({ theme, addUtilities }: PluginAPI) => {
  // Fetch colors from the project's theme or use slate-based defaults
  const primaryColors = theme('colors.primary', {
    'default': '#64748B', // Slate 500
    'light': '#CBD5E1',   // Slate 300
    'dark': '#334155',    // Slate 700
  });

  const secondaryColors = theme('colors.secondary', {
    'default': '#94A3B8', // Slate 400
    'light': '#E2E8F0',   // Slate 200
    'dark': '#475569',    // Slate 600
  });

  const tertiaryColors = theme('colors.tertiary', {
    'default': '#F1F5F9', // Slate 50
    'light': '#F8FAFC',   // Slate 100
    'dark': '#1E293B',    // Slate 800
  });

  console.log('Primary Colors:', primaryColors);
console.log('Secondary Colors:', secondaryColors);
console.log('Tertiary Colors:', tertiaryColors);


  // Utility generation function
  const createUtilities = (colors: Record<string, string>, prefix: string) => {
    const utilities: Record<string, Record<string, string>> = {};
    Object.entries(colors).forEach(([key, value]) => {
      utilities[`.${prefix}-${key}`] = { backgroundColor: value }; // Background utilities
      utilities[`.text-${prefix}-${key}`] = { color: value };      // Text utilities
      utilities[`.border-${prefix}-${key}`] = { borderColor: value }; // Border utilities
    });
    return utilities;
  };

  // Generate utilities for primary, secondary, and tertiary colors
  const primaryUtilities = createUtilities(primaryColors, 'primary');
  const secondaryUtilities = createUtilities(secondaryColors, 'secondary');
  const tertiaryUtilities = createUtilities(tertiaryColors, 'tertiary');

  // Add the utilities to Tailwind
  addUtilities({
    ...primaryUtilities,
    ...secondaryUtilities,
    ...tertiaryUtilities,
  });
};
