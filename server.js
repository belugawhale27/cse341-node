"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 8080;
app.use('/', index_js_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
