"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.button = void 0;
const button = ({ addComponents, theme }) => {
    addComponents({
        '.btn': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
            borderRadius: theme('borderRadius.md', '0.375rem'),
            fontWeight: theme('fontWeight.medium', '500'),
            textAlign: 'center',
            backgroundColor: theme('colors.slate.500', '#3B82F6'),
            color: theme('colors.white', '#FFFFFF'),
            '&:hover': {
                backgroundColor: theme('colors.blue.600', '#2563EB'),
            },
        },
    });
};
exports.button = button;
