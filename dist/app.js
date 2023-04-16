"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const invoicesRoutes_1 = tslib_1.__importDefault(require("./routes/invoicesRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.use("/invoices", invoicesRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map