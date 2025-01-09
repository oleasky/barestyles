"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const container = ({ addComponents, theme }) => {
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
exports.container = container;
