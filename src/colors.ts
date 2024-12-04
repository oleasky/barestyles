import { PluginAPI } from 'tailwindcss/types/config';

export const generateColorUtilities = ({ theme, addUtilities }: PluginAPI) => {
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

  const createUtilities = (colors: Record<string, string>, prefix: string) => {
    const utilities: Record<string, Record<string, string>> = {};
    Object.entries(colors).forEach(([key, value]) => {
      utilities[`.${prefix}-${key}`] = { backgroundColor: value }; 
      utilities[`.text-${prefix}-${key}`] = { color: value };
      utilities[`.border-${prefix}-${key}`] = { borderColor: value }; 
    });
    return utilities;
  };

  const primaryUtilities = createUtilities(primaryColors, 'primary');
  const secondaryUtilities = createUtilities(secondaryColors, 'secondary');
  const tertiaryUtilities = tertiaryColors ? createUtilities(tertiaryColors, 'tertiary') : {};

  addUtilities({
    ...primaryUtilities,
    ...secondaryUtilities,
    ...tertiaryUtilities,
  });
};
