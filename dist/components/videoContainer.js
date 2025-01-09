"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoContainer = void 0;
const videoContainer = ({ addComponents, theme }) => {
    addComponents({
        '.video-container': {
            width: '90vw',
            maxWidth: '100%',
            paddingBottom: '56.25%', /* This is for a 16:9 ratio (height/width = 9/16 = 0.5625 or 56.25%) */
            height: '0',
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
        },
        // Responsive iframe
        '.video-container iframe': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: '0',
        },
    });
};
exports.videoContainer = videoContainer;
