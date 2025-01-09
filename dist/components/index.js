"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.components = void 0;
const containermax_1 = require("./containermax");
const button_1 = require("./button");
const card_1 = require("./card");
const content_1 = require("./content");
const components = (pluginAPI) => {
    (0, containermax_1.container)(pluginAPI);
    (0, button_1.button)(pluginAPI);
    (0, card_1.card)(pluginAPI);
    (0, content_1.content)(pluginAPI);
    // videoContainer(pluginAPI);
};
exports.components = components;
// import { PluginAPI } from 'tailwindcss/types/config';
// export const components = ({ addComponents, theme }: PluginAPI) => {
//   addComponents({
//     // Hero component
//     '.hero-image':{
//       borderTopColor: theme('colors.green.500', '#1E293B'),
//       borderTopWidth: '1rem'
//     },
//     '.hero figure::before': {
//       content: '""',
//       display: 'block',
//       position: 'absolute',
//       top: '0',
//       left: '0',
//       width: '100%',
//       height: '100%',
//       backgroundColor: 'rgba(0, 0, 0, 0.7)',
//       zIndex: '1',
//     },
//     '.hero figure img': {
//       zIndex: '0',
//     },
//     '.hero figure+div':{
//       color: theme('colors.white', '#FFFFFF'),
//     }
//   });
// };
