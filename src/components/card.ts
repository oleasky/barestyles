import { PluginAPI } from 'tailwindcss/types/config';

export const card = ({ addComponents, theme }: PluginAPI) => {
  addComponents({
    '.card': {
      borderWidth: theme('borderWidth.DEFAULT', '1px'),
      borderRadius: theme('borderRadius.md', '0.375rem'),
      padding: theme('spacing.6', '1.5rem'),
      boxShadow: theme('boxShadow.md', '0 4px 6px rgba(0, 0, 0, 0.1)'),
      backgroundColor: theme('colors.white', '#FFFFFF'),
    },
  });
};
