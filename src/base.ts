import { PluginAPI } from 'tailwindcss/types/config';

export const base = ({ addBase, theme }: PluginAPI) => {
  addBase({
    html: {
      lineHeight: theme('lineHeight.base', '1.5'),
    },
    h1: {
      marginBottom: theme('spacing.4', '1rem'),
      lineHeight: theme('lineHeight.tight', '1.2'),
      fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
      fontFamily: theme('fontFamily.sans'),
    },
    h2: {
      marginBottom: theme('spacing.4', '1rem'),
      fontSize: 'clamp(1.8rem, 3.3vw, 3.3rem)',
      fontWeight: theme('fontWeight.semibold', '600'),
      fontFamily: theme('fontFamily.sans'),
    },
    h3: {
      marginTop: theme('spacing.10', '2.5rem'),
      fontSize: 'clamp(1.2rem, 1.6vw, 1.6rem)',
      fontFamily: theme('fontFamily.sans'),
    },
    h4: {
      fontSize: 'clamp(1.1rem, 1.4vw, 1.4rem)',
      fontFamily: theme('fontFamily.sans'),
    },
    h5: {
      fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
      fontFamily: theme('fontFamily.sans'),
    },
    h6: {
      fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)',
      fontFamily: theme('fontFamily.sans'),
    },
    p: {
      marginBottom: theme('spacing.4', '1rem'),
      lineHeight: theme('lineHeight.relaxed', '1.7'),
      width: '100%',
      maxWidth: '80ch',
      fontFamily: theme('fontFamily.sans'),
      fontSize: theme('fontSize.sm', '1rem'),
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
      fontSize: theme('fontSize.sm', '0.875rem'),
      fontStyle: 'italic',
    },
  });
};
