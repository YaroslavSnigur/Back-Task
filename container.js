"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("./node_modules/inversify");
const interfaces_1 = require("./interfaces");
const container = new inversify_1.Container();
container.bind(interfaces_1.TodoClient).toSelf();
exports.default = container;
