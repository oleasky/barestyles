import { PluginAPI } from 'tailwindcss/types/config';

export const container = ({ addComponents, theme }: PluginAPI) => {
  addComponents({
    '.container-max': {
      maxWidth: theme('screens.lg', '81.25rem'),
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme('spacing.4', '1rem'),
      paddingRight: theme('spacing.4', '1rem'),
    },
  });
};
