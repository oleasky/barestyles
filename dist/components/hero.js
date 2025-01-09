"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hero = void 0;
const hero = ({ addComponents, theme }) => {
    addComponents({
        '.hero-image': {
            borderTopColor: theme('colors.green.500', '#1E293B'),
            borderTopWidth: '1rem'
        },
        '.hero figure::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: '1',
        },
        '.hero figure img': {
            zIndex: '0',
        },
        '.hero figure+div': {
            color: theme('colors.white', '#FFFFFF'),
        }
    });
};
exports.hero = hero;
