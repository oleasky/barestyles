import { PluginAPI } from 'tailwindcss/types/config';

export const content = ({ addComponents, theme }: PluginAPI) => {
  addComponents({
    '.content': {
      width: '100%',
      padding: theme('spacing.fluid-lg', '10%'),
    },
  });
};
