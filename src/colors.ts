import { PluginAPI } from 'tailwindcss/types/config';

export const generateColorUtilities = ({ theme, addUtilities }: PluginAPI) => {
  const primaryColors = theme('colors.primary', {});
  const secondaryColors = theme('colors.secondary', {});
  const tertiaryColors = theme('colors.tertiary', {}); 

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
