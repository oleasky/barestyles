import { PluginAPI } from 'tailwindcss/types/config';

export const utilities = ({ addUtilities }: PluginAPI) => {
  addUtilities({
    // Sticky footer utility
    '.sticky-footer': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      '> *': {
        flexShrink: '0',
      },
      '&-content': {
        flexGrow: '1',
      },
    },

    // Utility for centering content
    '.center-content': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Utility for aspect ratio
    '.aspect-square': {
      aspectRatio: '1 / 1',
    },

    // Text utilities
    '.text-fluid': {
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    },
  });
};
