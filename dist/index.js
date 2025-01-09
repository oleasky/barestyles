"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const base_1 = require("./base");
const utilities_1 = require("./utilities");
const components_1 = require("./components");
const colors_1 = require("./colors");
const theme_1 = require("./theme");
exports.default = (0, plugin_1.default)(function (options) {
    (0, base_1.base)(options);
    (0, utilities_1.utilities)(options);
    (0, components_1.components)(options);
    (0, colors_1.generateColorUtilities)(options);
}, {
    theme: {
        extend: theme_1.themeExtend,
    }
});
