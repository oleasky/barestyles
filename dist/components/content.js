"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.content = void 0;
const content = ({ addComponents, theme }) => {
    addComponents({
        '.content': {
            width: '100%',
            padding: theme('spacing.fluid-lg', '10%'),
        },
    });
};
exports.content = content;
