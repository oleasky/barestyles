"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = void 0;
const base = ({ addBase, theme }) => {
    addBase({
        html: {
            fontFamily: theme('fontFamily.sans'),
            lineHeight: theme('lineHeight.base', '1.5'),
        },
        h1: {
            marginBottom: theme('spacing.4', '1rem'),
            lineHeight: theme('lineHeight.tight', '1.2'),
            fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
        },
        h2: {
            marginBottom: theme('spacing.4', '1rem'),
            lineHeight: theme('lineHeight.tight', '1.2'),
            fontSize: 'clamp(1.8rem, 3.3vw, 3.3rem)',
            fontWeight: theme('fontWeight.semibold', '600'),
        },
        h3: {
            marginTop: theme('spacing.10', '2.5rem'),
            lineHeight: theme('lineHeight.tight', '1.2'),
            fontSize: 'clamp(1.2rem, 1.6vw, 1.6rem)',
        },
        h4: {
            fontSize: 'clamp(1.1rem, 1.4vw, 1.4rem)',
        },
        h5: {
            fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
        },
        h6: {
            fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)',
        },
        p: {
            marginBottom: theme('spacing.4', '1rem'),
            lineHeight: theme('lineHeight.relaxed', '1.7'),
            width: '100%',
            maxWidth: '80ch',
            fontSize: theme('fontSize.fluid-xs', '1rem'),
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
            fontSize: theme('fontSize.sm', '0.875rem'),
            fontStyle: 'italic',
        },
    });
};
exports.base = base;
