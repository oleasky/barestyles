import { PluginAPI } from 'tailwindcss/types/config';

export const base = ({ addBase, theme }: PluginAPI) => {
  addBase({
    html: {
      fontFamily: theme('fontFamily.sans'),
      lineHeight: theme('lineHeight.base', '1.5'),
    },
    h1: {
      marginBottom: theme('spacing.4', '1rem'),
      lineHeight: theme('lineHeight.tight', '1.2'),
      fontSize: theme('fontSize.fluid-4xl', 'clamp(3rem, 5vw, 5rem)'),
      fontWeight: theme('fontWeight.extrabold', '800'),
    },
    h2: {
      marginBottom: theme('spacing.4', '1rem'),
      lineHeight: theme('lineHeight.tight', '1.2'),
      fontSize: theme('fontSize.fluid-3xl', 'clamp(2.5rem, 4vw, 4rem)'),
      fontWeight: theme('fontWeight.bold', '700'),
    },
    h3: {
      marginTop: theme('spacing.10', '2.5rem'),
      lineHeight: theme('lineHeight.tight', '1.2'),
      fontSize: theme('fontSize.fluid-2xl', 'clamp(2rem, 3vw, 3rem)'),
      fontWeight: theme('fontWeight.semibold', '600'),
    },
    h4: {
      marginBottom: theme('spacing.2', '0.5rem'),
      lineHeight: theme('lineHeight.tight', '1.2'),
      fontSize: theme('fontSize.fluid-xl', 'clamp(1.5rem, 2.5vw, 2.25rem)'),
      fontWeight: theme('fontWeight.medium', '500'),
    },
    h5: {
      marginBottom: theme('spacing.2', '0.5rem'),
      fontSize: theme('fontSize.fluid-lg', 'clamp(1.25rem, 2vw, 1.75rem)'),
      fontWeight: theme('fontWeight.medium', '500'),
    },
    h6: {
      marginBottom: theme('spacing.2', '0.5rem'),
      fontSize: theme('fontSize.fluid-md', 'clamp(1rem, 1.5vw, 1.25rem)'),
      fontWeight: theme('fontWeight.medium', '500'),
    },
    p: {
      marginBottom: theme('spacing.4', '1rem'),
      lineHeight: theme('lineHeight.relaxed', '1.7'),
      width: '100%',
      maxWidth: '80ch',
      fontSize: theme('fontSize.fluid-sm', 'clamp(0.75rem, 1.2vw, 1rem)'),
    },
    ul: {
      paddingLeft: theme('spacing.6', '1.5rem'),
      listStyleType: 'disc',
      lineHeight: theme('lineHeight.relaxed', '1.7'),
      width: '100%',
      maxWidth: '80ch',
    },
    ol: {
      paddingLeft: theme('spacing.6', '1.5rem'),
      listStyleType: 'decimal',
      lineHeight: theme('lineHeight.relaxed', '1.7'),
      width: '100%',
      maxWidth: '80ch',
    },
    small: {
      fontFamily: theme('fontFamily.sans'),
      fontSize: theme('fontSize.fluid-xs', 'clamp(0.625rem, 1vw, 0.875rem)'),
      fontStyle: 'italic',
    },
  });
};
