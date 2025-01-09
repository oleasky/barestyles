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
    // hero(pluginAPI);
};
exports.components = components;
