import { PluginAPI } from 'tailwindcss/types/config';

export const highlight = ({ addComponents, theme }: PluginAPI) => {
  addComponents({
    '.highlight': {
      backgroundColor: theme('colors.indigo.500', '#4F46E5'),
      width: '100%',
      padding: theme('spacing.fluid-lg', '10%'),
    },
  });
};
