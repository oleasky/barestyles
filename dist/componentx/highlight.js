"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlight = void 0;
const highlight = ({ addComponents, theme }) => {
    addComponents({
        '.highlight': {
            backgroundColor: theme('colors.indigo.500', '#4F46E5'),
            width: '100%',
            padding: theme('spacing.fluid-lg', '10%'),
        },
    });
};
exports.highlight = highlight;
