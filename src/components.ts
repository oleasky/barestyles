import { PluginAPI } from 'tailwindcss/types/config';

export const components = ({ addComponents, theme }: PluginAPI) => {
  addComponents({
    // Container component for consistent layout
    '.container-max': {
      maxWidth: theme('screens.lg', '81.25rem'), // Use lg breakpoint from Tailwind's theme
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme('spacing.4', '1rem'),
      paddingRight: theme('spacing.4', '1rem'),
    },

    // Basic button styles
    '.btn': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`, // Spacing utility
      borderRadius: theme('borderRadius.md', '0.375rem'),
      fontWeight: theme('fontWeight.medium', '500'),
      textAlign: 'center',
      backgroundColor: theme('colors.slate.500', '#3B82F6'),
      color: theme('colors.white', '#FFFFFF'),
      '&:hover': {
        backgroundColor: theme('colors.blue.600', '#2563EB'),
      },
    },

    // Card component for wireframing
    '.card': {
      borderWidth: theme('borderWidth.DEFAULT', '1px'),
      borderRadius: theme('borderRadius.md', '0.375rem'),
      padding: theme('spacing.6', '1.5rem'),
      boxShadow: theme('boxShadow.md', '0 4px 6px rgba(0, 0, 0, 0.1)'),
      backgroundColor: theme('colors.white', '#FFFFFF'),
    },

    // Content wrapper
    '.content': {
      width: '100%',
      padding: theme('spacing.fluid-lg', '10%'),
    },
  });
};
